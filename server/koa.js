var koa = require("koa");
var app = new koa();
var router = require("koa-router")()
var multer = require("koa-multer")
var koaBody = require("koa-body");
var fs = require("fs")
var path = require("path")

const customea = async function asdf(o, next){
  o.req.names = 'zhangmingzhi';
  await next();
}
app.use(customea);
app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())
router.post("/api/aaa", async (o, next) => {
  console.log(`enter next()`, o.request.query, o.request.body, o.is("json"));
  var lister = [];
  o.req.on("data", chunk => {
    console.log(chunk, 'chunk');
    lister.push(chunk);
  })

  o.req.on("end", () => {
    var r = lister.join("").toString();
    console.log(r, 'stream end1', o.req.names);
  })
  // fs.writeFileSync(path.join(__dirname, '../req.json'), JSON.stringify(o.req, null, 2))
  o.body = "fuck you bitch";
  await next();
})
app.use(async (o, next) => {
  var lister = [];
  o.req.on("data", chunk => {
    console.log(chunk, ' >>>>>>>>chunk<<<<<<<<<<');
    lister.push(chunk);
  })

  o.req.on("end", () => {
    var r = lister.join("").toString();
    console.log(r, 'stream end2');
  })
  await next();  
})

app.use(async (o, next) => {
  console.log(1);
  // await next();
  await next().then(val => {
    console.log("async return", val);
  })
  console.log(6);
})
app.use(async (o, next) => {
  console.log(2);
  var r;
  // r = await next();
  console.log(5, r);
  return `shitman`
})
app.use(async (o, next) => {
  console.log(3);
  return "one last bite";
  console.log(4);
})
app.listen(9988);