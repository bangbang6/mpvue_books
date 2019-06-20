
<template>
  <div class='toggle'>
      <progress :percent="percents" color="pink"></progress>
      <p class="intro">{{year}}年已经过啦{{days}}天，{{percents}}%</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {
      
  },

  computed: {
      year(){
          let day = new Date()
          return day.getFullYear()
      },
      days(){
          let start = new Date()
          start.setMonth(0)
          start.setDate(1)
          let offset = (new Date()).getTime() - start.getTime()
          return parseInt(offset/1000/60/60/24)  
      },
      percents(){
          let days = this.getDays()
          return (this.days*100/days).toFixed(1)
      }
  },

  mounted: function () {},

  methods: {
      isLeapyear(){
        let date = new Date()
        let year = date.getFullYear()  
        if(year % 400 == 0){
            return true
        }else if(year%4 == 0 && year % 100 !=0){
            return true
        }else{
            return false
        }
      },
      getDays(){
        return this.isLeapyear? 366 :365
      }
  }
}
</script>
<style lang='scss' scoped>
.toggle{
    margin:40rpx;
    height:300rpx;
    .intro{
        font-size: 20rpx;
        text-align: center
    }
}
</style>