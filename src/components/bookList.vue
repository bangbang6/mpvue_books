
<template>

  <div class='book' @click='toDetail'>
      <div class="left">
          <img src="/static/img/book-active.png" alt="" class='image' mode="aspectFill" @click.stop='preview'>  
      </div>
      <div class="right">
          <div class="row">
        <div class="bookName">{{book.bookName}}</div>
        <rate></rate>      
        </div>
        <div class="row">
            <div class="username">{{book.author}}</div>
            <div class="count">{{book.count}}</div>
        </div>
      </div>
  </div>
 
</template>

<script>
import rate from "@/components/rate.vue"
export default {
  props:["book"],
  components:{
      rate,
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
    
  },

  mounted: function(){
      /* this.book = Object.assign({},this.book,{test:1})
      console.log(this.book) */
  },

  methods: {
    /*   async getList(){
          wx.startPullDownRefresh()
          wx.showNavigationBarLoading()
          let bookList = await get()
          wx.stopPullDownRefresh()
          wx.stopNavigationBarLoading()
      }, */
      toDetail(){

          console.log("jump")
         this.$router.push({ path: '/pages/detail/main', query: { id: this.book.id } })//vuede路由 装两个库就可以
      },
      preview(){
          wx.previewImage({
                current: '/static/img/book-active.png', //稚嫩恶搞用http连接
                urls: ["/static/img/book-active.png"] 
           })
      }
  }
}

</script>
<style lang='scss' scoped>
.book{
    width:750rpx;
    height:300rpx;
    font-size:14px;
    .left{
        float:left;
        height:300rpx;
        width:250rpx;
        .image{
            margin:40rpx;
            width:200rpx;
            height:200rpx;
        }
    }
    .right{
        float:right;
        width:500rpx;
        height:300rpx;
        .row{
            height:100rpx;
            margin:20rpx;
            padding:20rpx;
            display: flex;
            .bookname,.username{
                float:left;

            }
            .count{
                float:right
            }
        }
    }
}
</style>