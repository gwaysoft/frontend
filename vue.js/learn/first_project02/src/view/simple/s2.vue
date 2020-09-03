<template>
<div>
  <h3>{{sharedState}}</h3>
  <el-button @click="clkButton">change</el-button>
  <router-link to="/s1">s1</router-link>
</div>
</template>

<script>
export default {
name: "s2",
  data(){
    return{
      sharedState: this.$root.state.message
    }
  },
  methods:{
    clkButton:function (){
      // this.$root.state.message = "ddd"
      console.log("d")
      this.sharedState = "sharedState s1"
      this.$root.setMessageAction("state s1")
    }
  }
}
</script>

<style scoped>

</style>