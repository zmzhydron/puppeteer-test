import React from "react"
import ReactDom from "react-dom"
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.actions.changefathername("zhanggguanglung");
  }
  render() {
    let { name, age } = this.props.passProps;
    return (
      <div>
          <h2 style={{color: "red"}}>father: {name}</h2>
          <button onClick={this.changename.bind(this)}>changename</button>
      </div>
    )
  }
}