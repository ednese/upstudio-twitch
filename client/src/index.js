import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Index from "./pages";
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//Reducers
import { userReducer } from './reducers/userReducer';

//NE PAS MODIFIER !
export const store = createStore(combineReducers({
  user: userReducer,
}));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Index />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();