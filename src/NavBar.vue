<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div>
                <b-img src="./assets/photo_2023-10-13_18-21-18.jpg" style="width: 35px; height: 35px; margin-right: 10px;"
                    fluid alt="Responsive image"></b-img>
            </div>
            <b-navbar-brand :to="'/'">YOUcopilot</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="'/chat'">Чат</b-nav-item>
                    <b-nav-item :to="'/notepad'">Заметки</b-nav-item>
                    <b-nav-item :to="'/api'">API</b-nav-item>
                    <b-nav-item :to="'/todo'">ToDo</b-nav-item>
                    <b-nav-item :to="'/games-counter'">Счётчик для игр</b-nav-item>
                </b-navbar-nav>


                <b-navbar-nav class="ml-auto">


                    <b-nav-item-dropdown right>

                        <template #button-content>
                            <em v-if="username">{{ username }}</em>
                            <em v-else>Register, please</em>
                        </template>
                        <b-dropdown-item v-if="username"><button @click="logOut" style="border: 0px black solid;">Log Out</button></b-dropdown-item>
                        <b-dropdown-item href="/" v-else>Log in</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            username: "",
            isAuth: false
        }
    },
    
    mounted() {
        if (localStorage.getItem('isAuth')) {
            this.isAuth = true
            this.username = localStorage.getItem('username');
        }
    },
    methods: {
        login() {
            if (localStorage.getItem('username' !== "")) {
                this.isAuth = true;
                localStorage.setItem("isAuth", true);
                this.username = localStorage.getItem('username');
            } else {
                this.username = ""
            }
        },
        logOut: function () {
            this.isAuth = false
            this.username = ""
            localStorage.removeItem("isAuth");
            localStorage.removeItem("username");
        }

    }
}
</script>
