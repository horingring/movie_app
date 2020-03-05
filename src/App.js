import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count : 0
  }

  add = () => {
    this.setState({
      count : this.state.count+1
    })
  }

  minus = () => {
    this.setState({
      count : this.state.count-1
    })
  }

  render(){
    return (
      <div>
        <h3>I'm a class {this.state.count}</h3>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
