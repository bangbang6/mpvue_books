<template>
 <div class='center'>
  <div class="userinfo">
    <img :src="imgSrc" class='img'>
    <p class='userText'>{{userInfo.nickName}}</p>
    <button open-type="getUserInfo" @click="getUserInfo" v-if="!userInfo.nickName" class='btn'> 获取头像昵称 </button>
  </div>
  <yearToggle></yearToggle>
  <div class="scan" @click='scan'>扫码图书</div>
 </div>
</template>

<script>
//http://119.29.3.47:9001/book/worm/isbn?isbn=9787516820940
import {request,showModel} from "../../utils/index.js"
import yearToggle from '@/components/yearToggle.vue'
import {mapState,mapMutations} from 'vuex'

export default {
    data(){
        return {
            userInfo:{}
        }
    },
    computed:{
        imgSrc(){
            if(JSON.stringify(this.userInfo) == "{}"){
                return "/static/img/unlogin.png"
            }else{
                return this.userInfo.avatarUrl
            }
        },
        ...mapState(['bookInfo'])
    },
  components: {
    yearToggle
  },
  methods: {
    ...mapMutations({addbookToVuex:"addbook"}),  
    async getName (url) {

      /* import {get} from "../utils/index.js" //为什么要因为后面还有代码可能用到data如果data异步没取出来 后面data就会使用undeifined
           data =await get("www") *//*  */
    },
    getUserInfo () {
      wx.getUserInfo({
        withCredentials: true, // 此处设为true，才会返回encryptedData等敏感信息
        success: res => {
        // 可以将 res 发送给后台解码出 unionId

          console.log(res)
          this.userInfo = res.userInfo
          wx.setStorageSync('userName', this.userInfo.nickName)
        }
      })
    },
    scan(){

        let that= this
        wx.scanCode({
          success (res) {
            console.log(res)
            that.addbook(res.result)
        }
    })
    },
    async addbook(isbn){
      let bookInfo =  await request("http://119.29.3.47:9001/book/worm/isbn?isbn"+isbn,"get")
      console.log("bookInfo",bookInfo)
      showModel("图书A","添加")
      let num = 0
      //vuex加入图书
      this.addbookToVuex({
          id:num++,
          bookName:"小程序"+ num,
          author:"振邦",
          count:0
      })
      console.log(this.bookInfo)
    }
  }
}
</script>

<style lang='scss' scoped>
.center{
    text-align:center;
    .img{
        width:200rpx;
        height:200rpx;
        border-radius:50%;
        margin-top:60rpx;
    }
    .userText{
        text-align:center;
        font-size:24rpx;
        
    }
    .btn{
        text-align: center;
        justify-content: center;
        font-size:20rpx;
        color:white;
        line-height:100rpx;
        margin:40rpx;
        height:100rpx;
        background-color: #EA5149;
    }
    .scan{
        height:100rpx;
        margin:40rpx;
        font-size:20rpx;
        color:white;
        background-color: #EA5149;
        text-align: center;
        line-height:100rpx;
    }
}
</style>
