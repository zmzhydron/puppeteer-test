import React from 'react'
import ReactDom from "react-dom"
import App from "./reactRouter/mobxindex.jsx"
import AppRouter from "./reactRouter/index.jsx"
import ReduxMain from "./reduxjsx/index.jsx"
import Stores from "@mobx/goal.js"
import StoreRedux from "@redux/reducers/a.js"
// import { Provider, inject } from "mobx-react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from "redux-thunk"
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom'
var store = new Stores();
window.store = store;
// ReactDom.render(
//   <Provider asdf={store}>
//     <App />
//   </Provider>
//   , document.getElementById('app'));

/** middleware ***/

const MA = store => next => action => {
  // console.log("111111111");
  // console.log(store.getState(), 'store 111111111', store);
  // console.log(next, `next 1111111111`);
  // console.log(action, 'action 11111111111');
  // if (action.type === 'changesonname') {
  //   action.type = 'changefathername';
  // }
  next(action);
  // console.log(r, 'rrrrrrrrrrr');
  // console.log(store.getState(), `@@@@ 1111111111`);
  return 'popdada';
}
const MB = store => next => action => {
  // console.log("222222222");
  // console.log(store.getState(), 'store 2222222222');
  // console.log(next, `next222222222`);
  // console.log(action, 'action222222222');
  // action.name = 'shitman';
  next(action);
  // console.log(store.getState(), `@@@@ 2222222222`);
  return `shit fuckyou puussty`
}
const MC = store => next => action => {
  // console.log("3333333333");
  // console.log(store.getState(), 'store 3333333333', store);
  // console.log(next, `next 3333333333333`);
  console.log(action, 'action 333333333333');
  next(action);
  // console.log(`infinate loop`)
  // store.dispatch(action);
  // console.log(store.getState(), `@@@@ 33333333`);
  // return r;
}
const THUNK = store => next => action => {
  // console.log("00000000");
  // console.log(store.getState(), 'store 11111', store);
  // console.log(next, `next 11111111111111`);
  // console.log(action, 'action 111111111111');
  if (typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
}

/** middleware ***/



// var store = applyMiddleware(THUNK, MA, MB, MC)(createStore)(combineReducers({
//   ...StoreRedux,
//   routing: routerReducer
// }));
var store = applyMiddleware(THUNK, MA, MB, MC)(createStore)(StoreRedux);
console.log(store, `....`);
// let history = syncHistoryWithStore(browserHistory, store);
// history.listen = val => {
//   console.log(val);
// }
window.store = store;


const Hhehe = () => {
  return (
    <h1>SHIT MAN</h1>
  )
}
const ASDF = () => {
  return (
    <h1>FUCKYOU MAN</h1>
  )
}
//ReduxMain
ReactDom.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById('app'));