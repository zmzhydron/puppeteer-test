import React from "react"
import ReactDom from "react-dom"
import propTypes from "prop-types"
export default class Father extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.actions.changefathername("zhanggguanglung");
  }
  asyncChangeName() {
    console.log(this.props.actions.asyncChangeName);
    this.props.actions.asyncChangeName();
  }
  asyncChangeNamePro() {
    this.props.actions.asyncChangeNamePro();
  }
  asdasdasd(){
    this.props.actions.changemodulebbbname('ass fucking bitch');
  }
  render() {
    let { name, age } = this.props.passProps;
    let asdf = this.context.asdf;
    return (
      <div>
          <h2 style={{color: "red"}}>father: {name}</h2>
          <h2 style={{color: "green"}}>asdf: {asdf}</h2>
          <button onClick={this.changename.bind(this)}>changename</button>
          <button onClick={this.asyncChangeName.bind(this)}>asyncChangeName</button>
          <button onClick={this.asyncChangeName.bind(this)}>asyncChangeNamePro</button>
          <button onClick={this.asdasdasd.bind(this)}>change module bbb.name</button>
      </div>
    )
  }
}