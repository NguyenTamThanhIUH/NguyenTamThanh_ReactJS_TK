import { createContext, useState, useEffect, useContext, useMemo } from "react";
import {toast} from "react-toastify";
const TableContext = createContext();

const initialData = [
  {
    avatar: "./Avatar 313.png",
    name: "Elizabeth Leee",
    company: "AvatarSystem",
    ordervalue: "$539",
    orderdate: "2023-04-13",
    status: "New",
    image: "./Pie chart.png"
  },
  {
    avatar: "./user.png",
    name: "Carlos Garciae",
    company: "SmoozeShift",
    ordervalue: "$747",
    orderdate: "2025-07-12",
    status: "New",
    image: "./Pie chart.png"
  },
  {
    avatar: "./woman.png",
    name: "Elizabeth LBayli",
    company: "Prime Time Telecom",
    ordervalue: "$564",
    orderdate: "2022-11-23",
    status: "In-progress",
    image: "./Pie chart.png"
  },
  {
    avatar: "./man.png",
    name: "Ryan Brown Hy",
    company: "OmniTech Corporation",
    ordervalue: "$541",
    orderdate: "2005-05-12",
    status: "In-progress",
    image: "./Pie chart.png"
  },
  {
    avatar: "./Avatar 313.png",
    name: "Ryan Young He",
    company: "DataStream Inc",
    ordervalue: "$769",
    orderdate: "2020-04-23",
    status: "Completed",
    image: "./Pie chart.png"
  }
];

export const TableProvider = ({ children }) => {
  const [dataTB, setData] = useState(
    JSON.parse(localStorage.getItem("dataTable")) || initialData
  );

  useEffect(() => {
    localStorage.setItem("dataTable", JSON.stringify(dataTB));
  }, [dataTB]);

  const HandleAddUser = (newUser) => {
    setData((prev) => [...prev, newUser]);
    toast.success("Add successfully")
  };
  const HandleUpdateUser=(updateUser,index)=>{
    setData((prev) => {
      const newData = [...prev];
      newData[index] = updateUser;
      return newData;
    });
    toast.success("update successfully")
  }
    const totalUser=  dataTB.length;

  

  return (
    <TableContext.Provider value={{ dataTB, HandleAddUser,HandleUpdateUser,totalUser}}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
