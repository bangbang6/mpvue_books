const http = require('http')
let request = {
    get url(){
        return this.req.url
    }
}
let response = {
    get body(){
        return this.res._body
    },
    set body(val){
        this.res.body = val
    }
}
let context = {
    get url(){
      return this.request.url
    },
    get body(){
      return this.response.body
    },
    set body(val){
      this.response.body = val
    }
  }
/*   async function fn1(next){
    console.log('fn1')
    await next()
    console.log('end fn1')
  }
  
  async function fn2(next){
    console.log('fn2')
    await delay()
    await next()
    console.log('end fn2')
  }
  function fn3(next){
    console.log('fn3')
  }
  
  function delay(){
    return new Promise((reslove,reject)=>{
      setTimeout(()=>{
        reslove()
      },2000)
    })
  } */

 // middlewares=[fn1,fn2,fn3]
function compose(middlewares){
    return function(){
        dispatch(0)
        function dispatch(index){
            if(!middlewares[index]){
                return Promise.resolve()
            }else{
                return Promise.resolve(middlewares[index].call(null,()=>{
                   return dispatch(index + 1)
                }))
            }
        }
    }
}
class app{
    constructor(){
        this.middlewares=[]
        this.request = request
        this.response = response
        this.ctx = context
    }
    use(callback){
        this.middlewares.push( callback)
    }
     listen(...args){
        var server = http.createServer((req,res)=>{
            let ctx = this.createCtx(req,res)
          var fn = this.compose(this.middlewares)
           fn(ctx)
           // this.callback(ctx)
            ctx.res.end(ctx.body)
        })
        server.listen(...args)
    }
    createCtx(req,res){
        var ctx = Object.create(context)
        ctx.request = Object.create(req)
        ctx.response = Object.create(res)
        ctx.req = ctx.request.req= req
        ctx.res = ctx.response.res= res
        return ctx
    }
    compose(middlewares){
        return function(context){
            return dispatch(0)
            function dispatch(index){
                if(!middlewares[index]){
                    return Promise.resolve()
                }else{
                    return Promise.resolve(middlewares[index](context,()=>{
                       return dispatch(index + 1)
                    }))
                }
            }
        }
    }
}
module.exports= app