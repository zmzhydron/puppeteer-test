import { observable, autorun, action, computed } from "mobx"
class Car {
  constructor(){
    autorun(() => {
    })
  }
  @observable name = `Jaguar F-pace`;
  @observable price = "580000";
  @observable engine = "supercharge V6";
  @action
  changecar(name="audi Sq5", price="620000", engine="turboCharge V6"){
    this.name = name;
    this.price = price;
    this.engine = engine;
  }
}

export default Car