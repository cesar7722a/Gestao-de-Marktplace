import { createContext, ReactNode, useState } from "react";

interface userProps {
  id: number;
  name: string;
  telefone: number;
  email: string;
  password: string;
  image: string;
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

export function ContextUserProvider(children: ReactNode) {
  const [users, setUsers] = useState<userProps[]>([
    {
      id: 0,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 1,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 2,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 3,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 4,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 5,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 6,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
    },
    {
      id: 7,
      name: "César",
      telefone: 926614139,
      email: "cesar@gmail.com",
      password: "123456",
      image: "../../public/Logo.png",
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
