import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrders, updateOrderStatus } from '../../actions'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Modal from 'react-responsive-modal'

class OrderList extends Component {
  state={
    entriesPerPage: 10,
    selectedPage: 1,
    TotalNumberOfPages: 0,
    listSize: 0,
    filteredOrdersList: [],
    selectedStartDate: null,
    selectedEndDate:null,
    paidOnly: false,
    message: "",
    modalOpen: false,
    selectedOrder: null
  }

  componentDidMount() {
    this.setState({
      filteredOrdersList: this.props.orders
    })
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.orders !== this.props.orders) {
      console.log('Update orders List!! nextProps.orders>>', nextProps.orders);
      this.setState({
        filteredOrdersList: nextProps.orders,
        selectedPage: 1
      })
    }
    if(nextProps.paginationResult !== this.props.paginationResult) {
      console.log('Update pagenationResult!! nextProps.pagenationResult>>', nextProps.paginationResult);
      const { TotalNumberOfEntries, TotalNumberOfPages } = nextProps.paginationResult
      this.setState({
        listSize: TotalNumberOfEntries,
        totalNumberOfPages: TotalNumberOfPages
      })
    }
    if(nextProps.orderUpdateError !== this.props.orderUpdateError){
      this.setState({
        message: nextProps.orderUpdateError
      })
    }
  }

  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };
 
  onCloseModal = () => {
    this.setState({ modalOpen: false, selectedOrder: null });
  };

  handleDateChange=(rangePoint, date)=>{
    this.setState({
      [rangePoint]: date
    })
  }

  handleEntriesPerPageChange = e => {
    console.log("items per page change detected!!!!")
    this.setState({
      entriesPerPage: parseInt(e.target.value),
      selectedPage: 1
    })
  }

  onChangeSelectedPage=(e)=>{
    let selectedPage
    if(isNaN(parseInt(e.target.value))){
      selectedPage = ""
    } else {
      selectedPage = parseInt(e.target.value)
    }
    this.setState({ selectedPage })
  }

  togglePaidOnly=(e)=>{
    this.setState({
      paidOnly: e.target.checked
    })
  }

  renderPageSelector() {

    const { selectedPage, listSize, totalNumberOfPages, entriesPerPage, filteredOrdersList } = this.state

    return totalNumberOfPages>0?(
        <div>
          <span>Total Number Of Pages: { totalNumberOfPages }</span><br/>
          <span>Enter Page No.:</span>&nbsp;
          <input
            style={{ width: "50px" }}
            value={this.state.selectedPage}
            onChange={this.onChangeSelectedPage}
          />
        </div>
      ): null
  }

  getOrdersList=()=>{
    const { selectedPage, entriesPerPage, selectedStartDate, selectedEndDate, paidOnly } = this.state;

    console.log("selectedPage:", selectedPage, ", entriesPerPage:", entriesPerPage, ", s:", selectedStartDate, ", eDate:", selectedEndDate)

    let message = ""

    if(selectedStartDate&&selectedEndDate){
      const formattedStartDate = moment(selectedStartDate).format()
      const formattedEndDate = moment(selectedEndDate).format()

      const OrderRequestObj = {
        PageNumber: selectedPage,
        EntriesPerPage: entriesPerPage,
        PaidOnly: paidOnly,
        StartDate: formattedStartDate,
        EndDate: formattedEndDate
      }
      this.props.getOrders(OrderRequestObj)
      message = ""
    } else {
      message = "Please enter both starting and ending dates."
    }
    this.setState({
      message
    })
  }

  displayOrderDetails=(order)=>{
    this.setState({
      selectedOrder: order
    },()=>{
      this.onOpenModal()
    })
  }

  renderModal(){
    if(this.state.selectedOrder){
      const { InvoiceNumber, Date: orderDate, CustomerName, CustomerCompany, OrderTotal, OrderStatus, OrderSource, CourierName, CurrencyCode, OrderItems:{Item}  } = this.state.selectedOrder
      return (
        <Modal open={this.state.modalOpen} onClose={this.onCloseModal} center>
          <div style={{minWidth: "60%", padding: "20px"}}>
            <h2>Invoice No: {InvoiceNumber}</h2>
            <h2>Date: {moment(orderDate).format('YYYY/MM/DD, h:mm a')}</h2>
            <h2>{CurrencyCode}{OrderTotal}</h2>
            <ul style={{listStyle: "none", display: "flex", paddingLeft: "10px"}}>
              {Item&&Item.map((item, index)=>{
                const detailsArr=Object.keys(item)
                return (
                  <li>
                    Item {index+1}
                    <ul>
                      {
                        detailsArr.map((detail, index)=>{
                          return (
                            <li>
                              {detail}: {item[detail]}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </Modal>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <div>
        {
          this.renderModal()
        }

        <div style={{padding:"10px 10px 10px 0"}}>
          <label>
            Show &nbsp;
            <select name="table_products_length" aria-controls="table_products" value={this.state.entriesPerPage} onChange={this.handleEntriesPerPageChange}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> entries
          </label>
            <div>
              <label>
                Paid Only &nbsp;
                <input
                  type="checkbox"
                  onChange={this.togglePaidOnly}
                  checked={!!this.state.paidOnly}
                />
            </label>
            </div>
          <span>
            {this.renderPageSelector()}
          </span>
        </div>
        {
          this.state.message&&
          <div className="alert alert-warning mr-2 mb-0">
            {this.state.message}
          </div>
        }
        <div style={{display:"flex", alignItems: "center", padding:"10px 10px 10px 0"}}>
          <div className="pr-2" style={{display:"flex", alignItems:"center"}}>
            <span>Start Date:</span>&nbsp;
            <DatePicker
              dateFormat="YYYY/MM/DD"
              selected={this.state.selectedStartDate}
              onChange={(value)=>this.handleDateChange("selectedStartDate", value)}
            />
          </div>
          <div className="pr-2" style={{display:"flex", alignItems:"center"}}>
            <span>End Date:</span>&nbsp;
            <DatePicker
              dateFormat="YYYY/MM/DD"
              selected={this.state.selectedEndDate}
              onChange={(value)=>this.handleDateChange("selectedEndDate", value)}
            />
          </div>
          <div className="pr-2 mr-3">
            <button
              className="btn btn-default"
              onClick={this.getOrdersList}
            >
              Find
            </button>
          </div>
          <div className="pr-2 mr-3">
            <button
              className="btn btn-success"
              onClick={this.props.updateOrderStatus}
            >
              Update the order status for ESPOrderNo 2147483647324 to be "DELIVERED"
            </button>
          </div>
        </div>

        {
          this.state.filteredOrdersList.length>0?
            <table className="table table-bordered table-condensed">
              <thead>
                <tr style={{ backgroundColor: "#009f97", color: "white"}}>
                  <th className="text-center">Invoice Number</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Customer Name</th>
                  <th className="text-center">Order Total</th>
                  <th className="text-center">Currency Code</th>
                  <th className="text-center">Order Status</th>
                  <th className="text-center">Order Source</th>
                  <th className="text-center">Courier</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  this.state.filteredOrdersList
                  .map((order, index)=>{
                    const { InvoiceNumber, Date: orderDate, CustomerName, CustomerCompany, OrderTotal, OrderStatus, OrderSource, CourierName, CurrencyCode } = order
                    const formattedDate = moment(orderDate).format('YYYY/MM/DD, h:mm a')
                    return (
                      <tr
                        className="order-list-item"
                        onClick={()=>this.displayOrderDetails(order)}
                        key={index}
                      >
                        <td>{InvoiceNumber}</td>
                        <td>{formattedDate}</td>
                        <td>{CustomerName}</td>
                        <td>{OrderTotal}</td>
                        <td>{CurrencyCode}</td>
                        <td>{OrderStatus}</td>
                        <td>{OrderSource}</td>
                        <td>{CourierName}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>:
            <div>
              <span>Please search for order information.</span>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log("state.orders.updateError ", state.orders.updateError )
  return {
    orders: state.orders.orders,
    paginationResult: state.orders.paginationResult,
    orderUpdateError: state.orders.updateError
  }
}

export default connect(mapStateToProps, {getOrders, updateOrderStatus})(OrderList)

