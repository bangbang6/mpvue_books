module.exports =  async function my(ctx,next){
    const start = new Date().getTime()
    await next()
    const end = new Date().getTime()
    console.log(end - start)
}  