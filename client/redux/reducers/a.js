import { combineReducers } from 'redux'
import shit from "./aa.js"
let name = 'shitman';
const raw = {
  name: "zhang",
  menber: 5,
  son: {
    name: "zmz",
    age: 29
  },
  father: {
    name: "glz",
    age: 79
  }
}
const reducerWapper = opObj => (state = raw, action) => {
  let fn = opObj[action.type]
  if (fn && typeof fn === 'function') {
    return fn(state, action);
  } else {
    return state;
  }
}

const stageA = reducerWapper({
  changesonname: (state, action) => {
    console.log(action, state, `reducer stage....`);
    return {
      ...state,
      son: {
        ...state.son,
        name: action.value
      }
    }
  },
  changefathername: (state, action) => {
    console.log(action, state, `>>>>>>>>>>>>>>>>>>>>>>reducer stage....`);
    return {
      ...state,
      father: {
        ...state.father,
        name: action.value
      }
    }
  }
})
export default combineReducers({
  aaa: stageA,
  bbb: shit
});