import router from './router'
import { getToken } from '@/utils/auth'

router.beforeEach(async(to, from, next) => {
    const hasToken = getToken()
    // console.log("token: " + hasToken)
    // setToken("dddddd")
    console.log(to.path + "token: " + hasToken)
    next()
    if (hasToken) {
        console.log("token: " + hasToken)
        next({path:"/s1"})
    }
})