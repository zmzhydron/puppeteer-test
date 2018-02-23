

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
// chain(gogo("zhang","mingzhi")).then(val => {
// // chain("zmz").then(val => {
//   console.log(val, new Date().valueOf(), 'BBBBBBBBBBBBB');
//   return gogo(val," is");
// }).then(val => {
//   console.log(new Date().valueOf(), 'CCCCCCCCCCCCC');
//   return gogo(val, " big");
// }).then(val => {
//   console.log(new Date().valueOf(), 'DDDDDDDDDDDDD');
//   return gogo(val ," dick");
// }).then(val => {
//   console.log(new Date().valueOf(), 'EEEEEEEEEEEEEE');
//   // return " i am the last one ";
//   return glc63;
// }).then(val => {
//   console.log(new Date().valueOf(), 'FFFFFFFFFFFFFF');
//   console.log(`last of val ${val}`)
// })

const timeStamp = function() {
  return new Date().toString();
}
var aa = Promise.resolve()
.then( () => {
  console.log(`stage 1`, timeStamp())
  return gogo("zhang", 'mingzhi');
})
.then(str => {
  console.log(`stage 2`, timeStamp(), str)
  return str;
})
.then(val => {
  console.log(`stage 3`, timeStamp(), val)
  return val;
})
async function haha() {
  var r = await aa;
  console.log("2");
  return r
}
haha().then(val => {
  console.log(`final`, val, timeStamp());
})
