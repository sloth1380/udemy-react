import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventsIndex from './compornents/events_index';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <EventsIndex />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
