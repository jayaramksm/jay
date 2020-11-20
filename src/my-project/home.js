import React from 'react';
import Userinfo from './All_users_info';
import PrimarySearchAppBar from './header';
import Navbar from './nav';

function Home(){
    return(
        <div>
<PrimarySearchAppBar/>
<Navbar/>
<Userinfo/>

        </div>
    )
}

export default Home;