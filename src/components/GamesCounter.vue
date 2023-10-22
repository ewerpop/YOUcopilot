<template>
    <div class="container">
        <div v-if="isMessageEmpty == true">
            <button @click="isMessageEmpty = false">Add player</button>
            <h1>{{ isMessageEmpty }}</h1>
        </div>
        <div v-else>
            <div v-for="note in notes" :key="note.id">
                <div>
                    <input type="text" v-model="note.text" />
                    <button>Добавить к очкам</button>
                    <h6>{{ note.text }}</h6>
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
            notes: [
                { id: new Date().getTime(), text: "Something" },
                { id: 2, count: 0, text: "Something" },
            ],
            isMessageEmpty: false,
        }

    },

};
</script>