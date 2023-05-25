<template>
    <div>
        <h1>Registro de usuário!</h1>
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
                <p><strong>Senha</strong></p>
                <input type="password" placeholder="Senha" class="input" v-model="password">
                <hr>
                <button class="button is-success" @click="register">Cadastrar</button>

            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            name: '',
            password: '',
            email:'',
            error: undefined,
        }
        
    },
    methods:{
            register(){
                axios.post("http://localhost:8686/user",{
                    name: this.name,
                    password: this.password,
                    email: this.email
                }).then(res => {
                    console.log(res)
                    this.$router.push({name: 'HomeView'});
                }).catch(err => {
                    var msgErro = err.response.data.error;
                    this.error = msgErro;
                    console.log(msgErro);
                })
        }
    }
    
    
}
</script>

<style scoped>

</style>