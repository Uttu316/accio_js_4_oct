import { useState } from "react";
import AppContext from "./appContext";

const AppProvider = (props) => {
    
    const [name,setName] = useState('Accio')
  return (
    <AppContext.Provider value={{
        name,
        setName
    }}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
