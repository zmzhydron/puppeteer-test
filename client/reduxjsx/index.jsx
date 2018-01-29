import React from "react"
import ReactDom from "react-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "@redux/actions/1.js"
import Father from "./father.jsx"
import Son from "./son.jsx"
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actions, props.dispatch);
  }
  render() {
    console.log(this.props)
    let { son, father, member, name } = this.props.store;
    return (
      <div>
        <Father actions={this.actions} passProps={father}/>
        <Son actions={this.actions} passProps={son}/>
      </div>
    )
  }
}
export default connect(state => {
  return {
    store: state
  }
})(Index)