import Vue from 'vue'
import Router from "vue-router"

import UserList from "../view/user/List"
import UserProfile from "../view/user/Profile"
import One from "../view/One"
// import App from "../App"
// import HelloWorld from "@/view/HelloWorld";
import Login from "../view/login/index"
import Layout from "../layout/index"
import s1 from "../view/simple/s1"
import s2 from "../view/simple/s2"
import mouseover from "@/view/mouseover.stop"

// import App from '../App.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        // {
        //     path:"/",
        //     component: App
        // },
        {
            path: "/mouseover",
            component: mouseover
        },
        {
            path: "/s1",
            component: s1
        },
        {
            path: "/s2",
            component: s2
        },
        {
            path: "/one",
            name: "one",
            component: One,
            props: true
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/404",
            component: () => import('@/view/404'),
            hidden: true
        },
        {
            path: "/layout/:token",
            name: "layout",
            component: Layout,
            props: true,
            // },
            // {
            //     path: "/hello",
            //     component: Layout,
            children: [
                {
                    path: "/user/list/:id",
                    name: "list",
                    component: UserList
                },
                {
                    path: "/user/profile/:id",
                    name: "profile",
                    component: UserProfile,
                    props: true
                }
            ]
        },
        {
            path: "/goHome",
            name: "goHome",
            redirect: "/login"
        },
        // 404 page must be placed at the end !!!
        { path: '*', redirect: '/404', hidden: true }
    ]
})




