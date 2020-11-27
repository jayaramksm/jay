// import React from 'react';
// import Children from './children'; 

// function Second(){
//     return(
//         <div>
//             HIII
//             <Children></Children>
//         </div>
//     )
// }

// export default Second


import React, { useContext } from 'react';
import { UserContexts } from './parent';

const Formss = () => {
    // Retrieve context data
  const user = useContext(UserContexts);

  return (
    <div className="user-form">
<h1>
    {/* change value {user.name} */}
</h1>
           
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          onChange={e => user.setName(e.target.value)}
        />
      </div>

     
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
         
        />
      </div>
    </div>
  );
};

export default Formss;
