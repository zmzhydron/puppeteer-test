import React from "react"
import ReactDom from "react-dom"
import { observer } from 'mobx-react';

@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  lister() {
    let asdf = 'zhangmingzhi';
    return [...asdf].map((item, index) => {
      return <p key={index}>{item}, hello!</p>
    })
  }
  shit() {
    this.props.store.changename("11111111111");

  }
  render() {
    console.log(this.props.store);
    return (
      <div>
        <h1>{this.props.store.name}</h1>
        <button onClick={this.shit.bind(this)}>shit</button>
        {this.lister()}
      </div>
    )
  }
}