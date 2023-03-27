import { GraphQLQuery } from '@aws-amplify/api';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { Button, Text, withAuthenticator } from '@aws-amplify/ui-react';
import { Box, FormControl, Grid, LinearProgress, TextField } from '@mui/material';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import * as React from 'react';

import {
  GetAccountInformationQuery,
  ListMembershipTypesQuery,
  MembersByAccountLoginAndBirthDateQuery,
  TUInfo,
  TUInfosByEmailQuery,
} from '../API';
import { createAccountInformation, createMember } from '../graphql/mutations';
import {
  getAccountInformation,
  listMembershipTypes,
  membersByAccountLoginAndBirthDate,
  tUInfosByEmail,
} from '../graphql/queries';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import AccountRegistration from './AccountRegistration';



interface TUAccount{
  email: string;
  address: string;
  type: string;
  members: TUMember[];
}

interface TUMember{
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  gender: string;
  birthday: string;
}

interface AccountForm{
  address: string;
  email: string;
}

const AccountInformation = (authInformation: any)=>  {


  const [needsNewAccount, setNeedsNewAccount] = useState<boolean>(false);

  const [accountInfo, setAccountInfo] = useState<WSSCAccountInfo>();
  const [accountForm, setAccountForm] = useState<AccountForm>({address:"",email:""});
  
  const [members, setMembers] = useState<WSSCMember[]>();
  const [membershipTypes, setMembershipTypes] = useState<Map<string, WSSCMemberShipType>>();
  const [userInformation] = useState(authInformation.user);
  

  const loadAccountInformation = (userName: string, email: string) =>{
    API.graphql<GraphQLQuery<GetAccountInformationQuery>>({ 
      query: getAccountInformation,
      variables: { id: userName }
    }).then(results => {
      console.log("Get Account Information Results", results);
      if(results.data?.getAccountInformation){
        const dbAccount = results.data?.getAccountInformation;
        setAccountInfo({
          id: dbAccount.id,
          userName: dbAccount.login,
          membershipType: dbAccount.membershipType.id,
          balance: dbAccount.balance,
          address: dbAccount.address?.replace("%n","\n"),
          email: dbAccount.email
        })
        API.graphql<GraphQLQuery<MembersByAccountLoginAndBirthDateQuery>>({ 
          query: membersByAccountLoginAndBirthDate,
          variables: { accountLogin: userName }
        }).then(memberResults => {
          let members:WSSCMember[] = []
          memberResults.data.membersByAccountLoginAndBirthDate.items.forEach(dbMem=>{
              members.push({
                id: dbMem.id,
                firstName: dbMem.firstName,
                middleName: dbMem.middleName,
                lastName: dbMem.lastName,
                preferredName: dbMem.prefferedName,
                gender: dbMem.gender,
                birthday: dbMem.birthDate
              })
          })
          setMembers(members);
        });
      }else{
        console.log("No Data, Lookup in TU");
        checkForExistingAccountInformation(userName, email);
      }
    }).catch(reason => {
      console.log("Did not find, Try to Back load from TU", reason);
      checkForExistingAccountInformation(userName, email);
    });
  }


  const checkForExistingAccountInformation = (userName: string, emailIn: string) =>{
    API.graphql<GraphQLQuery<TUInfosByEmailQuery>>({ 
      query: tUInfosByEmail,
      variables: { email: emailIn}
    }).then(results => {
      console.log("Results");
      console.log(results);
      if(results.data?.tUInfosByEmail?.items?.length > 0){
        const tuInfo = results.data?.tUInfosByEmail?.items[0];
        createAccountFromTUData(tuInfo, userName, emailIn);
      }else{
        //Nothing found new member
        setNeedsNewAccount(true);
      }
    }).catch(reason => {
      console.log("No Back load, New Member", reason);
      setNeedsNewAccount(true);
    });
  }

  const createAccountFromTUData = async (tuInfo: TUInfo, userName: string, email: string) => {
    let tuAccountInfo: TUAccount = JSON.parse(tuInfo.data); 
    
    const params = {input:
      {
        id: userName,
        login : userName,
        accountInformationMembershipTypeId: tuAccountInfo.type.toLowerCase(),
        balance: 0.0,
        address: tuAccountInfo.address,
        email: email
      }
    }
    console.log(params);
    const result = await API.graphql(graphqlOperation(createAccountInformation, params));
    console.log("create result:", result);

    for(let i = 0; i < tuAccountInfo.members.length; i++){
      let m = tuAccountInfo.members[i];
      const result3 = await API.graphql(graphqlOperation(createMember, 
        {input:{
          firstName: m.firstName,
          middleName: m.middleName,
          lastName: m.lastName,
          birthDate: m.birthday,
          gender: m.gender,
          prefferedName: m.preferredName,
          accountLogin: userName
        }}
      ));
      console.log("create Member result:", result3);
    }
  }
  
  useEffect(() => {
    if(accountInfo){
      setAccountForm({
        address: accountInfo.address,
        email: accountInfo.email
      })
    }
  }, [accountInfo]);

  useEffect(() => {
    // loadMemberShipTypes();
    API.graphql<GraphQLQuery<ListMembershipTypesQuery>>({
      query: listMembershipTypes
    }).then(results => {
      let tempMembershipTypes:Map<string, WSSCMemberShipType> = new Map();
      results.data?.listMembershipTypes?.items.forEach(mt => {
        tempMembershipTypes.set(mt.id, {
          type: mt.id,
          name: mt.name,
          newMemberRate: mt.newMemberRate,
          returningMemberRate: mt.returningMemberRate
        })
      })
      setMembershipTypes(tempMembershipTypes)
    });
    console.log(userInformation);
    loadAccountInformation(userInformation.username, userInformation.attributes.email);
  }, []);

  const isLoading = () : boolean =>{
    console.log("isLoading", accountInfo  , members  , membershipTypes )
    return (accountInfo === undefined) || (members === undefined) || (membershipTypes === undefined);
  }

  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 90 },
    { field: 'birthday', headerName: 'Birth Date', width: 100 }, 
    { field: 'id', width: 100,
      headerName: '',
      renderCell: (params: GridRenderCellParams<Date>) => (
        <strong>
          <Button
            size="small"
            style={{ marginLeft: 16 }}
          >
            Edit
          </Button>
        </strong>
      ),
    },
  ];

  let rows: GridRowsProp = (members == null? []: members) ;


  let content;

  if(needsNewAccount){
    content = <AccountRegistration user={userInformation} membershipTypes={membershipTypes}/>
  
  }else if(isLoading()){
    content = 
      <Box sx={{ width: '50%', marginLeft: 'auto', marginRight: 'auto',}}>
        Loading...
        <LinearProgress />
      </Box>;

  }else{
    content = 
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={4}>
          <fieldset className='sectionOutline' style={{border: "solid 1px black"}}>
            <legend className='sectionLabel'>Account Information:</legend>
            <div style={{}}>{(membershipTypes?.get(accountInfo?.membershipType)?.name || "Unknown Membership Type")}</div>
            <div style={{marginTop:"10px"}}>
              Account Balance: 
              {" $" + (accountInfo?.balance || 0.00).toFixed(2)}
            </div>
            <TextField
              required
              id="accountAddress"
              value={accountForm.address}
              label="Address"
              multiline
              rows={3}
              fullWidth
              sx={{mt: "20px"}}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setAccountForm((acctForm)=>({...acctForm, address: e.target.value}))}
            />
            <TextField
              required
              id="accountEmail"
              value={accountForm.email}
              label="Email"
              fullWidth
              sx={{mt: "20px"}}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setAccountForm((acctForm)=>({...acctForm, email: e.target.value}))}
            />
            <Button>Save Changes</Button>
          </fieldset>
        </Grid> 
        <Grid item sm={12} lg={8}>
          <fieldset className='sectionOutline' style={{border: "solid 1px black"}}>
            <legend className='sectionLabel'>Members on Account:</legend>
            <Box sx={{ height: 400, minWidth: '600px' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                sx={{ margin: .2 }} 
              />
            </Box>
          </fieldset>
        </Grid>
      </Grid>
    </React.Fragment>
    ;
  }


  return (
    <div>
      {content}
      <pre>{JSON.stringify(userInformation, null, 4)}</pre>
    </div>)
};

export default withAuthenticator(AccountInformation);