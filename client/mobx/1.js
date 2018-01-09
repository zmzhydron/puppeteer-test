import {
  observable,
  computed,
  action,
  extendObservable
} from "mobx";
export default class Me {
  id = Math.random();
  @observable name = "zhanmgmingzhi"
  @observable age = 29
  @observable todos = [{
    job: "meiyou",
    salary: "18000"
  }]
  constructor() {
    extendObservable(this, {
      name: "zhanmgmingzhi",
      age: 29,
      
    })
  }
  @action
  changename(name) {
    this.name = name;
  }
}