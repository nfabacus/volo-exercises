import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from '../actions/types'

const initialState = []
export default function(state=initialState, action) {
  switch(action.type) {
    case GET_ORDERS_SUCCESS:
      return action.orders 
    default:
      return state
  }
}