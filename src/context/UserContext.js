
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

   const [userData, setUserData] = React.useState();
   const [userLogged, setUserLogged] = React.useState(false);

   return (
      <UserContext.Provider value={
         { 
            userData,
            setUserData,
            userLogged,
            setUserLogged
         }
      }>
         {children}
      </UserContext.Provider>)
}