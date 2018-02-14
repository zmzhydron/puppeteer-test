const { Map, List, Seq, is, fromJS } = require("immutable");

var me = {
  name: "sjb",
  stackskill: [
    {
      name: "Js",
      list: [
        {
          name: 'vue'
        },
        {
          name: 'react'
        }
      ]
    }
  ]
}
var list = List([1, 2, 3]);
var memap = fromJS(me);
var me1 = memap.updateIn(['stackskill', 0, 'list'], list => {
  list = list.updateIn([0], val => fromJS({ name: "vue2" }));
  list = list.push(fromJS({ name: "angular" }));
  return list;
})
var memap_ref = memap;
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// console.log(me1.toJS().stackskill[0].list, '~~~~~~~~~~~~');
// console.log(JSON.stringify(me1.toJS(), null , 2), '~~~~~~~~~~~~');

var q = {
  name: {
    first: "zhang"
  }
}
var w = {
  name: {
    first: "zha2ng"
  }
}
var qq = fromJS(q);
qq = qq.updateIn(["name", "first"], o => {
  console.log(o);
  return fromJS({
    firstLetter: "Z"
  })
  // return {
  //   first: "ZMZ"
  // }
})
// console.log(is(fromJS(q),fromJS(w)), '$$$$$$$$$$$$');
// console.log(fromJS(q).equals(fromJS(w)), '$$$$$$$$$$$$');
console.log(JSON.stringify(qq.toJS(), null, 2));
console.log(qq)

// let sjb = 'zmz';
// let ooo = {
//   sex: 'male'
// };
// var a = fromJS({ name: sjb, skill: 'eat shit fuck' })
// var b = fromJS({ name: sjb, sex: ooo, age: 29 });
// var w = fromJS({});
// console.log(w.size, ` .....size()  `);
// ooo.sex = '5566';
// var c = a.merge(b);
// var cc = Seq(c).filter((v,k) => k === 'name' || k === 'skill');
// sjb = 'zhangmingzhi';
// console.log(cc.toJS(), c, is(a,b));

// var q = Map({"oo": `shitman`});
// q = q.set(ooo, "oops");
// console.log(q.get(ooo));
// const oddSquares = Seq.of(1, 2, 3, 4, 5, 6, 7, 8)
//   .filter(x => {
//     console.log(x, '~~~~~~~~~~~~');
//     return x % 2;
//   })
//   .map(x => x * x)
// console.log(oddSquares.get(1));
 