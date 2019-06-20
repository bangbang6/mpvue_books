var Router = require('koa-router');
var router = new Router();
//前端无法用impport 只有存在babel转义的时候imprt 才会变成require
const logger = require( "./koa-logger.js")
function delay(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
    
}
const koa = require("koa")
const app = new koa()
router.get("/",(ctx,next)=>{
    ctx.body = "mm"
})
app
.use(router.routes())
.use(router.allowedMethods());
/*app.use(logger)
app.use(async(ctx,next)=>{
    ctx.body='1'
    /* if(ctx.request.url == '/'){
        ctx.body += '齐天大圣'
    }else{
        ctx.body += 'zhudajie'
    } */ //如果这样设计路由就太麻烦啦 koalouter 来路由
   /*  await next()//都必须加await 不然假如下面哪个中间件加拉异步操作 很可能这个不是第一个中间件
    ctx.body += '2'
})
app.use(async(ctx,next)=>{
    ctx.body+='3'
    //await delay()
    await delay()
    await next()
    ctx.body += '4'
})
app.use(async(ctx,next)=>{
    ctx.body+='5'
    //await delay()
    await next() // 表示执行下一个中间件 没写这个的话 直接不执行下面的中间件啦 next()下面的语句是杨冲泉后面会执行回来 和express完全不同
    ctx.body += '6'
    ctx.body += '6'
})
//settimeout 不注射代码 在他后面的代码会执行 一秒后在执行setiimeout的 
//promise 链式调用 return  的一定是个promise对象 会传到then里面的对应参数去
//await 后面的也要是promise 对象 constt world = await new Promise((resolve,reject=>{resolve ("aaa")})) world就是aaa
/* app.use(async(ctx)=>{
    ctx.body='hellp'
}) */
app.listen(3000)

