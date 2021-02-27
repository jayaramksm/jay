import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}



const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>


function render() {
    ReactDOM.render(
      <Counter
        value={store.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
      document.getElementById('root')
    )
  }























  const {Provider, connect} = ReactRedux;
  const createStore = Redux.cretaeStore
  
  // Reducer
  const initialState = {
    url: '',
    loading: false,
    error: false,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUESTED_DOG':
        return {
          url: '',
          loading: true,
          error: false,
        };
      case 'REQUESTED_DOG_SUCCEEDED':
        return {
          url: action.url,
          loading: false,
          error: false,
        };
      case 'REQUESTED_DOG_FAILED':
        return {
          url: '',
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
  
  // Action Creators
  const requestDog = () => {
    return { type: 'REQUESTED_DOG' }
  };
  
  const requestDogSuccess = (data) => {
    return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
  };
  
  const requestDogaError = () => {
    return { type: 'REQUESTED_DOG_FAILED' }
  };
  
  const fetchDog = (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        data => dispatch(requestDogSuccess(data)),
        err => dispatch(requestDogError())
      );
  };
  
  // Component
  class App extends React.Component {
    render () {
      return (
        <div>
          <button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button>
            {this.props.loading 
              ? <p>Loading...</p> 
              : this.props.error
                  ? <p>Error, try again</p>
                  : <p><img src={this.props.url}/></p>}
        </div>
      )
    }
  }
  
  // Store
  const store = createStore(reducer);
  
  const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
  })(App);
  
  // Container component
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    document.getElementById('root')
  );