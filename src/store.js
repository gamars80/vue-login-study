import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "gamars", email: "gamars@gmail.com", password: "11111" },
      {
        id: 2,
        name: "gamars2",
        email: "gamars2@gmail.com",
        password: "11111"
      }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    //로그인 성공시
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //로그인 실패시
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    //로그아웃
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    //로그인 시도
    login({ state, commit }, loginObj) {
      //전체 유저에서 해당 이메일로 유저를 찾는다
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) {
          selectedUser = user
        }
      })
      // if (selectedUser === null) commit("loginError")
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError")
      else {
        commit("loginSuccess", selectedUser)
        router.push({ name: "mypage" })
      }
      //commit("loginSuccess")
    },
    logout({ commit }) {
      commit("logout")
      router.push({ name: "home" })
    }
  }
})
