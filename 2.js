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
  return list.push(fromJS({ name: "angular" }));
})
var memap_ref = memap;
// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// console.log(me1.toJS().stackskill[0].list, '~~~~~~~~~~~~');
// console.log(JSON.stringify(me1.toJS(), null , 2), '~~~~~~~~~~~~');

let sjb = 'zmz';
let ooo = {
  sex: 1234
};
var a = fromJS({ name: sjb, skill: 'eat shit fuck' })
var b = fromJS({ name: sjb, sex: ooo });
var w = fromJS({});
console.log(w.size, ` .....size()  `);
ooo.sex = '5566';
var c = a.merge(b);
var cc = Seq(c).filter((v,k) => k === 'name' || k === 'skill');
sjb = 'zhangmingzhi';
console.log(cc.toJS(), cc, is(a,b));

var q = Map({"oo": `shitman`});
q = q.set(ooo, "oops");
console.log(q.get(ooo));
const oddSquares = Seq.of(1, 2, 3, 4, 5, 6, 7, 8)
  .filter(x => {
    console.log(x, '~~~~~~~~~~~~');
    return x % 2;
  })
  .map(x => x * x)
console.log(oddSquares.get(1));
 