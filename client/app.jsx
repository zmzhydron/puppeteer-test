import React from 'react'
import ReactDom from "react-dom"
import App from "./mobxjsx/index.jsx"
import AppRedux from "./reduxjsx/index.jsx"
import Stores from "@mobx/family.js"
import StoreRedux from "@redux/reducers/a.js"
// import { Provider, inject } from "mobx-react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
// var store = new Stores();
// window.store = store;
// ReactDom.render(
//   <Provider asdf={store}>
//     <App />
//   </Provider>
//   , document.getElementById('app'));

/** middleware ***/

const MA = store => next => action => {
  console.log("111111111");
  console.log(store.getState(), 'store 0000000000');
  console.log(next, `next`);
  console.log(action, 'action');
  if (action.type === 'changesonname') {
    action.type = 'changefathername';
  }
  var r = next(action);
  console.log(r, 'rrrrrrrrrrr');
  console.log(store.getState(), `getStateAAAA`);
  // return r;
}
const MB = store => next => action => {
  console.log("22222222");
  // console.log(next);
  // console.log(store)
  // console.log(action)
  action.name = 'shitman';
  var r = next(action);
  console.log(store.getState(), `getStateBBBBB`);
  // return r;
}
const MC = store => next => action => {
  console.log("333333333");
  // console.log(next);
  // console.log(store)
  console.log(action, 'final');
  console.log(next, `finnal next`);
  var r = next(action);
  console.log(store.getState(), `getStateCCCCC`);
  // return r;
}

/** middleware ***/

var store = applyMiddleware(MA)(createStore)(StoreRedux);
window.store = store;
ReactDom.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
  , document.getElementById('app'));