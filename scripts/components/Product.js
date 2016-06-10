/*
  Product
  <Product />
*/

import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Product extends React.Component {
  
  onButtonClick() {
    console.log("Going to add the product: ", this.props.index);
    var key = this.props.index;
    this.props.addToOrder(key);
  }
  
  render() {
    var details = this.props.details;
    var buttonText = 'Add To Order';
    return (
      <li className="span-2">
        <div className="box clearfix">
          <span className="span-2">
            <img src={details.image} alt={details.name} />
          </span>
          <span className="span-2">
            <h3 className="product-infos">
              <span className="product-name">{details.name}</span>
              <span className="price">{h.formatPrice(details.price)}</span>
            </h3>
            <p>{details.desc}</p>
            <button className="button button-primary" onClick={this.onButtonClick}>{buttonText}</button>
          </span>
        </div>
      </li>
    )
  }
};


export default Product;
