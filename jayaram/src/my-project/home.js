import React from 'react';
import Userinfo from './All_users_info';
import PrimarySearchAppBar from './header';
import { valuepass } from './login';
import Navbar from './nav';

export const SimpleContext = React.createContext();


function Home() {
    console.log("retun value", <valuepass />)
    return (
        <div>
            <SimpleContext.Provider value={{ fname: "jayaram", lname: "kasim" }}>
                <PrimarySearchAppBar />
            </SimpleContext.Provider>
            <Navbar />
            <Userinfo />

        </div>
    )
}

export default Home;