import { combineReducers } from 'redux'

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
    return {
      ...state,
      son: {
        ...state.son,
        name: action.value
      }
    }
  },
  changefathername: (state, action) => {
    return {
      ...state,
      father: {
        ...state.father,
        name: action.value
      }
    }
  }
})
export default stageA;