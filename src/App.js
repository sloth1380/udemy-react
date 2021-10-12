import React, { Component } from 'react';


const App = () => {
  return(
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
//class App extends Component {
//  render() {
//    const greeting = "Hi!";    
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => console.log(1)} />
//      </React.Fragment>
//    )
//  }
//}

export default App;
