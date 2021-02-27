import React from 'react';
import { connect } from 'react-redux'
function Redux_childComponent() {

    return(
        <div>
<h1>redux child</h1>
        </div>
    )
}
const mapStateToProps = state => console.log(state)
const mapDispatchToProps = dispatch => console.log(dispatch)

  const Connect = connect(mapStateToProps,mapDispatchToProps) (Redux_childComponent)
 export default Connect