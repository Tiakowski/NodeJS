<template>
    <div>
        <input type="text" :value="time">
        <h1>Atleta:</h1>
        <h2>Nome: {{nome}}</h2>
        <h2>Numero: {{numero}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: "Gabriel",
            numero: 10,
            time: "Flamengo"
        }
    }
    
}
</script>

<style scoped>

</style>