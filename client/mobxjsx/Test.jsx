import React from "react"
import ReactDom from "react-dom"
import { observer, inject, Provider } from 'mobx-react';
import { observable, action, autorun } from "mobx"


var me = observable({
  name: "zmz",
  get pussy(){
    return `lana rdoadls`
  },
  list: [1,2],
  gogo: function(){
    this.name = 'fuck taht'+this.pussy
  }
});


var single = observable.box('she');
// me = observable({name: "shitbird"})
autorun( () => {
  console.log(`autoruninit`);
  console.log(me, `autorun`)
  // console.log(me.list[0]);
  me.list
  // console.log(single.get(), `autorun`)
  // console.log(me.name);
})

function person(name='shit'){
  this.name = name;
}
person.prototype.walk = function(){
  console.log("*****************")
  console.log(this)
  console.log(this.name)
  console.log("*****************")
}
var lana = {};
person.call(lana, `lana`);
lana.__proto__ = person.prototype;
lana.__proto__.constructor = function(){
  console.log(`wup bitch`);
}
lana.walk();
console.log(lana.constructor, person.prototype.constructor);
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
  change11() {
    me.name = 'sjb';
    // me.gogo();
    single.set('pissy');
    me.list = `shit`
  }
  componentWillReact() {
  }
  render() {
    return (
      <div>
        <button onClick={this.change11}>observable</button>
      </div>
    )
  }
}