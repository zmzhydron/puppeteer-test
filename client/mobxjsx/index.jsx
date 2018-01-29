import React from "react"
import ReactDom from "react-dom"
import { observer, inject, Provider } from 'mobx-react';
import { observable, action } from "mobx"
import Sub from "./sub.jsx"

@inject('asdf')
@observer
export default class Index extends React.Component {
  @observable shitname = "pussy"
  @action
  changshitname(){
    this.shitname = "fuckyouman"
  }
  constructor(props) {
    super(props);
  }
  componentWillReact() {
  }
  changeFamilyName() {
    this.props.asdf.changename('JACK');
  }
  render() {
    let FN = this.props.asdf.name;
    let MN = this.props.asdf.zmz.name;
    return (
      <div>
        <p>{FN}</p>
        <p>{MN}</p>
        <button onClick={this.changeFamilyName.bind(this)}>changeFamilyName</button>
        <Sub zmz={this.props.asdf.zmz}/>          
      </div>
    )
  }
}