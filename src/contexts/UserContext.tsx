import { createContext } from "react";
import IUser, { Role } from "../Interfaces/IUser";
type UserContextType = {
  user: IUser;
  setUser: (user: any) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    _id: "",
    email: "",
    role: Role.USER,
  },
  setUser: () => {},
});
