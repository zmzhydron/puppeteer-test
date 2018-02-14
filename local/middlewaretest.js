function wapper(argus) {
  return argus.reverse().reduce((a, b, c) => {
    return b(a);
  }, (value) => {
    console.log(`final value are ${value}`);
  })
}

const a = next => value => {
  next(value + " a");
}
const b = next => value => {
  next(value + " b");
}
const c = next => value => {
  next(value + " c");
}
const d = next => value => {
  next(value + " d");
}

var kickoff = wapper([a, b, c, d]);
kickoff('zhangmingzhi');

// let aa = a(b(c(d((value) => {
//   console.log(value, ' final')
// }))));
// aa("zmz");
