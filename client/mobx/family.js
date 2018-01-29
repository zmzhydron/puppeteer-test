import { observable,computed,action,extendObservable,autorun} from "mobx";
import zmz from "./zmz.js";
export default class Family {
  constructor(){
    console.log(" init family");
    this.zmz = new zmz(this);
    // autorun( () => {
    //   console.log(this.zmz.profile.salary, 'autorunning');
    // })
  }
  @observable name = "ZHANG";
  @action changename(name = "zhang") {
    this.name = name;
  }
}