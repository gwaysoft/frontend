<template>
  <div><h1>{{ $route.params.id }}</h1>
    <h3>{{ $route.params.name }}</h3>
    <h3>{{ $store.state.count }}</h3>
    <h3>{{ this.$root.name }}</h3>
    <h3>{{ name }}</h3>
    <el-button @click="increase">increase</el-button>
  </div>

</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      name: this.$root.name
    }
  },
  methods: {
    increase: function () {
      this.$root.name = "list"
      this.$store.commit("increment")
    }
  }
}
</script>

<style scoped>

</style>