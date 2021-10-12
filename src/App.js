import React, { Component } from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: "10"},
    { name: "next", age: "10111"},
    { name: "no name", age: "1"}
  ]
  return(
    <React.Fragment>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} />
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>{props.name}! age：{props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
