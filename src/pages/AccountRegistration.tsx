import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DataGrid, GridAddIcon, GridColDef, GridRenderCellParams, GridRowModel, GridRowModes, GridRowModesModel, GridRowsProp, GridToolbarContainer } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers';



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
  membershipType: string;
}
interface MemberForm{ 
  index: number; 
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  gender: string;
  birthday: string;
}


const AccountRegistration = (props: any): JSX.Element =>  {
  const [accountInfo, setAccountInfo] = useState<WSSCAccountInfo>();
  const [accountForm, setAccountForm] = useState<AccountForm>(
    {
      address:"",
      email:props.user.attributes.email, 
      membershipType: "family"
    }
  );
  
  const [members, setMembers] = useState<WSSCMember[]>([]);
  const [memberForm, setMemberForm] = useState<WSSCMember>(
    {
      id: "-1",
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      gender: "",
      birthday: ""
    }
  );
  const [membershipTypes, setMembershipTypes] = useState<Map<string, WSSCMemberShipType>>(props.membershipTypes);
  const [userInformation] = useState(props.user);
  
/*
  const loadAccountInformation = (userName: string, email: string) =>{
    API.graphql<GraphQLQuery<GetAccountInformationQuery>>({ 
      query: getAccountInformation,
      variables: { id: userName }
    }).then(results => {
      console.log("Results");
      console.log(results);
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
      console.log("Did not find, Try to Back load");
      console.log(reason);
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
      }
    }).catch(reason => {
      console.log("No Back load, New Member");
      console.log(reason);
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
    return (accountInfo === null) && (members === null) && (membershipTypes === null);
  }
  
  useEffect(() => {
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
}, []);
*/

const isLoading = () : boolean =>{
  return (membershipTypes == undefined);
}


  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First Name', width: 150, editable: true },
    { field: 'middleName', headerName: 'Middle Name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
    { field: 'preferredName', headerName: 'Preferred Name', width: 150, editable: true },
    { field: 'gender', headerName: 'Gender', width: 130, editable: true, type: "singleSelect",
      valueOptions: [{value:"M", label:"Male"}, {value:"F", label:"Female"}, {value:"U", label:"Unspecified"}]},
    { field: 'birthday', headerName: 'Birth Date', type:'date', width: 150, editable: true }, 
    { field: 'id', width: 100,
      headerName: '',
      renderCell: (params: GridRenderCellParams<Date>) => (
        <strong>
          <Button
            size="small"
            style={{ marginLeft: 16 }}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  let rows: GridRowsProp = (members == null? []: members) ;

  let membershipTypeMenus :JSX.Element[] = [];
  membershipTypes.forEach((val: WSSCMemberShipType, key: string) =>{
    membershipTypeMenus.push(
      <MenuItem key={"mt_" + key} value={key}>{val.name}</MenuItem>
    );
  })

  const updateMember = () => {
    if(memberForm.id == "-1"){
      setMembers(
        (mems) => {
          let newMems: WSSCMember[] = [...mems];
          newMems.push(
            {
              ...memberForm,
              id: String(mems.length) 
            }
          )
          return newMems;
        }
      )
    }
  }

  const processRowEdited = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => 
      new Promise<Partial<WSSCMember>>((resolve, reject) => {
        let newMember :WSSCMember = {
          id: newRow.id,
          firstName: newRow.firstName,
          middleName: newRow.middleName,
          lastName: newRow.lastName,
          preferredName: newRow.preferredName,
          gender: newRow.gender,
          birthday: newRow.birthday
        };
        setMembers(
          (mems : WSSCMember[]) => {
            console.log("newRow", newRow, newRow.id);
            console.log(mems);
            let newMems: WSSCMember[] = [...mems];
            newMems[Number(newRow.id)] = newMember;
            console.log(newMems);
            return newMems;
          }
        );
        resolve(newMember);
      })    
      ,
    [members],
  );

  const EditToolbar = () => {
    const handleClick = () => {
      setMembers(
        (mems) => {
          let newMems: WSSCMember[] = [...mems];
          newMems.push(
            {
              id: String(mems.length) ,
              firstName: "",
              middleName: "",
              lastName: "",
              preferredName: "",
              gender: "",
              birthday: ""
            }
          )
          return newMems;
        }
      )
    };
  
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<GridAddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }
  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={12}>
          <h1>New Account Creation</h1>
          <FormControl sx={{mt: "20px"}}>
            <InputLabel id="membershipType-label">Membership Type</InputLabel>
            <Select
              labelId='membershipType-label'
              id="membershipType"
              value={accountForm.membershipType}
              label="Membership Type"
              onChange={(e) => setAccountForm((acctForm)=>({...acctForm, membershipType: e.target.value}))}
              >
              {membershipTypeMenus}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{mt: "20px"}}>
          <TextField
            required
            id="accountAddress"
            value={accountForm.address}
            error={accountForm.address?.trim().length == 0}
            label="Address"
            multiline
            rows={3}
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setAccountForm((acctForm)=>({...acctForm, address: e.target.value}))}
          />
          </FormControl>
          <FormControl fullWidth sx={{mt: "20px"}}>
          <TextField
            required
            id="accountEmail"
            error={accountForm.address?.trim().length == 0}
            value={accountForm.email}
            label="Email"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setAccountForm((acctForm)=>({...acctForm, email: e.target.value}))}
          />
          </FormControl>
        </Grid>
        <Grid item sm={12} lg={12}>
          <fieldset className='sectionOutline' style={{border: "solid 1px black"}}>
            <legend className='sectionLabel'>Members on Account:</legend>
            <Grid container spacing={2}>
              {/*
              <Grid item sm={4} spacing={2}>
                <FormControl fullWidth sx={{mt: "20px"}}>
                <TextField
                  required
                  id="memberFirstName"
                  value={memberForm.firstName}
                  label="First Name"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setMemberForm((memForm)=>({...memForm, firstName: e.target.value}))}
                  />
                </FormControl>
                <FormControl fullWidth sx={{mt: "20px"}}>
                <TextField
                  id="memberFirstName"
                  value={memberForm.middleName}
                  label="Middle Name"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setMemberForm((memForm)=>({...memForm, middleName: e.target.value}))}
                  />
                </FormControl>
                <FormControl fullWidth sx={{mt: "20px"}}>
                <TextField
                  required
                  id="memberLastName"
                  value={memberForm.lastName}
                  label="Last Name"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setMemberForm((memForm)=>({...memForm, lastName: e.target.value}))}
                  />
                </FormControl>
                <FormControl fullWidth sx={{mt: "20px"}}>
                <TextField
                  id="memberPreferredName"
                  value={memberForm.preferredName}
                  label="Preferred Name"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setMemberForm((memForm)=>({...memForm, preferredName: e.target.value}))}
                  />
                </FormControl>
                <FormControl fullWidth sx={{mt: "20px"}}>
                  <InputLabel id="memberGender-label">Gender</InputLabel>
                  <Select
                    labelId='memberGender-label'
                    id="memberGender"
                    value={memberForm.gender}
                    label="Gender"
                    onChange={(e) => setMemberForm((memForm)=>({...memForm, gender: e.target.value}))}
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="U">Unspecified</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{mt: "20px"}}>
                  <DatePicker 
                    label="Birth Date"
                    value={memberForm.birthday}
                    onChange={(e) => setMemberForm((memForm)=>({...memForm, birthday: e}))}
                  />
                </FormControl>
                <Button onClick={updateMember}>{memberForm.id == "-1"?"Add":"Update"}</Button>
              </Grid>
  */}
              <Grid item sm={12}>
                <Box sx={{ height: 400}}>
                  <DataGrid
                    editMode="row" 
                    rows={rows}
                    columns={columns}
                    sx={{ margin: .2 }}
                    slots={{
                      toolbar: EditToolbar,
                    }}
                    processRowUpdate={processRowEdited}
                />
                </Box>
              </Grid>
            </Grid>
          </fieldset>
        </Grid>
      </Grid>
    </div>)
};

export default AccountRegistration;