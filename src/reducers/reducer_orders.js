import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, UPDATE_ORDER_STATUS_FAILURE } from '../actions/types'

const initialState = { orders: [], PaginationResult: {}, updateError: "" }
export default function(state=initialState, action) {
  switch(action.type) {
    case GET_ORDERS_SUCCESS:
      return { orders: action.orders, paginationResult: action.paginationResult, updateError: "" }
    
    case GET_ORDERS_FAILURE:
      return initialState

    case UPDATE_ORDER_STATUS_FAILURE:
      return {...state, updateError: "Sorry you cannot update the status for this ESPOrder No.  Please check again for any typos.  If you continue to have an issue. Please contact our support at..." }
    default:
      return state
  }
}