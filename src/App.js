import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi!";
    
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => console.log(1)} />
      </React.Fragment>
    )
    //<input type="text" onChange={()=> console.log(1)} />
  }
}

export default App;
