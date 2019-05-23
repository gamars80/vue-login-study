<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error"
          >아이디와 비밀번호를 확인해주세요</v-alert
        >
        <v-alert class="mb-3" :value="isLogin" type="success"
          >로그인이 완료되었습니다</v-alert
        >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일"></v-text-field>
            <v-text-field
              v-model="password"
              label="패스워드"
              type="password"
            ></v-text-field>
            <v-btn
              @click="
                login({
                  email: email,
                  password: password
                })
              "
              block
              depressed
              color="primary"
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex"

export default {
  data() {
    return {
      email: null,
      password: null
      // isError: false,
      // loginSuccess: false
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
    //login() {
    //전체 유저에서 해당 이메일로 유저를 찾는다
    // let selectedUser = null
    // this.allUsers.forEach(user => {
    //   if (user.email === this.email) {
    //     selectedUser = user
    //   }
    // })
    // if (selectedUser === null) this.isError = true
    // else {
    //   selectedUser.password !== this.password
    //     ? (this.isError = true)
    //     : (this.loginSuccess = true)
    // }
    //그 유저의 비밀번호와 입력된 비밀번호를 비교한다
    // console.log(this.email, this.password)
    // }
  }
}
</script>
