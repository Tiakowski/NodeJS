<template>
  <div id="app">
      <h3>Cadastro: </h3>
      <small id="nomeErro" v-show="deuErro">Cadastro inválido</small><br>
      <input type="text" placeholder="Nome" v-model="nomeField"><br>
      <input type="number" placeholder="Número" v-model="numeroField"><br>
      <input type="number" placeholder="Idade" v-model="idadeField"><br>
      <input type="text" placeholder="Descrição" v-model="descricaoField"><br>
      <button @click="cadastrarAtleta">Cadastrar</button>

      <hr>
        <div v-for="cliente in orderAtleta" :key="cliente.numero">
          <componente-cliente :cliente="cliente" @meDelete="deletarAtleta($event)"/>
        </div>

      
  </div>
</template>

<script>
import _ from 'lodash';
import ComponenteCliente from './components/ComponenteCliente.vue'
//import ComponenteProduto from './components/ComponenteProduto.vue'

export default {
  name: 'App',
  data(){
      return {
        deuErro: false,
        nomeField: "",
        numeroField: "Numero",
        idadeField: "Idade",
        descricaoField: "",
        clientes: [
          {
              nome: "Gabriel Barbosa",
              numero: 10,
              idade: 26,
              descricao: "É um futebolista brasileiro que atua como atacante",
              time: "Flamengo",
              showAge: true,
          },
          {
              nome: "De Arrascaeta",
              numero: 14,
              idade: 28,
              descricao: "É um futebolista uruguaio que atua como meio-campista.",
              time: "Flamengo",
              showAge: true,

          },
          {
              nome: "Thiago Maia",
              numero: 8,
              idade: 26,
              descricao: "É um futebolista brasileiro que atua como volante",
              time: "Flamengo",
              showAge: true,

          },
        ]
      }
  },
  components: {
    ComponenteCliente,
    //ComponenteProduto
  },
  methods: {
    cadastrarAtleta: function(){
      if( this.nomeField == "" || this.nomeField.lenght < 3){
        console.log("Erro!")
        this.deuErro = true;

      } else {
        this.clientes.push({
        nome: this.nomeField,
        numero: this.numeroField,
        idade: this.idadeField,
        descricao: this.descricaoField,
        time: "Flamengo",
        showAge: true
      });
      this.deuErro = false;
      }
    },
    deletarAtleta: function($event) {
      console.log("Recebendo evento")
      var id = $event.id;
      var novoArray = this.clientes.filter(cliente => cliente.numero != id);
      this.clientes = novoArray;
    }
  },
  computed: {
    orderAtleta: function(){
      return _.orderBy(this.clientes,["nome"],["asc"])
    }
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

#nomeErro{
  color: red;
}
</style>
