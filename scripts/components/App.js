/*
  App
*/

import React from 'react';
import Header from './Header';
import Product from './Product';
import Order from './Order';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

// Firebase
import Rebase  from 're-base';
var base = Rebase.createClass('https://project-8199675749921297072.firebaseio.com/');

@autobind
class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      products : {},
      order : {}
    }
  }

  componentDidMount() {
    base.syncState('/products', {
      context : this,
      state : 'products'
    });

    var localStorageRef = localStorage.getItem('order-' + this.props.params.storeId);

    if(localStorageRef) {
      // update our component state to reflect what is in localStorage
      this.setState({
        order : JSON.parse(localStorageRef)
      });
    }

  }
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({ order : this.state.order });
  }

  removeFromOrder(key){
    delete this.state.order[key];
    this.setState({
      order : this.state.order
    });
  }


  loadSamples() {
    this.setState({
      products : require('../sample-products')
    });
  }

  renderLoadSample(){
    return <button className="button button-primary" onClick={this.loadSamples}>Load Sample Products</button>
  }

  renderProduct(key){
    return <Product key={key} index={key} details={this.state.products[key]} addToOrder={this.addToOrder}/>
  }

  render() {
    return (
      <div>
        <div>{this.renderLoadSample()}</div>
        <Header tagline="Start your shopping" />
        <div className="menu span-4">          
          <ul className="list-of-products clearfix">
            {Object.keys(this.state.products).map(this.renderProduct)}
          </ul>
        </div>
        <div className="span-3">
            <Order products={this.state.products} order={this.state.order} removeFromOrder={this.removeFromOrder} />            
        </div>
      </div>
    )
  }

};

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

export default App;
