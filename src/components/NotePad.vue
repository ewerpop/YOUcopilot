<template>
    <div>
        <div class="notepad">
            <h2>Заметки</h2>
            <div class="text" v-for="message in messages" :key="message.id">
                {{ message.text }}
            </div>
            <div v-show="emptyMsg" class="empty">
                Напишите здесь что-нибудь, а я запомню
            </div>
        </div>
        <b-input-group class="mt-3">
            <b-form-input @keyup.enter="sendMessage" v-model="newMessage" style="border: 2px solid rgb(130, 130, 218);"></b-form-input>
            <b-input-group-append>
                <b-button @click="sendMessage" variant="outline-success">Отправить</b-button>
                <b-button @click="deleteMessage" variant="danger">Очистить</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
    
</template>

<script>
export default {
    name: 'NotePad',
    data() {
        return {
            messages: [],
            newMessage: "",
            emptyMsg: true,
            
        }
    },
    computed() {
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage() {
            if (this.username == "") {
                this.username = localStorage.getItem('anonymous')
            }
            if (this.newMessage !== "") {
                this.emptyMsg = false
                console.log(this.newMessage)
                console.log(this.messages)
                this.messages.push({ id: new Date().getTime(), text: this.newMessage, user: this.username })
                this.saveChatRecords()
                this.newMessage = ""
            } else {
                alert('Input your message')
            }

        },
        saveChatRecords() {
            const records = this.messages
            localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
        },
        deleteMessage() {
            this.messages = []
            localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.messages))
            this.emptyMsg = true
        },
        loadChatRecords() {
            const records = JSON.parse(localStorage.getItem(`messages_${this.username}`))
            if (records) {
                this.messages = records,
                    this.emptyMsg = false
            }
        },
    },
    created() {
        this.loadChatRecords()
    },
}
</script>

<style>
.notepad {
    margin-top: 10px;
    width: 500px;
    height: 700px;
    border: 4px solid black;
    background-color: rgb(175, 175, 241);
    border-radius: 9px
}
#input {
    border: 2.5px solid rgb(130, 130, 218)
}
.button {
    border: 2.5px solid rgb(130, 130, 218)
}
</style>
