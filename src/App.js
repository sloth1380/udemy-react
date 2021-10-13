import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "next", age: 10111},
    { name: "no name"}
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

const User = (props, index) => {
  return <div key={index}>{props.name}! age：{props.age}</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}

//User.defaultProps = {
//  age: 1
//}

export default App;
