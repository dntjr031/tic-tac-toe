import React, { Component } from 'react';

class Example4 extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You Clicked {count} times.</p>
        <button onClick={this.click}>Click!</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Example4;
