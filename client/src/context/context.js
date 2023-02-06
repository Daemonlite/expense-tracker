import { createContext, useContext, useState } from "react";

export const Data = createContext()

const Context=({children})=>{
  const[purchases,setpurchases]=useState(0)


    return(
        <Data.Provider value={{purchases,setpurchases}}> 
          {children}
        </Data.Provider>
    )

}

export const PurchState = () => {
    return useContext(Data);
  };

export default Context