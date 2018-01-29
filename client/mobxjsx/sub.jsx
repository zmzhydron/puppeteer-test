import React from "react"
import ReactDom from "react-dom"
import { observer, inject } from 'mobx-react';
import { observable, action, computed } from "mobx"

@inject('asdf')
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.zmz.changename('fuckmylife' + new Date().valueOf());
  }
  extendobserable() {
    this.props.zmz.extendobserable('fuckmylife');
  }
  changesalary() {
    this.props.zmz.changesalary();
  }
  componentWillReact() {
    console.log(this.props.zmz.profile.salary, ' my salary');
  }
  @computed get skill(){
    console.log("~~~", this.props.zmz.profile.salary)
    return this.props.zmz.profile.skill;
  }
  renderGolas() {
    const changeStatus = (index) => e => {
      let status = !!e.target.checked;
      console.log(status, e.target.checked)
      this.props.zmz.changeStatus(index, status);
    }
    return this.props.zmz.profile.goals.map((item, index) => {
      let { name: keys, name, finish } = item;
      let checked = finish ? "checked" : "";
      return (
        <div key={keys}>
          <span>goals: {name}</span>
          <input type="checkbox" checked={finish} onChange={changeStatus(index)}/>
        </div>
      )
    })
  }
  addGolas(){
    const that = this;
    this.props.zmz.addGolas(this.refs.shitman.value, () => {
      console.log(this, `............`);
      that.refs.shitman.value = '';
    });
  }
  render() {
    let { zmz } = this.props;
    let FN = zmz.name;
    let { profile, profile: { family }  } = zmz;
    let { wife, son } = family;
    console.log(this.props, ' >>>>sub<<<<<');
    return (
      <div>
        <h4 style={{ color: "red" }}>{FN}</h4>
        <h4 style={{ color: "red" }}>{this.skill}</h4>
        <h4 style={{ color: "green" }}>{wife.name}</h4>
        <h4 style={{ color: "orange" }}>{this.props.zmz.profile.salary} $$</h4>
        <div>
          <h2>add goals</h2>
          golas: <input ref="shitman"/>
          <button onClick={this.addGolas.bind(this)}>add GOLAS</button>
        </div>
        {this.renderGolas()}
        <button onClick={this.changename.bind(this)}>subssss</button>
        <button onClick={this.extendobserable.bind(this)}>extendobserable</button>
        <button onClick={this.changesalary.bind(this)}>changesalary</button>
      </div>
    )
  }
}