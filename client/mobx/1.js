import {observable,computed,action,extendObservable,autorun} from "mobx";
export default class Me {
  id = Math.random();
  @observable name = "zhanmgmingzhi"
  @observable lastname = 'jack'
  @observable age = 29
  @observable todos = [{
    name: "meiyou",
    age: "18000"
  }]
  constructor() {
    console.log(autorun);
    const runs = autorun( () => {
      console.log(this.name, '``name``');
    })
    runs();
  }
  @computed get fullname() {
    return this.name + this.lastname
  }
  set fullname(name) {
    this.name = `${name}${new Date().valueOf()} shitman`
  }
  @action
  changename(name) {
    this.fullname = name;
  }
  @action addTodos() {
    setTimeout(() => {
      this.todos.push({
        name: `zmz${new Date().valueOf()}`,
        age: Math.floor(Math.random() * 29) + 29
      })
    }, 1000);
  }
  @computed get todoLen() {
    // throw new Error('fuckme');
    this.todos.forEach(item => {
      console.log(item, '********************');
    })
    return this.todos.length
  }
}