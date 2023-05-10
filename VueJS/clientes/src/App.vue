<template>
  <div id="app">
        <div v-for="cliente in clientes" :key="cliente.numero">
          <componente-cliente :cliente="cliente"/>
        </div>

      
  </div>
</template>

<script>
import ComponenteCliente from './components/ComponenteCliente.vue'
//import ComponenteProduto from './components/ComponenteProduto.vue'

export default {
  name: 'App',
  data(){
      return {
        clientes: [
          {
              nome: "Gabriel Barbosa",
              numero: 10,
              idade: 26,
              descricao: "É um futebolista brasileiro que atua como atacante",
              time: "Flamengo",
              isCraque: true,
              showAge: true,
          },
          {
              nome: "De Arrascaeta",
              numero: 14,
              idade: 28,
              descricao: "É um futebolista uruguaio que atua como meio-campista.",
              time: "Flamengo",
              isCraque: true,
              showAge: true,

          },
          {
              nome: "Thiago Maia",
              numero: 8,
              idade: 26,
              descricao: "É um futebolista brasileiro que atua como volante",
              time: "Flamengo",
              isCraque: false,
              showAge: true,

          },
        ]
      }
  },
  components: {
    ComponenteCliente,
    //ComponenteProduto
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
