import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { increment, decrement, readEvents } from '../actions';
import { Link } from 'react-router-dom';

class EventsIndex extends Component {
  componentDidMount() {
    console.log('Hi!')

    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Events</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })
// 動作 OK
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement()),
//})


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
