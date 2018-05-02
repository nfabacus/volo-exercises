import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
const finalCreateStore = compose(
  applyMiddleware(reduxThunk),
)(createStore);

const store = finalCreateStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store