<template>
    <div style="margin-top: 9px;">
        <b-card v-for="player in players" :key="player.id" border-variant="primary" :header="player.name"
            header-bg-variant="primary" header-text-variant="white" align="center">
            <div style="display: flex; justify-content: space-between;">
                <b-button pill variant="info" @click="minCount(player.id)">
                    <h1 style="margin-top: 0px; margin-bottom: 0px;">-</h1>
                </b-button>
                <h2 style="margin-top: 12px;">{{ player.count }}</h2>
                <b-button pill variant="info" @click="addCount(player.id)">
                    <h3 style="margin-top: 0px; margin-bottom: 0px;">+</h3>
                </b-button>
            </div>
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
                <b-form-input style="text-align: center; width: 75px;" type="number" v-model="player.newCount"></b-form-input>
            </div>
            <div>
                <b-button @click="changeCount(player.id)" variant="outline-success">Добавить</b-button>
                <b-button @click="remove(player.id)" variant="danger">Удалить</b-button>
            </div>
        </b-card>
        <div style="display: flex; flex-direction: column; align-items:center; margin-top: 5px;">
            <b-form-input @keyup.enter="add" v-model="newName" class="input-group"
                style="border: 2px solid rgb(130, 130, 218); height: 40px;"></b-form-input>
            <b-input-group-append class="input-group" style=" display: flex; justify-content: center;">
                <b-button @click="add" variant="outline-success">Добавить</b-button>
                <b-button @click="deleteAll" variant="danger">Очистить</b-button>
            </b-input-group-append>
        </div>
    </div>
</template>

<script>
export default {
    name: "GamesCounter",

    data() {
        return {
            players: [
                { id: 1, name: 'Vadim', count: 0, newCount: 0 }
            ],
            newName: '',
            emptyText: true,
        }
    },
    methods: {
        remove(id) {
            this.players = this.players.filter((el) => el.id !== id)
            localStorage.removeItem(`players_${id}`)
        },
        addCount(id) {
            this.players.forEach((el) => {
                if (el.id == id) {
                    el.count++;
                    for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (key.endsWith(String(el.id))) {
                            let value = localStorage.getItem(key)
                            let valueParse = JSON.parse(value)
                            valueParse.count++
                            localStorage.setItem(key, JSON.stringify(valueParse))
                        }
                    }
                }
            })
        },
        minCount(id) {
            this.players.forEach((el) => {
                if (el.id == id) {
                    el.count--
                }
                for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (key.endsWith(String(el.id))) {
                            let value = localStorage.getItem(key)
                            let valueParse = JSON.parse(value)
                            valueParse.count--
                            localStorage.setItem(key, JSON.stringify(valueParse))
                        }
                    }
            })
        },
        changeCount(id) {
            this.players.forEach((el) => {
                if (el.id == id) {
                    el.count += Number(el.newCount)
                }
                for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        if (key.endsWith(String(el.id))) {
                            let value = localStorage.getItem(key)
                            let valueParse = JSON.parse(value)
                            valueParse.count += Number(el.newCount)
                            localStorage.setItem(key, JSON.stringify(valueParse))
                        }
                    }
            })
        },
        add() {
            if (this.newName !== "") {
                this.emptyText = false
                const item = { id: new Date().getTime(), name: this.newName, count: 0, newCount: 0 };
                this.players.push(item)
                this.createRecords(item)
                this.newName = ""
                
            }

        },
        createRecords(item) {
            const records = this.players
            localStorage.setItem(`players_${item.id}`, JSON.stringify(item))
            console.log(records)
        },
        deleteAll() {
            this.players = []
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith('players')) {
                    localStorage.removeItem(key, JSON.stringify(this.players))
                }

            }
            this.emptyMsg = true
        },
        loadRecords() {
            const records = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith('players')) {
                    records.push(JSON.parse(localStorage.getItem(key)))
                }
            }
            
            if (records) {
                this.players = records
                this.emptyText = false
                this.players.sort((a, b) => Number(a.id) - Number(b.id));
                console.log(this.players)
            }
        },
    },
    created() {
        this.loadRecords()
        console.log(this.players)
    },
    updated() {
        console.log(this.players)
    }
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