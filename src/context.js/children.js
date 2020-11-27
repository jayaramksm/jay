

import React from 'react';
import PrimarySearchAppBar from '../my-project/header';
import Home from '../my-project/home';
import Navbar from '../my-project/nav';
import ComponentA from './componentA';
import { UserProvider } from './parent';
import Formss from './secondp';

const AppContext = React.createContext({ colour: 'blue', lang: 'en' });

const Simple = () => 
    <AppContext.Provider value={{ colour: 'blue', lang: 'fr' }}>
        <Menu />
    </AppContext.Provider>;

function Menu() {
    return <MenuItem />
}

const MenuItem = () =>
<div>
    <PrimarySearchAppBar/>
    <Navbar/>
   <ComponentA/>
  <UserProvider/>
    </div>
export default Simple;

















// import React from 'react';
// import { ThemeContext } from './parent';

// function Children (){
//     // const contextType = useContext(ThemeContext)
//     return(
//         <div>
//             <ThemeContext.Consumer>
//       {({theme}) => (
//           console.log(theme)
//         // <button
//         // className={theme}>
//         //   Toggle Theme
//         // </button>
//       )}
//     </ThemeContext.Consumer>
//         </div>
//     )
// }

// export default Children 