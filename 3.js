let a = ['a','b','c'];
let nexts = a[Symbol.iterator]();
console.log(nexts);

// for(var v of a.keys()){
//   console.log(v);
// }
let name = 'zhangmingzhi';

for(let k of name){
  console.log(k);
}