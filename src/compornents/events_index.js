import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    console.log('Hi!')

    this.props.readEvents()
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }> + 1 </button>
        <button onClick={ props.decrement }> - 1 </button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })
// 動作 OK
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement()),
//})


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
