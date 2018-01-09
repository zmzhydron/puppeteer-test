import React from 'react'
import ReactDom from "react-dom"
import App from "./index.jsx"
import Stores from "@mobx/1.js"

var store = new Stores();
window.store = store;
ReactDom.render(
  <App store={store}/>
  , document.getElementById('app'));