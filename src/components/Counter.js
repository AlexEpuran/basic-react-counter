/** @format */

import React, { Component } from "react";
import './counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
    }
  })
}

  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
    }
  })
}
  
  reset() {
    this.setState({ count: 0 })
  }
 

  render() {
    return (
      <div className="main">
        <div className="counter-main"><h1 className={this.state.count > 0 ? "positive" : this.state.count < 0 ? "negative" : null}>{this.state.count}</h1></div>
        <div className="btn-container">
        <button className="decrement-btn" onClick={this.decrement}> - </button>
          <button className="increment-btn" onClick={this.increment}> + </button>
          </div>
        <button className="reset-btn" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Counter;
