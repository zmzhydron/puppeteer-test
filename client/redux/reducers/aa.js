import { combineReducers } from 'redux'
let name = 'shitman';
const raw = {
  name: 'socking bitch'
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
  changemodulebbbname: (state, action) => {
    return {
      ...state,
      name: action.value
    }
  }
})
export default stageA;