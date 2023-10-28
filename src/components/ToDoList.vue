<template>
    <div style="margin-top: 9px;">
        <div>
            <div v-for="list in lists" :key="list.id" style="margin-bottom: 8px;">
                <b-card :bg-variant="list.variant" text-variant="white" class="text-center">
                    <b-card-text>{{ list.text }}</b-card-text>
                    <div>
                        <b-button @click="changeVariant(list.id)" variant=""
                            class="button" style="margin-right: 5px;">Готово</b-button>
                        <b-button variant="danger" @click="remove(list.id)" class="button">Удалить</b-button>
                    </div>
                </b-card>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items:center;">
            <b-form-input @keyup.enter="add" v-model="newText" class="input-group"
                style="border: 2px solid rgb(130, 130, 218); height: 40px;"></b-form-input>
            <b-input-group-append class="input-group" style=" display: flex; justify-content: center;">
                <b-button @click="add" variant="outline-success">Создать</b-button>
                <b-button @click="deleteAll" variant="danger">Очистить</b-button>
            </b-input-group-append>
        </div>
    </div>
</template>

<script>
export default {
    name: "ToDoList",
    props: {
        button: String,
        variant: String,
        text: String,
    },

    data() {
        return {
            lists: [
            ],
            newText: '',
            emptyText: true,
        }
    },
    methods: {
        remove(id) {
            this.lists = this.lists.filter((el) => el.id !== id)
            localStorage.removeItem(`notes_${id}`)

        },
        add() {
            if (this.newText !== "") {
                this.emptyText = false
                const item = { id: new Date().getTime(), text: this.newText, variant: 'info' };
                this.lists.push(item)
                this.createRecords(item)
                this.newText = ""
                console.log(this.lists)
            } else {
                alert('Введите текст заметки')
            }

        },
        createRecords(item) {
            const records = this.lists
            localStorage.setItem(`notes_${item.id}`, JSON.stringify(item))
            console.log(records)
        },
        deleteAll() {
            this.lists = [],
                localStorage.removeItem('notes', JSON.stringify(this.lists))
            this.emptyMsg = true
        },
        loadRecords() {
            const records = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith('notes')) {
                    records.push(JSON.parse(localStorage.getItem(key)))
                }
                //alert(`${key}: ${localStorage.getItem(key)}`);
            }
            //const records = JSON.parse(localStorage.getItem('notes'));
            if (records) {
                this.lists = records
                this.emptyText = false
            }
        },
        changeVariant(id) {
            const item = JSON.parse(localStorage.getItem(`notes_${id}`));
            console.log(item)
            if (item.variant == "info") {
                item.variant = "success"
                console.log(item)
                this.lists.forEach(record => {
                    if (record.id == item.id) {
                        record.variant = "success"
                    }
                })
                localStorage.setItem(`notes_${id}`, JSON.stringify(item) );

            } else if (item.variant == 'success') {
                item.variant = 'info'
                console.log(item)
                this.lists.forEach(record => {
                    if (record.id == item.id) {
                        record.variant = "info"
                    }
                })
                localStorage.setItem(`notes_${id}`, JSON.stringify(item) );
            }
        }
    },
    created() {
        this.loadRecords()
    },
}
</script>

<style>
.button {
    width: 100px;
    height: 45px;
}

.input-group {
    width: 100%;
}
</style>