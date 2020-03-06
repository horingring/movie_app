import React from 'react';

class App extends React.Component{
  state = {
    isLoading : true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },3000);
  }

  render(){
    const isLoading = this.state.isLoading;
    return(
      <div>{isLoading ? "Loading..." : "I'm Ready!"}</div>
    );
  }
}

export default App;
