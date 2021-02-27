import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../redux/redux';
import Redux_childComponent from './reduxchild';
function Redux_storeComponent() {
    return(
    <div>
<Provider store={React_store}>
  <Redux_childComponent/>
  </Provider>,
    </div>)
    
}

export default Redux_storeComponent