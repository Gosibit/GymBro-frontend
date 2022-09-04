export enum Role {
  ADMIN = "Admin",
  USER = "User",
}

export interface IUser {
  _id: string;
  email: string;
  role: Role;
}

export default IUser;
