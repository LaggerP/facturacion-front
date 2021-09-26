import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
   const [data, setData] = useState({
      data: "initialData"
   })
   return (
      <AppContext.Provider value={{ data }}>
         {children}
      </AppContext.Provider>)
}