//validation schema
export interface IProfile {
  id?: string;
  email: string;
  password: string;
  name: string;
  dob: Date;
  gender: string;
  address: string;
  subscribe: boolean;
  age?: number;
}
