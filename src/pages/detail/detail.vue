<!--  -->
<template>
  <div>这是详情页</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: function(){
      console.log(this.$root.$mp.query.id)
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>