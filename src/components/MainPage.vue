<template>
  <main>
    <h1>Main</h1>
    <div v-if="isAuth">
      <div>
        Hello user <b>{{ username }}</b>
      </div>
      <b-button variant="danger" @click="logOut">LogOut</b-button>
      <div style="margin-top: 10px;">
        <b-card-group deck>
          <b-card header="Новости" header-tag="header" title="Добавлены счётчик для игр!">
            <b-card-text>Вот и повод собраться с друзьями</b-card-text>
            <b-button variant="primary" :to="'/games-counter'">Счётчик</b-button>
          </b-card>

          <b-card header="Планы" header-tag="header" title="Переход с localStorage на SQL!">
            <b-card-text>Скоро будет BackEnd</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div v-else>
      <label>Register, please</label>
      <b-form-input @keyup.enter="login" type="text" v-model="username"
        style="border: 2px solid rgb(130, 130, 218);"></b-form-input>
      <b-button variant="success" @click="login">Login</b-button>
    </div>
  </main>
</template>
<script>
export default {
  name: 'MainPage',
  data() {
    return {
      isAuth: false,
      username: ""
    }
  },
  created() {
    if (localStorage.getItem('isAuth')) {
      this.isAuth = true
      this.username = localStorage.getItem('username');
    }
  },
  methods: {
    login: function () {
      if (this.username !== '') {
        this.isAuth = true;
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", this.username);
      } else {
        alert("Input your data")
      }
    },
    logOut: function () {
      this.isAuth = false
      this.username = ""
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
    }
  },
}
</script>