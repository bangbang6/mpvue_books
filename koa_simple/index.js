let config = {
    get url(){
        return "get"
    },
    set url(val){
        return "set"
    }

}
//这就是vUE实现的原理 调用同变量名的时候会执行grt和post函数 同时可以进行别的操作
/* console.log(config.url)
async function fn1(next){
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
  }
  middlewares=[fn1,fn2,fn3]
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
compose(middlewares)() */