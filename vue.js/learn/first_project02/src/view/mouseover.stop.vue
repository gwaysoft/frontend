<template>
  <div>
    <p @mousemove="mouse_move" ref="mouse">:{{x}},{{y}}
      <span @mousemove="stopPropagation" v-html='a'>sss</span>
      <span
    </p>
    <br/>
    <el-button type="primary" @click="stopPropagation">stop</el-button>
  </div>
</template>

<script>
export default {
  name: "mouseover.stop",
  data: function () {
    return {
      x: 0,
      y: 0,
      url:"http://www.baidu.com",
      a: '<a href="http://www.baidu.com"> link</a>'
    }
  },
  methods: {
    mouse_move: function (event) {
      this.x = event.clientX
      this.y = event.clientY
      console.log(event)
    },
    stopPropagation: function (event){
      // console.log(this.$refs.mouse.event)
      // this.$refs.mouse.stopPropagation()
      event.stopPropagation()
    }
  }
}
</script>

<style scoped>

</style>