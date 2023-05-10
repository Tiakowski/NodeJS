<template>
    <div :class="{'cliente': !cliente.isCraque,'clienteCraque': cliente.isCraque}">
        <H2 id="h2"> Nome: {{cliente.nome}}</H2>
        <hr>
        <p>{{cliente.descricao}}</p>
        <hr>
        <p>Número: <strong>{{cliente.numero}}</strong></p>
        <p>Time: {{cliente.time}}</p>
        <p v-if="cliente.showAge == true">Idade: {{cliente.idade}}</p>
        <p v-else> Idade secreta!</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        cliente: Object
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