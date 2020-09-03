<template>
  <div>
    <h3>{{id}}</h3>
    <h3>{{this.$root.name}}</h3>
    <el-input-number v-model="num" @change="handleChange"  :min="1" :max="10"></el-input-number>
  </div>
</template>

<script>
export default {
  name: "One",
  data() {
    return {
      num: 1,
      data1: this.$root.sourceOfTruth
    };
  },
  props: ["id", "name"],
  methods: {
    handleChange(value) {
      this.$root.name = "eeee"
      console.log(value)
    }
  }
};
</script>

<style scoped>

</style>