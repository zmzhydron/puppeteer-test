const aw = type => value => {
  console.log("orgin actions ~~~ <<<<<<<<<<<<<<<<<<<<<<<<")
  return {
    type,
    value,
  }
}

export const changesonname = aw("changesonname");
export const changefathername = aw("changefathername");
export const asyncChangeName = value => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: `changefathername`,
        value: "GLZ996"
      })
    },1000);
  }
}
export const asyncChangeNamePro = value => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: `changefathername`,
        value: "GLZ996"
      })
    },1000);
  }
}