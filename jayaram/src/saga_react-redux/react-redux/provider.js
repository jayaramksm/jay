import { Provider } from 'react-redux';
import Redux_Connect from './connect';
import { Redux_store } from './store'
import Usehooks_saga from './usehooks';
function Redux_sagaproviderComponent(params) {
    return(
        <div>
            {/* <Provider store={Redux_store}> */}
                <Redux_Connect/>
                <Usehooks_saga/>
            {/* </Provider> */}
        </div>
    )
}

export default Redux_sagaproviderComponent