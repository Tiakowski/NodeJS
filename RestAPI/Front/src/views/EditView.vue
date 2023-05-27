<template>
    <div>
        <h1>Editar usuário!</h1>
        <hr>
        <div class="columns is-centered">
            <div class="column is-one-quarter">
                <div v-if="error != undefined">
                    <div class="notification is-danger is-light">
                        {{ error }}
                    </div>
                </div>
                <p><strong>Nome</strong></p>
                <input type="text" placeholder="Nome do usuário" class="input" v-model="name">
                <p><strong>Email</strong></p>
                <input type="email" placeholder="email@dominio.com" class="input" v-model="email">
                <hr>
                <button class="button is-success" @click="update">Editar</button>

            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created(){
        var req = {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token')
            }}

        axios.get("http://localhost:8686/user/"+ this.$route.params.id, req).then(res => {
            this.name = res.data[0].name;
            this.email = res.data[0].email;
            this.id = res.data[0].id;
            console.log(this.id, this.name, this.email);
        }).catch(err => {
            this.$router.push("/admin/users")
            console.log(err)
        })

    },
    data(){
        return {
            name: '',
            email:'',
            id: -1,
            error: undefined,
        }
        
    },
    methods:{
        update(){
            var req = {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token')
            }}

            axios.put("http://localhost:8686/user",{
                name: this.name,
                email: this.email,
                id: this.id
            }, req).then( res => {
                console.log(res);
                this.$router.push("/admin/users")
            }).catch(err => {
                this.error = err.response.data
                console.log(err)
            })

        }
    }
    
    
}
</script>

<style scoped>

</style>