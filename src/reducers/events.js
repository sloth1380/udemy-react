import { READ_EVENTS } from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            // console.log(action.response.data)
            
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}