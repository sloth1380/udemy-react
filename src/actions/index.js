import axios from 'axios'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const READ_EVENT = 'GET_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const POST_EVENT = 'POST_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvent = id => async dispatch => {
    const response = await axios.get(`${ ROOT_URL }/events/${ id }${ QUERYSTRING }`)
    dispatch({type: READ_EVENT, response})
}

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ ROOT_URL }/events${ QUERYSTRING }`)
    dispatch({type: READ_EVENTS, response})
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ ROOT_URL }/events${ QUERYSTRING }`, values)

    dispatch({ type: POST_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ ROOT_URL }/events/${id}${ QUERYSTRING }`)
    dispatch({ type: DELETE_EVENT, id })
}