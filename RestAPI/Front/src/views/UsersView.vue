<template>
    <div class="columns is-centered">
        <div>
        <h1>Painel ADM</h1>
        <hr>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Cargo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id"> 
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{processRole(user.role)}}</td>
                        <td>
                            <router-link :to="{name: 'UserEdit', params:{id: user.id}}"> <button class="button is-warning">Editar</button></router-link>
                            <button class="button is-danger" @click="openModal(user.id)" >Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div :class="{ modal:true, 'is-active': showModal }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Tem certeza que deseja deleta o usuário?</p>
                    <button class="delete" @click="hideModal" aria-label="close"></button>
                    </header>
                    <footer class="modal-card-foot columns is-centered">
                        <button class="button is-danger" @click="deleteUser" >Deletar</button>
                        <button class="button is-success" @click="hideModal">Cancelar</button>
                    </footer>
                </div>
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
            }
        }

        axios.get("http://localhost:8686/user", req).then(res => {
            this.users = res.data;
            
        }).catch(err => {
            console.log(err)
        })
        
    },
    data(){
        return{
            users: [],
            showModal: false,
            deleteUserId: -1,
        }
    },
    methods:{
        hideModal(){
            this.showModal = false
        },
        openModal(id){
            this.deleteUserId = id
            this.showModal = true
        },
        deleteUser(){

            var req = {
            headers: {
                authorization: "Bearer " + localStorage.getItem('token')
            }
        }
            axios.delete("http://localhost:8686/user/"+this.deleteUserId, req).then( res => {
                console.log(res);
                this.showModal = false;
                axios.get("http://localhost:8686/user", req).then(res => {
                        this.users = res.data;
                    }).catch(err => {
                        console.log(err)
                    })
            }).catch(err => {
                console.log(err);
                this.showModal = false;
            })
        }
    },
    computed:{
        processRole(){
            return(value) => {
                if(value == 0){
                    return "Usuário comum"
                } else if (value == 1) {
                    return "Admin"
                }
            }
            
        }

    }
}
</script>

<style scoped>
.button{
    margin-left: 5px;
}

</style>