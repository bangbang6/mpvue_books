
<template>
  <div>
      <swiper indicator-dots="true"
     
      indicator-color='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'  class='swiper'>
  
    <swiper-item  :key="index" v-for="(chunk,index) in chunkBooks">
      <img src="/static/img/book-active.png" :key="vindex" v-for="(book,vindex) in chunk" class="image"  height="150" mode="aspectFit">
      
    </swiper-item>
  
</swiper>
  </div>
</template>

<script>
export default {
    props:["bookInfo"],
  data () {
    return {
        chunkBooks:[]
    };
  },

  components: {},

  computed: {},

  mounted: function(){
      this.chunkBooks = [this.bookInfo.slice(0,3),this.bookInfo.slice(3,6)]
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.swiper{
    width:750rpx;
    height:400rpx;
    margin:40rpx;
    padding:30rpx;
    .image{
        width:20%;
        padding:20rpx;
        margin:20rpx;
    }
}
</style>