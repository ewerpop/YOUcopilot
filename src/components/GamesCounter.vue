<template>
    <div class="container">
        <div v-if="isMessageEmpty == true">
            <button @click="isMessageEmpty = false">Add player</button>
            <h1>{{ isMessageEmpty }}</h1>
        </div>
        <div v-else>
            <div v-for="player in players" :key="player.id">
                <div>
                    <h1>{{ player.name }}</h1>
                    <input type="number" v-model="numberToCount" />
                    <button @click="addToCounte(player.id)">Добавить к очкам</button>
                    <h6>{{ player.count }}</h6>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'GamesCounter',
    data() {
        return {
            players: [
                { id: 1, count: 0, name: "Oleg" },
                { id: new Date().getTime(), count: 0, name: "Vadim" },
                { id: 2, count: 0, name: "Maksim" },
            ],
            isMessageEmpty: false,
            numberToCount: 0,
        }

    },
    methods: {
        addToCount: function (id) {
            this.players.map((count) => {

            })
        }
    },
};
</script>