import { observable, autorun, action, computed } from "mobx"
class ParkingSpaces {
  constructor(){
    autorun(() => {
    })
  }
  @observable No = `55`;
  @observable price = "210000";
  @action
  changeSpace(No="39", price="20000",){
    this.No = No;
    this.price = price;
  }
}

export default ParkingSpaces