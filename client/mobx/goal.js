import { observable, autorun, action, computed } from "mobx"
import Car from "./car.js"
import ParkingSpace from "./parkingSpace.js"
class Goals {
  constructor(){
    this.car = new Car();
    this.ps = new ParkingSpace();
    autorun(() => {
      console.log(`salary change to `, this.job.salary);
    })
  }
  @observable job = {
    salary: 18000,
    location: `near by`
  }
  @action
  changeSalary(num = 20000){
    this.obj.salary = num;
  }
  @computed get daoshou(){
    return this.obj.salary * 0.8;
  }
}
export default Goals