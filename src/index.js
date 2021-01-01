import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from "redux-thunk";
import {createStore, combineReducers,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";

import todoReducer from "./reducers/paragrafReducers";

const allToMiddleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducers = combineReducers({
  allTodo:  todoReducer,
})

const store = createStore(
  rootReducers,
  allToMiddleware
)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
