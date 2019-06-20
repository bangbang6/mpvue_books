<template>
  <div>
      <swiper :bookInfo="bookInfo"></swiper>
    <bookList :book='book' :key="book.id" v-for='book in bookInfo'></bookList>
  </div>
</template>
<script>
import swiper from "@/components/swiper.vue"
import bookList from '@/components/bookList.vue'
import {mapState,mapMutations} from 'vuex'
export default {
    components:{
        bookList,
        swiper
    },
    computed:{
        ...mapState(["bookInfo"])

        
    },
    mounted(){
       /*  this.bookInfo.map(v=>{
            console.log(Object.assign({},v,{author:"振邦2"}))
            return Object.assign({},v,{author:"振邦2"})
        }) */
        console.log(this.bookInfo)
    }
}
</script>
<style>


</style>
