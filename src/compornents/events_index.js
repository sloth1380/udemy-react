import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { increment, decrement, readEvents } from '../actions';
import { Link } from 'react-router-dom';
import  {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from  'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style= {
      position: "fixed",
      right: 12,
      bottom: 12,
    }

    return (
      <React.Fragment>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/events/new" />}
        >
          <ContentAdd></ContentAdd>
        </FloatingActionButton>
          
        
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}            
          >
            {this.renderEvents()}
          </TableBody>
        </Table>
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
