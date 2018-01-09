import React from "react"
import ReactDom from "react-dom"

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
  render() {
    return (
      <div>
        <h1>1111111111111</h1>
        {this.lister()}
      </div>
    )
  }
}