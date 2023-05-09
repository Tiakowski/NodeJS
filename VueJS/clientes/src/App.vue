<template>
  <div id="app">
      <componente-cliente/>
      <componente-produto/>
  </div>
</template>

<script>
import ComponenteCliente from './components/ComponenteCliente.vue'
import ComponenteProduto from './components/ComponenteProduto.vue'

export default {
  name: 'App',
  components: {
    ComponenteCliente,
    ComponenteProduto
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
