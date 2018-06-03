import React from "react"
import ReactDom from "react-dom"
import propTypes from "prop-types"
import Content from "./contents.js"
export default class Father extends React.Component {
  constructor(props) {
    super(props);
  }
  changess(){
    console.log(111111);
    this.props.changes();
  }
  render() {
    let { type,
      outfit,
      changes,
      shape,
      age,
      top, } = this.props;
    return (
        <div style={{border: "solid 5px red"}}>
          <h3>{type}</h3>
          <h3>{outfit}</h3>
          <h3>{shape}</h3>
          <h3>{top}</h3>
          <h3>{age}</h3>
          <button onClick={this.changess.bind(this)}>i like new one now!</button>
        </div>
    )
  }
}
