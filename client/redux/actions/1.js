const aw = type => value => {
  console.log("orgin actions ~~~ <<<<<<<<<<<<<<<<<<<<<<<<")
  return {
    type,
    value,
  }
}

export const changesonname = aw("changesonname");
export const changefathername = aw("changefathername");