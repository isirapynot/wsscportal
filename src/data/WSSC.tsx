
interface WSSCAccountInfo{
  id: string;
  userName: string;
  membershipType: string;
  balance?: number; 
  address: string;
  email: string;
}
interface WSSCMember{ 
  id: string,
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  gender: string;
  birthday: string;
}
interface WSSCMemberShipType{
  type: string;
  name: string;
  newMemberRate: number;
  returningMemberRate: number;
}
