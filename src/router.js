import Vue from "vue"
import Router from "vue-router"
import store from "./store"
Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //이미 로그인된 유저니까 막아야함
    alert("이미 로그인 되었습니다")
    next("/")
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    //아직 로그인 안된 유저니까 막아야함
    alert("로그인을 해주세요")
    next("/")
  } else {
    next()
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // component: Home
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      //라우터에 들어오기전에 rejectAuthUser 가드를 체크
      beforeEnter: rejectAuthUser,
      // component: Home
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      // component: Home
      component: () =>
        import(/* webpackChunkName: "mypage" */ "./views/Mypage.vue")
    }
  ]
})
