import React from "react"
import ReactDom from "react-dom"
import { observer } from 'mobx-react';

@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  lister() {
    return this.props.store.todos.map((item, index) => {
      return <p key={index}>{item.name}, hello!, age of {item.age}</p>
    })
  }
  componentWillReact(a,b,c,d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  shit() {
    this.props.store.changename("11111111111");
  }
  addTodos(){
    this.props.store.addTodos();
  }
  render() {
    console.log(this.props.store);
    let len = this.props.store.todoLen;
    return (
      <div>
        <h1>{this.props.store.fullname}</h1>
        <h3>{this.props.store.name}</h3>
        <button onClick={this.shit.bind(this)}>shit</button>
        <button onClick={this.addTodos.bind(this)}>addTods {len}</button>
        {this.lister()}
      </div>
    )
  }
}