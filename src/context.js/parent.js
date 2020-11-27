// import React from 'react';
// import Second from './secondp'; 
// export const ThemeContext = React.createContext('light');
// function Usecontext (){

// return(
//     <div>
//         <ThemeContext.Provider value="danger">
//         <Second/>
//         </ThemeContext.Provider>
//     </div>
// )
// }
// export default Usecontext



import React, { createContext, useState } from "react";

export const UserContexts = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars");

  return (
      <div>
          <h1>UserContext parent {name}</h1>
    <UserContexts.Provider
      value={
        [name, setName]
      
      }
    >
      {children}
    </UserContexts.Provider>
    </div>
  );
};