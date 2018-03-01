import React from "react"
import ReactDom from "react-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "@redux/actions/1.js"
import Father from "./father.jsx"
import Son from "./son.jsx"
import propTypes from "prop-types"
import { Button } from 'antd';

let myself = {
  name: {
    first: "zhang",
    last: "mingzhi"
  }
}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actions, props.dispatch);
    this.state = {
      randoms: "sit down"
    }
  }
  getChildContext() {
    console.log("getChildContext");
    return { asdf: "context test"+this.state.randoms };
  }
  haha() {
    console.log("fuckyou");
    this.setState({
      randoms: new Date().valueOf() + "aaa"
    })
  }
  render() {
    console.log(this.props)
    let { son, father, member, name } = this.props.store;
    return (
      <div>
        <Father actions={this.actions} passProps={father} />
        <Son actions={this.actions} passProps={son} />
        <Button onClick={this.haha.bind(this)}>{this.state.randoms}</Button>
      </div>
    )
  }
}
Index.childContextTypes = {
  asdf: propTypes.string
};
export default connect(state => {
  return {
    store: state
  }
})(Index)