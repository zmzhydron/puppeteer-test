import {
  observable,
  computed,
  action,
  extendObservable,
  isObservable,
  isBoxedObservable,
  autorun
} from "mobx";
var raw = {
  skill: `codeing`,
  family: {
    wife: {
      name: `zy`
    },
    son: {
      name: `goudan`
    }
  },
  goals: [{
      name: "redux",
      finish: false,
    },
    {
      name: "mobx",
      finish: false,
    },
    {
      name: "linux",
      finish: false,
    },
    {
      name: "http",
      finish: false,
    },
    {
      name: "add immutable",
      finish: false,
    }
  ]
}
export default class Zmz {
  constructor(root) {
    console.log(root, `this is root`);
    // this.profile = observable(raw);
    extendObservable(this.profile, {
      salary: ""
    })
    autorun(() => {
      console.log(this.profile.skill, '>>>>>>>skill<<<<<<<');
      console.log(this.profile.salary, '>>>>>>>salary<<<<<<<');
    })
  }
  @observable profile = raw;
  @observable name = "ZHANGMINGZHI";
  @action changename(name = "frank zhang") {
    setTimeout(() => {
      this.name = name + " i am setTimeout";
    }, 1000);
  }
  @action changesalary() {
    this.profile.salary = 30000 + " ~~ " + Math.random();
    this.profile.skill = 30000 + " ~~ " + Math.random();
    console.log(this.profile, raw);
  }
  @action changeStatus(index, status){
    this.profile.goals[index].finish = status;
  }
  @action addGolas(name, cb){
    this.profile.goals.push({
      finish: false,
      name,
    })
    cb();
  }
  @action extendobserable() {
    extendObservable(this.profile, {
      salary: ""
    })
    // window.qwer = this.profile;
    console.log(this.profile, `profilesss`, isObservable(this.profile, "skill"), raw);
  }
}