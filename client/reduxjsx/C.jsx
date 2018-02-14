import React from "react"
import ReactDom from "react-dom"
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.actions.changesonname("zhangmingzhizzzzzzzzz");
  }
  render() {
    return (
      <div>
         <h1>CCCCCCCCCCCCCCCCCCC</h1>
      </div>
    )
  }
}