import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from './types'

export const getOrders=(startDate, endDate, isPaidOnly)=>{
  return (dispatch)=>{
    dispatch({
      type: GET_ORDERS_REQUEST
    })

    fetch(`http://user-experience1.esellerpro.com/eSellerProAPI/services/api/rs/v2/orders?StartDate=${startDate}&EndDate=${endDate}&PaidOnly=${isPaidOnly}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'Basic aW50ZXJ2aWV3Lk5vYnk6bm9ieQ=='
      },
      mode: 'cors'
    })
    .then(response=>response.json())
    .then(results=>{
      console.log("response results!!!", results)
      const { Order } = results.OutgoingOrders
      dispatch({
        type: GET_ORDERS_SUCCESS,
        orders: Order
      })
    })
    .catch(err=>{
      console.log("api call error!!", err)
      dispatch({
        type: GET_ORDERS_FAILURE
      })
    })
  }
}