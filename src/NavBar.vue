<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div>
                <b-img src="./assets/photo_2023-10-13_18-21-18.jpg" style="width: 35px; height: 35px; margin-right: 10px;" fluid alt="Responsive image"></b-img>
            </div>
            <b-navbar-brand :to="'/'">YOUcopilot</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="'/todo'">Список дел</b-nav-item>
                    <b-nav-item :to="'/chat'">Чат</b-nav-item>
                    <b-nav-item :to="'/notepad'">Заметки</b-nav-item>
                    <b-nav-item :to="'/games-counter'">Счётчик очков</b-nav-item>
                </b-navbar-nav>


                <b-navbar-nav class="ml-auto">


                    <b-nav-item-dropdown right>

                        <template #button-content>
                            <em>User</em>
                        </template>

                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
