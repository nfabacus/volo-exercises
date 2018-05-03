import { 
  GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE 

} from './types'

export const getOrders=({ PageNumber, EntriesPerPage, PaidOnly, StartDate, EndDate })=>{
  return (dispatch)=>{
    dispatch({
      type: GET_ORDERS_REQUEST
    })

    fetch(`http://user-experience1.esellerpro.com/eSellerProAPI/services/api/rs/v2/orders?PageNumber=${PageNumber}&EntriesPerPage=${EntriesPerPage}&StartDate=${StartDate}&EndDate=${EndDate}&PaidOnly=${PaidOnly}`, {
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
      const { OutgoingOrders:{Order}, PaginationResult } = results
      
      dispatch({
        type: GET_ORDERS_SUCCESS,
        orders: Order?Order:[],
        paginationResult: PaginationResult?PaginationResult:{}
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


export const updateOrderStatus=()=>{
  return (dispatch)=>{
    dispatch({
      type: UPDATE_ORDER_STATUS_REQUEST
    })

    const orderUpdateObj = {
      "OrderUpdate": [
        {
          "ESPOrderNo":2147483647324,
          "OrderStatus": "DELIVERED"
        }
      ]
   }
   

    fetch(`http://user-experience1.esellerpro.com/eSellerProAPI/services/api/rs/orders`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic aW50ZXJ2aWV3Lk5vYnk6bm9ieQ=='
      },
      mode: 'cors',
      body: JSON.stringify(orderUpdateObj)
    })
    .then(response=>{
      if (response.status === 400) {
        console.log("Error 400!")
        dispatch({
          type: UPDATE_ORDER_STATUS_FAILURE
        })
        response.json().then((results)=>{
        })
      } else {
        response.json().then((result)=>{
          console.log("Success!")
          dispatch({
            type: UPDATE_ORDER_STATUS_SUCCESS
          })
        })
      }
    })

  }
}