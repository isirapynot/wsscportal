import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { createMembershipType, createTUInfo } from "./graphql/mutations";
import { listMembershipTypes, listTUInfos } from "./graphql/queries";
import { ListMembershipTypesQuery, ListTUInfosQuery, MembershipType, TUInfo } from "./API"

interface Account{
  email: string;
  address: string;
  type: string;
  members: Member[];
}

interface Member{
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  gender: string;
  birthday: string;
}


const output: Account[] = require("./output.json");

const  loadMemberShipTypes =  () => {
  API.graphql<GraphQLQuery<ListMembershipTypesQuery>>({ 
    query: listMembershipTypes
  }).then(results => {
    console.log(results);
    if(results.data.listMembershipTypes.items.length === 0){
      createMemberShipType(
        {
          id: "family",
          name: "Family MemberShip",
          newMemberRate: 580,
          returningMemberRate: 780
      });  
      createMemberShipType(
        {
          id: "couple",
          name: "Couple MemberShip",
          newMemberRate: 350,
          returningMemberRate: 550
        });  
        createMemberShipType(
          {
            id: "single",
            name: "Single MemberShip",
            newMemberRate: 250,
            returningMemberRate: 400 
          });  
    }
  }); 
  API.graphql<GraphQLQuery<ListTUInfosQuery>>({ 
    query: listTUInfos
  }).then(results => {
    console.log("TUInfo:", results.data.listTUInfos.items.length ,results);
    console.log(output);

    if(results.data.listTUInfos.items.length === 0){
      output.forEach(element => {
        createTuInfo(
          {
            email: element.email,
            data: JSON.stringify(element)
        });  
      });
    }
  });

}

const createMemberShipType = async (type: any) => {
  await API.graphql<GraphQLQuery<MembershipType>>({ 
    query: createMembershipType, 
    variables: { input: type }
  });  
}
const createTuInfo = async (type: any) => {
  await API.graphql<GraphQLQuery<TUInfo>>({ 
    query: createTUInfo, 
    variables: { input: type }
  });  
}
export default loadMemberShipTypes;