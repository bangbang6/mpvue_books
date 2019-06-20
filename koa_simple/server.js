const http = require('http')
const App  = require("./app.js")
let app = new App()
async function fn1(ctx,next){
    console.log('fn1')
    await next()
    console.log('end fn1')
  }
  
  async function fn2(ctx,next){
    console.log('fn2')
    await delay()
    await next()
    console.log('end fn2')
  }
  function fn3(ctx,next){
    console.log('fn3')
  }
  
  function delay(){
    return new Promise((reslove,reject)=>{
      setTimeout(()=>{
        reslove()
      },2000)
    })
  }
app.use(fn1)
app.use(fn2)
app.use(fn3)
app.listen(8000)