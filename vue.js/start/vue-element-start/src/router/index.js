import Vue from "vue"

// npm install -save vue-router
// npm install --save core-js
import Router from "vue-router"
import computed from "@/views/learn/computed_properties"
import layout from "@/layout"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/computed",
            component: computed
        },
        {
            path: "/",
            component: layout
        }
    ]
})