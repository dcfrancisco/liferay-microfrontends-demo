import React from "react";
import ReactDOM from "react-dom";
import CounterService from "./CounterService";

const Service = new CounterService();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
    };
    this.service = Service;
    this.service.setCounter(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.service.decrement();
  }

  increment() {
    this.service.increment();
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>{" "}
        <button onClick={this.increment}> Add 1 </button>
        <button onClick={this.decrement}> Minus 1 </button>
      </div>
    );
  }
}

export default Counter;
export { Service };
