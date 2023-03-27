/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMembershipTypeInput = {
  id?: string | null,
  name: string,
  newMemberRate?: number | null,
  returningMemberRate?: number | null,
};

export type ModelMembershipTypeConditionInput = {
  name?: ModelStringInput | null,
  newMemberRate?: ModelFloatInput | null,
  returningMemberRate?: ModelFloatInput | null,
  and?: Array< ModelMembershipTypeConditionInput | null > | null,
  or?: Array< ModelMembershipTypeConditionInput | null > | null,
  not?: ModelMembershipTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type MembershipType = {
  __typename: "MembershipType",
  id: string,
  name: string,
  newMemberRate?: number | null,
  returningMemberRate?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMembershipTypeInput = {
  id: string,
  name?: string | null,
  newMemberRate?: number | null,
  returningMemberRate?: number | null,
};

export type DeleteMembershipTypeInput = {
  id: string,
};

export type CreateTUInfoInput = {
  email: string,
  data?: string | null,
  id?: string | null,
};

export type ModelTUInfoConditionInput = {
  email?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelTUInfoConditionInput | null > | null,
  or?: Array< ModelTUInfoConditionInput | null > | null,
  not?: ModelTUInfoConditionInput | null,
};

export type TUInfo = {
  __typename: "TUInfo",
  email: string,
  data?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTUInfoInput = {
  email?: string | null,
  data?: string | null,
  id: string,
};

export type DeleteTUInfoInput = {
  id: string,
};

export type CreateAccountInformationInput = {
  id?: string | null,
  login: string,
  balance?: number | null,
  address?: string | null,
  email?: string | null,
  accountInformationMembershipTypeId?: string | null,
};

export type ModelAccountInformationConditionInput = {
  login?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountInformationConditionInput | null > | null,
  or?: Array< ModelAccountInformationConditionInput | null > | null,
  not?: ModelAccountInformationConditionInput | null,
  accountInformationMembershipTypeId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type AccountInformation = {
  __typename: "AccountInformation",
  id: string,
  login: string,
  membershipType?: MembershipType | null,
  balance?: number | null,
  address?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
  accountInformationMembershipTypeId?: string | null,
  owner?: string | null,
};

export type UpdateAccountInformationInput = {
  id: string,
  login?: string | null,
  balance?: number | null,
  address?: string | null,
  email?: string | null,
  accountInformationMembershipTypeId?: string | null,
};

export type DeleteAccountInformationInput = {
  id: string,
};

export type CreateMemberInput = {
  id?: string | null,
  accountLogin: string,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  prefferedName?: string | null,
  birthDate?: string | null,
  gender?: string | null,
};

export type ModelMemberConditionInput = {
  accountLogin?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  middleName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  prefferedName?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type Member = {
  __typename: "Member",
  id: string,
  accountLogin: string,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  prefferedName?: string | null,
  birthDate?: string | null,
  gender?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMemberInput = {
  id: string,
  accountLogin?: string | null,
  firstName?: string | null,
  middleName?: string | null,
  lastName?: string | null,
  prefferedName?: string | null,
  birthDate?: string | null,
  gender?: string | null,
};

export type DeleteMemberInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type ModelMembershipTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  newMemberRate?: ModelFloatInput | null,
  returningMemberRate?: ModelFloatInput | null,
  and?: Array< ModelMembershipTypeFilterInput | null > | null,
  or?: Array< ModelMembershipTypeFilterInput | null > | null,
  not?: ModelMembershipTypeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMembershipTypeConnection = {
  __typename: "ModelMembershipTypeConnection",
  items:  Array<MembershipType | null >,
  nextToken?: string | null,
};

export type ModelAccountInformationFilterInput = {
  id?: ModelIDInput | null,
  login?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAccountInformationFilterInput | null > | null,
  or?: Array< ModelAccountInformationFilterInput | null > | null,
  not?: ModelAccountInformationFilterInput | null,
  accountInformationMembershipTypeId?: ModelIDInput | null,
};

export type ModelAccountInformationConnection = {
  __typename: "ModelAccountInformationConnection",
  items:  Array<AccountInformation | null >,
  nextToken?: string | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  accountLogin?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  middleName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  prefferedName?: ModelStringInput | null,
  birthDate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items:  Array<Member | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelTUInfoFilterInput = {
  email?: ModelStringInput | null,
  data?: ModelStringInput | null,
  and?: Array< ModelTUInfoFilterInput | null > | null,
  or?: Array< ModelTUInfoFilterInput | null > | null,
  not?: ModelTUInfoFilterInput | null,
};

export type ModelTUInfoConnection = {
  __typename: "ModelTUInfoConnection",
  items:  Array<TUInfo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMembershipTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  newMemberRate?: ModelSubscriptionFloatInput | null,
  returningMemberRate?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionMembershipTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionMembershipTypeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAccountInformationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  login?: ModelSubscriptionStringInput | null,
  balance?: ModelSubscriptionFloatInput | null,
  address?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountInformationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountInformationFilterInput | null > | null,
};

export type ModelSubscriptionMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountLogin?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  middleName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  prefferedName?: ModelSubscriptionStringInput | null,
  birthDate?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberFilterInput | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionTUInfoFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTUInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTUInfoFilterInput | null > | null,
};

export type CreateMembershipTypeMutationVariables = {
  input: CreateMembershipTypeInput,
  condition?: ModelMembershipTypeConditionInput | null,
};

export type CreateMembershipTypeMutation = {
  createMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipTypeMutationVariables = {
  input: UpdateMembershipTypeInput,
  condition?: ModelMembershipTypeConditionInput | null,
};

export type UpdateMembershipTypeMutation = {
  updateMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipTypeMutationVariables = {
  input: DeleteMembershipTypeInput,
  condition?: ModelMembershipTypeConditionInput | null,
};

export type DeleteMembershipTypeMutation = {
  deleteMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTUInfoMutationVariables = {
  input: CreateTUInfoInput,
  condition?: ModelTUInfoConditionInput | null,
};

export type CreateTUInfoMutation = {
  createTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTUInfoMutationVariables = {
  input: UpdateTUInfoInput,
  condition?: ModelTUInfoConditionInput | null,
};

export type UpdateTUInfoMutation = {
  updateTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTUInfoMutationVariables = {
  input: DeleteTUInfoInput,
  condition?: ModelTUInfoConditionInput | null,
};

export type DeleteTUInfoMutation = {
  deleteTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountInformationMutationVariables = {
  input: CreateAccountInformationInput,
  condition?: ModelAccountInformationConditionInput | null,
};

export type CreateAccountInformationMutation = {
  createAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAccountInformationMutationVariables = {
  input: UpdateAccountInformationInput,
  condition?: ModelAccountInformationConditionInput | null,
};

export type UpdateAccountInformationMutation = {
  updateAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAccountInformationMutationVariables = {
  input: DeleteAccountInformationInput,
  condition?: ModelAccountInformationConditionInput | null,
};

export type DeleteAccountInformationMutation = {
  deleteAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMembershipTypeQueryVariables = {
  id: string,
};

export type GetMembershipTypeQuery = {
  getMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipTypesQueryVariables = {
  id?: string | null,
  filter?: ModelMembershipTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMembershipTypesQuery = {
  listMembershipTypes?:  {
    __typename: "ModelMembershipTypeConnection",
    items:  Array< {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountInformationQueryVariables = {
  id: string,
};

export type GetAccountInformationQuery = {
  getAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListAccountInformationsQueryVariables = {
  id?: string | null,
  filter?: ModelAccountInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountInformationsQuery = {
  listAccountInformations?:  {
    __typename: "ModelAccountInformationConnection",
    items:  Array< {
      __typename: "AccountInformation",
      id: string,
      login: string,
      balance?: number | null,
      address?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      accountInformationMembershipTypeId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMembersQueryVariables = {
  id?: string | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      accountLogin: string,
      firstName?: string | null,
      middleName?: string | null,
      lastName?: string | null,
      prefferedName?: string | null,
      birthDate?: string | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccountInformationsByLoginQueryVariables = {
  login: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccountInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccountInformationsByLoginQuery = {
  accountInformationsByLogin?:  {
    __typename: "ModelAccountInformationConnection",
    items:  Array< {
      __typename: "AccountInformation",
      id: string,
      login: string,
      balance?: number | null,
      address?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      accountInformationMembershipTypeId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MembersByAccountLoginAndBirthDateQueryVariables = {
  accountLogin: string,
  birthDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MembersByAccountLoginAndBirthDateQuery = {
  membersByAccountLoginAndBirthDate?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      id: string,
      accountLogin: string,
      firstName?: string | null,
      middleName?: string | null,
      lastName?: string | null,
      prefferedName?: string | null,
      birthDate?: string | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTUInfoQueryVariables = {
  id: string,
};

export type GetTUInfoQuery = {
  getTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTUInfosQueryVariables = {
  filter?: ModelTUInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTUInfosQuery = {
  listTUInfos?:  {
    __typename: "ModelTUInfoConnection",
    items:  Array< {
      __typename: "TUInfo",
      email: string,
      data?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TUInfosByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTUInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TUInfosByEmailQuery = {
  tUInfosByEmail?:  {
    __typename: "ModelTUInfoConnection",
    items:  Array< {
      __typename: "TUInfo",
      email: string,
      data?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMembershipTypeSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipTypeFilterInput | null,
};

export type OnCreateMembershipTypeSubscription = {
  onCreateMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipTypeSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipTypeFilterInput | null,
};

export type OnUpdateMembershipTypeSubscription = {
  onUpdateMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipTypeSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipTypeFilterInput | null,
};

export type OnDeleteMembershipTypeSubscription = {
  onDeleteMembershipType?:  {
    __typename: "MembershipType",
    id: string,
    name: string,
    newMemberRate?: number | null,
    returningMemberRate?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountInformationSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInformationFilterInput | null,
  owner?: string | null,
};

export type OnCreateAccountInformationSubscription = {
  onCreateAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAccountInformationSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInformationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAccountInformationSubscription = {
  onUpdateAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAccountInformationSubscriptionVariables = {
  filter?: ModelSubscriptionAccountInformationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAccountInformationSubscription = {
  onDeleteAccountInformation?:  {
    __typename: "AccountInformation",
    id: string,
    login: string,
    membershipType?:  {
      __typename: "MembershipType",
      id: string,
      name: string,
      newMemberRate?: number | null,
      returningMemberRate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balance?: number | null,
    address?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    accountInformationMembershipTypeId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  owner?: string | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  filter?: ModelSubscriptionMemberFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    accountLogin: string,
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
    prefferedName?: string | null,
    birthDate?: string | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTUInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTUInfoFilterInput | null,
};

export type OnCreateTUInfoSubscription = {
  onCreateTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTUInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTUInfoFilterInput | null,
};

export type OnUpdateTUInfoSubscription = {
  onUpdateTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTUInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTUInfoFilterInput | null,
};

export type OnDeleteTUInfoSubscription = {
  onDeleteTUInfo?:  {
    __typename: "TUInfo",
    email: string,
    data?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
