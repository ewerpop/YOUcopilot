<template>
    <main>
        <h3>
            Teams
        </h3>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-for="(el) in teamData" :key="el.id">
                <b-list-group>
                    <b-list-group-item style="border: 2.5px solid black;"><b-avatar rounded="left" style="width: 20px; height: 20px;"></b-avatar>
                        <b>{{ el.id }}. {{ el.abbreviation }} {{ el.city }}</b><img src="../assets/wastebasket-emoji.png"
                            alt="delete" style="width: 18px; height: 18px;"
                            @click="removeTeam(el.id)" /></b-list-group-item>
                </b-list-group>

            </div>
        </div>
    </main>
</template>



<script>
export default {
    name: 'ApiTest',
    data() {
        return {
            teamData: [],
            isLoading: true
        }
    },
    mounted() {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5afe8e61aemshe6e21d2d474b616p17ded9jsnd3ad5835c774',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.teamData = res.data
                this.isLoading = false
            })

    },
    methods: {
        removeTeam(id) {
            this.teamData = this.teamData.filter((el) => el.id !== id)
        }
    }
}
</script>