import React from 'react';
const Frinput = React.forwardRef((props,ref)=>{
    return(
        <div>
            <div>&nbsp;</div>
            <label>Input box</label>
            <input type="text" ref={ref} {...props} />
        </div>
    )
})

export default Frinput;