<template>
  <div id="app">
<!--    <div>-->
<!--      <h3 v-for="item in dataList" :key="item.index">{{ item.to }}</h3>-->
<!--      <h3>{{username}}</h3>-->
<!--    </div>-->
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item v-for="item in dataList" v-bind:key="item.index">
                <router-link v-bind:to="{name: item.to, params: {id: item.id, name: username1} }">{{
                    item.label
                  }}
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>{{ username1 }}</el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--    <el-button @click="visible = true" type="success">Button</el-button>-->
    <!--    <One/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import One from "@/components/One";

export default {
  name: 'Index',
  props: ["token"],
  beforeRouteEnter: function (to, from, next){
    console.log("dd")
    next((vm => {vm.getDataList()}))
  },
  methods:{
    getDataList: function (){
      // this.axios.get("http://192.168.2.110:5000/api/menu")

      this.axios.get("http://localhost:8080/static/json/dataList.json")
          .then((response) =>{
            console.log(response.data.dataList)
            this.dataList =  response.data.dataList
          })
    }
  },
  data() {
    return {
      username1: this.token,
      dataList: ""
    }
  }
  // components: {
  //   One,
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
