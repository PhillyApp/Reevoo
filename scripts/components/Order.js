/*
  Order
  <Order/>
*/

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Order extends React.Component {
  renderOrder(key) {
    var product = this.props.products[key];
    var count = this.props.order[key];
    var removeButton = <button className="button-remove" onClick={this.props.removeFromOrder.bind(null,key)}>&times;</button>

    return (
      <li className="clearfix" key={key}>
        <span className="float-left">          
          <CSSTransitionGroup component="span" transitionName="count" transitionLeaveTimeout={250} transitionEnterTimeout={250} className="count">
            <span key={count}>{count}</span>
          </CSSTransitionGroup>

           x {product.name} 
        </span>
        <span className="float-right price">{h.formatPrice(count * product.price)}</span>
        {removeButton}
      </li>)
  }



  /*calculate discount*/
  calculateDiscount(product, count) {
    var rule = product.rule;
    var count = count;
    var total = 0;
    // if discount rule exist
    if(rule) {
      switch(rule) {
        case 'buyOneGetOne':
          total = h.buyOneGetOne(count, product.price);      
          break;
        case  'discount':
          total = h.discount(count, product.minimumProduct, product.price, product.discountPrice)
          break;          
      }
    } else {
      total = (count * parseInt(product.price))
    };

    return total;
      
  }

  render() {
    var orderIds = Object.keys(this.props.order);    
    var total = orderIds.reduce((prevTotal, key)=> {
      var product = this.props.products[key];
      var count = this.props.order[key];
      if(product) {       
        return prevTotal + this.calculateDiscount(product, count) || 0;
      }

      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2 className="order-title">My Order</h2>
        <div className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            {h.formatPrice(total)}
          </li>
        </div>

      </div>
    )
  }

};

Order.propTypes = {
  products : React.PropTypes.object.isRequired,
  order : React.PropTypes.object.isRequired,
  removeFromOrder : React.PropTypes.func.isRequired
}

export default Order;
