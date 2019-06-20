
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {},
      success: function (res) {
        resolve(res.data)
      },
      fail: (res) => {
        reject(res.data)
      }
    })
  })
}
export function request(url,method,data={}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            data,
            method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
               resolve(res.data)
            },
            fail: function() {
                reject("接口失败")
            },
            
        })
    })
        
    
}
export function showModel(content,title){
    console.log("model prewsent")
    wx.showModal({
        content,
        title
    })
}
