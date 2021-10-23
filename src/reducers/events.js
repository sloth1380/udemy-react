import { READ_EVENTS, DELETE_EVENTS } from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            // console.log(action.response.data)
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            //console.log(action.id)
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}