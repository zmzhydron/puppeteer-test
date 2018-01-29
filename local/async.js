function aaa() {
  return new Promise((resolve, reject) => {
    throw new Error("fuck me");
    // resolve("me");
  })
}
function shit(val){
  return val+" too";
}
async function hehe(){
  try{
    var a = await aaa();
    var b = await shit(a);
    return b;
  }catch(e){
    return e;
  }
}
// hehe().then(val => {
//   console.log(val);
//   console.log("shit man");
// })
// setTimeout(() => {
//   console.log(":!!!!!!!!!!!!!!!!");
// },1000);

// var a = [1,1,2,3,4,5,5,6,6,7,8,9,9];
// var b = new Set(a);
// console.log(typeof b);
// console.log(b instanceof Set);
// var c = Array.from(b);
// console.log(typeof c);
// console.log(c instanceof Array);

// var a = [[1,4],[2,2],[2,3]];
// var b = new WeakSet(a);
// console.log(b);
// console.log(b.has([1,1]));

var a = Symbol("shit man");
var b = Symbol("shit man");
var c = {
  a: "zmz",
  b: "sjb",
  "a": "zhangmingzhi",
}
console.log(c.a);
console.log(c['a']);