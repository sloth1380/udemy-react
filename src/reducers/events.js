import _ from 'lodash'
import {
    READ_EVENTS,
    DELETE_EVENT,
    READ_EVENT 
} from '../actions'

export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENT:
            const data = action.response.data; 
            console.log({ ...events, [data.id]: data })
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}