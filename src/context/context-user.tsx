import { createContext, useState } from "react";
import { MycontextProviderProps } from "../type/types";

interface userProps {
  id: number;
  name: string;
  telefone: number;
  email: string;
  password: string;
  image: string;
  isLogado: boolean;
}
interface contextUserType {
  users: userProps[];
  setUsers: React.Dispatch<React.SetStateAction<userProps[]>>;
  addUse: (user: userProps) => void;
  deletUser: (id: number) => void;
}

export const ContextUser = createContext<contextUserType | undefined>(
  undefined
);

export function ContextUserProvider({ children }: MycontextProviderProps) {
  const [users, setUsers] = useState<userProps[]>([
    {
      id: 0,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
      isLogado: false,
    },
    {
      id: 1,
      name: "João",
      telefone: 926614139,
      email: "joao@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
      isLogado: false,
    },
    {
      id: 2,
      name: "Francsco",
      telefone: 926614139,
      email: "francisco@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
      isLogado: false,
    },
    {
      id: 3,
      name: "Tchvinda",
      telefone: 926614139,
      email: "Tchivinda@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
      isLogado: false,
    },
  ]);

  const addUse = (user: userProps) => {
    setUsers([...users, user]);
  };
  const deletUser = (idUser: number) => {
    setUsers((prev) => prev.filter((a) => a.id !== idUser));
  };
  return (
    <ContextUser.Provider value={{ addUse, deletUser, setUsers, users }}>
      {children}
    </ContextUser.Provider>
  );
}
