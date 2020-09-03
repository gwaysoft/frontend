<template>
<div>
  {{sharedState}}
  <el-button @click="clkButton">change</el-button>
  <router-link to="/s2">s2</router-link>
</div>
</template>

<script>
export default {
name: "s1",
  data(){
    return{
      sharedState: this.$root.state.message
    }
  },
  methods:{
    clkButton:function (){
      this.sharedState = "sharedState s2"
      // this.$root.state.message = "state s2"
      this.$root.setMessageAction("state s2")
    }
  }
}
</script>

<style scoped>

</style>