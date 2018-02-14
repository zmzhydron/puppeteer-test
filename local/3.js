

// promise chain

function gogo(first, last) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, first+last);
  })
}
function chain(p) {
  return new Promise((resolve, reject) => {
    console.log(new Date().valueOf(), 'AAAAAAAAAAA');
    resolve(p);
    
  })
}
var glc63 = {
  name: "glc63s, 4.0t",
  then: (resolve, reject) => {
    console.log(glc63.name);
    resolve(glc63.name);
  }
}
chain(gogo("zhang","mingzhi")).then(val => {
// chain("zmz").then(val => {
  console.log(val, new Date().valueOf(), 'BBBBBBBBBBBBB');
  return gogo(val," is");
}).then(val => {
  console.log(new Date().valueOf(), 'CCCCCCCCCCCCC');
  return gogo(val, " big");
}).then(val => {
  console.log(new Date().valueOf(), 'DDDDDDDDDDDDD');
  return gogo(val ," dick");
}).then(val => {
  console.log(new Date().valueOf(), 'EEEEEEEEEEEEEE');
  // return " i am the last one ";
  return glc63;
}).then(val => {
  console.log(new Date().valueOf(), 'FFFFFFFFFFFFFF');
  console.log(`last of val ${val}`)
})

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "fuckyou");
})

// var p2 = new Promise((resolve, reject) => {
//   resolve(glc63);
// });
// p2.then(val => {
//   console.log(val, 'result!!');
// })
// Promise.resolve(glc63).then(val => {
//   console.log(`olala ${val}`);
// })