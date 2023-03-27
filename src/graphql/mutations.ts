/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMembershipType = /* GraphQL */ `
  mutation CreateMembershipType(
    $input: CreateMembershipTypeInput!
    $condition: ModelMembershipTypeConditionInput
  ) {
    createMembershipType(input: $input, condition: $condition) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const updateMembershipType = /* GraphQL */ `
  mutation UpdateMembershipType(
    $input: UpdateMembershipTypeInput!
    $condition: ModelMembershipTypeConditionInput
  ) {
    updateMembershipType(input: $input, condition: $condition) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const deleteMembershipType = /* GraphQL */ `
  mutation DeleteMembershipType(
    $input: DeleteMembershipTypeInput!
    $condition: ModelMembershipTypeConditionInput
  ) {
    deleteMembershipType(input: $input, condition: $condition) {
      id
      name
      newMemberRate
      returningMemberRate
      createdAt
      updatedAt
    }
  }
`;
export const createTUInfo = /* GraphQL */ `
  mutation CreateTUInfo(
    $input: CreateTUInfoInput!
    $condition: ModelTUInfoConditionInput
  ) {
    createTUInfo(input: $input, condition: $condition) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTUInfo = /* GraphQL */ `
  mutation UpdateTUInfo(
    $input: UpdateTUInfoInput!
    $condition: ModelTUInfoConditionInput
  ) {
    updateTUInfo(input: $input, condition: $condition) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTUInfo = /* GraphQL */ `
  mutation DeleteTUInfo(
    $input: DeleteTUInfoInput!
    $condition: ModelTUInfoConditionInput
  ) {
    deleteTUInfo(input: $input, condition: $condition) {
      email
      data
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAccountInformation = /* GraphQL */ `
  mutation CreateAccountInformation(
    $input: CreateAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    createAccountInformation(input: $input, condition: $condition) {
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
export const updateAccountInformation = /* GraphQL */ `
  mutation UpdateAccountInformation(
    $input: UpdateAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    updateAccountInformation(input: $input, condition: $condition) {
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
export const deleteAccountInformation = /* GraphQL */ `
  mutation DeleteAccountInformation(
    $input: DeleteAccountInformationInput!
    $condition: ModelAccountInformationConditionInput
  ) {
    deleteAccountInformation(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
