import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../actions'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class Orders extends Component {

  state={
    itemsPerPage: 10,
    currentPageInOrdersList: 1,
    numOfPageButtons: 10,
    listSize: 0,
    filteredOrdersList: [],
    selectedStartDate: "",
    selectedEndDate:"",
    selectedListItem: null,
  }

  componentDidMount(){
    window.scrollTo(0,0)
    // this.props.getOrders('2017/04/01','2017/05/30', false)
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.orders !== this.props.orders) {
      console.log('Update orders List!! nextProps.orders>>', nextProps.orders);
      this.setState({
        filteredOrdersList: nextProps.orders,
        listSize: nextProps.orders.length !==0?nextProps.orders[0].size:0
        // currentPageInOrdersList: 1,
        // keywordTerm: ""
      })
    }
  }

  getOrdersList=()=>{
    const { currentPageInOrdersList, itemsPerPage, selectedStartDate, selectedEndDate } = this.state;

    const start = currentPageInOrdersList===1?1:(currentPageInOrdersList-1)*itemsPerPage+1;
    const end = start + this.state.itemsPerPage-1;

    let formattedStartDate;
    let formattedEndDate;

    if(selectedStartDate===""){
      formattedStartDate = ""
    } else {
      formattedStartDate = moment(selectedStartDate).format()
    }

    if(selectedEndDate===""){
      formattedEndDate = ""
    } else {
      formattedEndDate = moment(selectedEndDate).format()
    }

    // this.props.startLoading()
    const invoiceParamObj = {
      indexFrom: start,
      indexTo: end,
      fromDate: formattedStartDate,
      toDate: formattedEndDate
    }
    
    if(formattedStartDate&&formattedEndDate){
      this.props.getOrders(formattedStartDate, formattedEndDate, true)
    }
  }

  handleStartDateChange=date=>{
    this.setState({
      selectedStartDate: date
    },()=>{
      this.getOrdersList()
    })
  }

  handleEndDateChange=date=>{
    this.setState({
      selectedEndDate: date
    },()=>{
      this.getOrdersList()
    })
  }

  handleItemsPerPageChange = e => {
    console.log("items per page change detected!!!!")
    this.setState({
      itemsPerPage: parseInt(e.target.value),
      currentPageInOrdersList: 1
    },()=>{
      this.getOrdersList()
    });
  }

  setcurrentPageInOrdersList=(selectedPage)=>{
    this.setState({
      currentPageInOrdersList: selectedPage
    }, ()=>{
      this.getOrdersList()
    })
  }

  renderPagenationBtns() {
    let paginationButtons = []

    const filteredList = this.state.filteredOrdersList
    const listLength = this.state.listSize
    const itemsPerPage = this.state.itemsPerPage
    const numOfPages = Math.ceil(listLength/itemsPerPage)
    const currentPageInOrdersList = this.state.currentPageInOrdersList
    const numOfPageButtons = this.state.numOfPageButtons

    let numOfPageGroups = parseInt(currentPageInOrdersList/numOfPageButtons)
    const rangeModulus = currentPageInOrdersList%numOfPageButtons
    if(rangeModulus === 0) {numOfPageGroups -=1 }
    const start = (numOfPageButtons * numOfPageGroups)+1
    const end = Math.min(start + numOfPageButtons-1, numOfPages)


    for (let i=start;i<=end; i++) {
        paginationButtons.push(i)
    }
    return (
      <div className="pagination-btn-group__inline margin-x-10 text-center">
        {(start-1)>1&&(<a onClick={()=>this.setcurrentPageInOrdersList(1)}>1 ...</a>)}
        &nbsp;
        {(start-1)>1&&(<a onClick={()=>this.setcurrentPageInOrdersList(start-1<1?start:start-1)}>Previous &nbsp;</a>)}
        {paginationButtons.map(pageBtn=>
          <button
            key={pageBtn}
            onClick={()=>this.setcurrentPageInOrdersList(pageBtn)}
            className={pageBtn===this.state.currentPageInOrdersList?"paginate_button current":"paginate_button"}
          >
            {pageBtn}
          </button>
        )}
        {(end+1)<numOfPages&&(<span>&nbsp;<a onClick={()=>this.setcurrentPageInOrdersList(end+1>numOfPages?end:end+1)}>Next</a></span>)}
        &nbsp;
        {(end+1)<numOfPages&&(<a onClick={()=>this.setcurrentPageInOrdersList(numOfPages)}>... {numOfPages}</a>)}
      </div>
    )
  }

  hoverEnterListItem=(invoiceId)=>{
    this.setState({
      selectedListItem: invoiceId
    })
  }
  hoverLeaveListItem=()=>{
    this.setState({
      selectedListItem: null,
    })
  }

  renderOrdersList=()=>{
    // const start = (this.state.currentPageInOrdersList-1) * this.state.itemsPerPage;
    // const end = start + this.state.itemsPerPage;

    return this.state.filteredOrdersList
    // .slice(start, end)
    .map((invoice, index)=>{
      const { invoiceNumber, dateImported, invoiceId, webLink } = invoice
      const formattedDate = moment(dateImported).format('YYYY/MM/DD, h:mm a')
      return (
        <tr
          key={invoiceId}
        >
          <td>
            <a className="tr__product-description"><b>{invoiceNumber}</b></a><br />
          </td>
          <td>{formattedDate}</td>
          <td className="pod-td">
            hello
          </td>
        </tr>
      )
    })
  }

  renderOrderSection() {
    if(this.state.filteredOrdersList) {
      return (
        <div>
          <div>
            <label>
              Show &nbsp;
              <select name="table_products_length" aria-controls="table_products" value={this.state.itemsPerPage} onChange={this.handleItemsPerPageChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select> entries
            </label>
            <span>
              &nbsp;
              Showing {this.state.listSize===0?0:((this.state.currentPageInOrdersList-1) * this.state.itemsPerPage) + 1} to {Math.min(this.state.currentPageInOrdersList * this.state.itemsPerPage, this.state.listSize)} of {this.state.listSize}
            </span>
            <span>
              {this.renderPagenationBtns()}
            </span>

            {/* <div className="pull-right">
              <span>Keyword search:&nbsp;</span>
            <input value={this.state.keywordTerm} onChange={this.onInputKeywordChange} type="search" className="" placeholder="" aria-controls="table_orders" />
            </div> */}
          </div>
          <div className="row margin-y-5">
            <div className="col-sm-3 col-xs-6">
              <span>Start Date:</span><br />
              <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={this.state.selectedStartDate}
                onChange={this.handleStartDateChange}
              />
            </div>
            <div className="col-sm-3 col-xs-6">
              <span>End Date:</span><br />
              <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={this.state.selectedEndDate}
                onChange={this.handleEndDateChange}
              />
            </div>

          </div>

          <table className="table table-bordered table-condensed">
            <thead>
              <tr>
                <th className="text-center">Invoice</th>
                <th className="text-center">Date</th>
                <th className="text-center">POD</th>
              </tr>
            </thead>
            <tbody>
              {this.renderOrdersList()}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className={this.props.selectedTab===0?"":"hidden"}>
          <p>No invoice found</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid block-row bg-order">
          <div className="container">
            <div className="title-area">
              <h1 className="display-4">Orders</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid block-row">
          <div className="container">
            {this.renderOrderSection()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps, {getOrders})(Orders)

