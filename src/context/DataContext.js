import React, { useContext, useState } from "react";

import poker from "../assets/images/poker.png";
const DataContext = React.createContext();
export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const tickets = [
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
    {
      validity: "01 Jan 2023 | 8:00 PM",
      title: "Best Poker Event Title",
      location: "Las Angel, USA",
      image: poker,
    },
  ];
  const tableData = [
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
  ];

  return (
    <DataContext.Provider value={{ tickets, tableData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
