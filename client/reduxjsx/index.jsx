import React from "react"
import ReactDom from "react-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "@redux/actions/1.js"
import Father from "./father.jsx"
import Son from "./son.jsx"
import propTypes from "prop-types"
import { Button } from 'antd';
import ContentSon from "./contentSon.jsx"
import Content from "./contents.js"
console.log(Content.Provider, `Provider`);
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actions, props.dispatch);
    this.state = {
      randoms: "sit down",
      meobj: {
        type: 'codeer',
        outfit: 'shorts',
        shape: 'fat ass',
        top: 'small head',
        changes: () => {
          console.log(`'captain america'`);
          this.setState(state => {
            return {
              meobj: {
                  ...state.meobj,
                  type: 'captain america'
                }
            }
          })
        }
      }
    }
  }
  haha() {
    this.setState({
      randoms: new Date().valueOf() + "aaa"
    })
  }
  render() {
    console.log(this.props)
    let { son, father, member, name } = this.props.store;
    return (
      <Content.Provider value={this.state.meobj}>
        <ContentSon age="18"/>
        <h2>{this.props.shitload.name}</h2>
        <Father actions={this.actions} passProps={father} />
        <Son actions={this.actions} passProps={son} />
        <Button onClick={this.haha.bind(this)}>{this.state.randoms}</Button>
      </Content.Provider>
    )
  }
}

export default connect(state => {
  console.log(state, `state of connect`);
  return {
    store: state.aaa,
    shitload: state.bbb
  }
})(Index)