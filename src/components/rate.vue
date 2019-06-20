<!--  -->
<template>
<div class='rate'> 
    <span class='dark'>★★★★★</span>
    <div class='light'>☆☆☆☆☆</div>
</div>
  
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: function(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
.rate{
    position: relative;
    //float:right
    .dark{
        position: absolute;
        width:2em;
        top:0;
        left:0;
        overflow: hidden;
    }
    .light{
        position: absolute;
        top:0;
        left:0;
    }
}
</style>