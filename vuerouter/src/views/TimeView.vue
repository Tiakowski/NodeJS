<template>
    <div>
        <input type="text" name="email" id="email" placeholder="email@dominio.com"><br>
        <input type="text" name="nome" id="nome" placeholder="Nome"><br>
        <button>Teste</button>
        <h4>{{parametroDaRota}}</h4>
        <router-view/>
    </div>
</template>

<script>
export default {
    created(){
        //this.parametroDaRota = this.$route.params.time;
    },
    data(){
        return {
            parametroDaRota: "Nada"
        }
    }
}
</script>