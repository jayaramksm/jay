import React from 'react';
import { Provider } from 'react-redux';
import Redux_connectionComponent from './redux_connect';
import { creatstore } from './redux_store';
import Redux_useselectorComponent from './redux_useselector';

function Redux_providerComponent() {
    const [counter, setCounter] = React.useState(30);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    
      
    
    return(
        <div>
             <div className="App">
          <div>Countdown: {counter}</div>
        </div>
            <Provider store={creatstore}>
                <Redux_connectionComponent/>
                <Redux_useselectorComponent/>
            </Provider>
        </div>
    )
}

export default Redux_providerComponent