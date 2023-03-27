/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMembershipType = /* GraphQL */ `
  query GetMembershipType($id: ID!) {
    getMembershipType(id: $id) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const listMembershipTypes = /* GraphQL */ `
  query ListMembershipTypes(
    $id: ID
    $filter: ModelMembershipTypeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMembershipTypes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        newMemberRate
        returningMemberRate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccountInformation = /* GraphQL */ `
  query GetAccountInformation($id: ID!) {
    getAccountInformation(id: $id) {
      id
      login
      membershipType {
        id
        name
        newMemberRate
        returningMemberRate
        createdAt
        updatedAt
      }
      balance
      address
      email
      createdAt
      updatedAt
      accountInformationMembershipTypeId
      owner
    }
  }
`;
export const listAccountInformations = /* GraphQL */ `
  query ListAccountInformations(
    $id: ID
    $filter: ModelAccountInformationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccountInformations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        login
        balance
        address
        email
        createdAt
        updatedAt
        accountInformationMembershipTypeId
        owner
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      accountLogin
      firstName
      middleName
      lastName
      prefferedName
      birthDate
      gender
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $id: ID
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMembers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        accountLogin
        firstName
        middleName
        lastName
        prefferedName
        birthDate
        gender
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const accountInformationsByLogin = /* GraphQL */ `
  query AccountInformationsByLogin(
    $login: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountInformationsByLogin(
      login: $login
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        login
        balance
        address
        email
        createdAt
        updatedAt
        accountInformationMembershipTypeId
        owner
      }
      nextToken
    }
  }
`;
export const membersByAccountLoginAndBirthDate = /* GraphQL */ `
  query MembersByAccountLoginAndBirthDate(
    $accountLogin: ID!
    $birthDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    membersByAccountLoginAndBirthDate(
      accountLogin: $accountLogin
      birthDate: $birthDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountLogin
        firstName
        middleName
        lastName
        prefferedName
        birthDate
        gender
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTUInfo = /* GraphQL */ `
  query GetTUInfo($id: ID!) {
    getTUInfo(id: $id) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTUInfos = /* GraphQL */ `
  query ListTUInfos(
    $filter: ModelTUInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTUInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        data
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tUInfosByEmail = /* GraphQL */ `
  query TUInfosByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTUInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tUInfosByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        data
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
