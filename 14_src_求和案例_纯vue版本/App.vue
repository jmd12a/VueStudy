<script>
import Count from "@/components/Count.vue";

export default {

  components:{
    // eslint-disable-next-line vue/no-unused-components
    Count:Count
  },

  methods: {},

  data(){
    return{

    }
  }

}
</script>

<template>
  <div>
    <count></count>
  </div>
</template>

<style lang="css" scoped>
    .container{
      display: flex;
      justify-content: space-around;
    }
    video {
      width: 100%;
    }
    img{
      width: 100%;
    }
</style>