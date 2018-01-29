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
    let { name, age } = this.props.passProps;
    return (
      <div>
          <h2>son: {name}</h2>
          <button onClick={this.changename.bind(this)}>changename</button>
      </div>
    )
  }
}