<template>
    <div>
        <h1>Login</h1>
        <hr>
        <div class="columns is-centered">
            <div class="column is-one-quarter">
                <div v-if="error != undefined">
                    <div class="notification is-danger is-light">
                        {{ error }}
                    </div>
                </div>
                <p><strong>Email</strong></p>
                <input type="email" placeholder="email@dominio.com" class="input" v-model="email">
                <p><strong>Senha</strong></p>
                <input type="password" placeholder="********" class="input" v-model="password">
                <hr>
                <button class="button is-success" @click="login">Entrar</button>

            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            password: '',
            email:'',
            error: undefined,
        }
        
    },
    methods:{
            login(){
                axios.post("http://localhost:8686/login",{
                    password: this.password,
                    email: this.email
                }).then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.token);
                    this.$router.push('/')
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