<template>
  <div>
    <h1>{{ $route.params.name }}</h1>
    <h3>{{ id }}</h3>
    <h3>{{ name }}</h3>
    <h3>{{ $store.state.count }}</h3>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["id", "name"],
  // data(){
  //   return this.$root.sourceOfTruth
  // }
}
</script>

<style scoped>

</style>