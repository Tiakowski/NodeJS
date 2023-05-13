<template>
    <div :class="{'cliente': !isCraque,'clienteCraque': isCraque}">
        <h2> Nome: {{cliente.nome}}</h2>
        <hr>
        <p>{{cliente.descricao}}</p>
        <hr>
        <p>Número: <strong>{{cliente.numero}}</strong></p>
        <p>Time: {{cliente.time}}</p>
        <p v-if="cliente.showAge == true">Idade: {{cliente.idade}}</p>
        <p v-else> Idade secreta!</p>
        <p>Email: {{idEspecial}}</p>
        <button @click="mudarStatus($event)">Mudar status!</button>
        <button @click="emitirEventoDelete">Deletar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCraque: false
        }
    },
    props: {
        cliente: Object
    },
    methods: {
        mudarStatus: function($event){
            console.log($event)
        },
        emitirEventoDelete: function(){
            console.log("Emitindo do filho");
            this.$emit("meDelete",{titulos: "Libertadores", component: this, id: this.cliente.numero});
        }
    },
    computed: {
    idEspecial: function(){
      return (this.cliente.nome.trim() + this.cliente.numero + "@"+this.cliente.time+".com").replace(" ","");
    }
  }
    
}
</script>

<style scoped>
    .cliente{
        background-color: black;
        color: aliceblue;
    }

    .clienteCraque{
        background-color: black;
        color: #daa520;
    }

    
</style>