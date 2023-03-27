/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMembershipType = /* GraphQL */ `
  subscription OnCreateMembershipType(
    $filter: ModelSubscriptionMembershipTypeFilterInput
  ) {
    onCreateMembershipType(filter: $filter) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMembershipType = /* GraphQL */ `
  subscription OnUpdateMembershipType(
    $filter: ModelSubscriptionMembershipTypeFilterInput
  ) {
    onUpdateMembershipType(filter: $filter) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMembershipType = /* GraphQL */ `
  subscription OnDeleteMembershipType(
    $filter: ModelSubscriptionMembershipTypeFilterInput
  ) {
    onDeleteMembershipType(filter: $filter) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccountInformation = /* GraphQL */ `
  subscription OnCreateAccountInformation(
    $filter: ModelSubscriptionAccountInformationFilterInput
    $owner: String
  ) {
    onCreateAccountInformation(filter: $filter, owner: $owner) {
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
export const onUpdateAccountInformation = /* GraphQL */ `
  subscription OnUpdateAccountInformation(
    $filter: ModelSubscriptionAccountInformationFilterInput
    $owner: String
  ) {
    onUpdateAccountInformation(filter: $filter, owner: $owner) {
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
export const onDeleteAccountInformation = /* GraphQL */ `
  subscription OnDeleteAccountInformation(
    $filter: ModelSubscriptionAccountInformationFilterInput
    $owner: String
  ) {
    onDeleteAccountInformation(filter: $filter, owner: $owner) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember(
    $filter: ModelSubscriptionMemberFilterInput
    $owner: String
  ) {
    onCreateMember(filter: $filter, owner: $owner) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember(
    $filter: ModelSubscriptionMemberFilterInput
    $owner: String
  ) {
    onUpdateMember(filter: $filter, owner: $owner) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember(
    $filter: ModelSubscriptionMemberFilterInput
    $owner: String
  ) {
    onDeleteMember(filter: $filter, owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTUInfo = /* GraphQL */ `
  subscription OnCreateTUInfo($filter: ModelSubscriptionTUInfoFilterInput) {
    onCreateTUInfo(filter: $filter) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTUInfo = /* GraphQL */ `
  subscription OnUpdateTUInfo($filter: ModelSubscriptionTUInfoFilterInput) {
    onUpdateTUInfo(filter: $filter) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTUInfo = /* GraphQL */ `
  subscription OnDeleteTUInfo($filter: ModelSubscriptionTUInfoFilterInput) {
    onDeleteTUInfo(filter: $filter) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
