import React from 'react';

function Food({fav}){
  return <h3>I love {fav}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!!</h1>
      <Food fav="kimchi"></Food>
      <Food fav="ramyeon"></Food>
      <Food fav="samgiopsal"></Food>
      <Food fav="chukumi"></Food>
    </div>
  );
}

export default App;
