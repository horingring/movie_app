import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : true
  }

  getMovies = async () => {
    const moives = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const isLoading = this.state.isLoading;
    return(
      <div>{isLoading ? "Loading..." : "I'm Ready!"}</div>
    );
  }
}

export default App;
