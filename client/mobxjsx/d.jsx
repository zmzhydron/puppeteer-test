import React from "react"
import ReactDom from "react-dom"
import { observer, inject, Provider } from 'mobx-react';
import { observable, action } from "mobx"

// @inject('asdf')
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReact() {
  }
  render() {
    return (
      <div>
        dddddddddddd
      </div>
    )
  }
}