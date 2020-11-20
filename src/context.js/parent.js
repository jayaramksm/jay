import React from 'react';
import Second from './secondp'; 
export const ThemeContext = React.createContext('light');
function Usecontext (){

return(
    <div>
        <ThemeContext.Provider value="danger">
        <Second/>
        </ThemeContext.Provider>
    </div>
)
}
export default Usecontext