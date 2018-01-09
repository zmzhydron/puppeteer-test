import { observable, computed, action } from "mobx";
export default class Me {
  id = Math.random();
  name = 'sjb';
  @observable name = "zhanmgmingzhi"
  @observable age = 29
  @observable todos = [{
    job: "meiyou",
    salary: "18000"
  }]
  @action
  changename(name){
    this.name = name;
  }
}