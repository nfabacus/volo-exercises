import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import OrdersReducer from './reducer_orders'

const rootReducer = combineReducers({
  routing: routerReducer,
  orders: OrdersReducer
})

export default rootReducer