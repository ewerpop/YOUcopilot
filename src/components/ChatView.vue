<template>
    <div v-if="username">
        <div class="chat">
            <h2>Чат</h2>
            <div class="text" v-for="message in messages" :key="message.id">
                <b>{{ message.user }}: </b>{{ message.text }}
            </div>
            <div v-show="emptyMsg" class="empty">
                No message
            </div>
        </div>
        <b-input-group class="mt-3">
            <b-form-input @keyup.enter="sendMessage" v-model="newMessage" style="border: 2px solid rgb(130, 130, 218); height: 40px;"></b-form-input>
            <b-input-group-append>
                <b-button @click="sendMessage" variant="outline-success">Отправить</b-button>
                <b-button @click="deleteMessage" variant="danger">Очистить</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
    <div v-else>
        <h1>
            Error. Please register on <router-link to="/">home</router-link>
        </h1>
    </div>
</template>

<script>
export default  {
    name: 'ChatView',
    data() {
        return {
            messages: [],
            newMessage: "",
            emptyMsg: true,
            username: localStorage.getItem('username'),
        }
    },
    computed() {
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage() {
            if(this.newMessage !== "") {
                this.emptyMsg = false
                console.log(this.newMessage)
                console.log(this.messages)
                this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
                this.saveChatRecords()
                this.newMessage = ""
            }else{
                alert('Input your message')
            }

        },
        saveChatRecords(){
            const records = this.messages
            localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
        },
        deleteMessage(){
            this.messages = []
            localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.messages))
            this.emptyMsg = true
        },
        loadChatRecords(){
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
