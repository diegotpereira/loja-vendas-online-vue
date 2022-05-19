<template>
    <div class="cart">
        <h2 class="cart--title">Seu Pedido</h2>
        <CarrinhoItem v-for="item in carrinhoLista" :key="item.id" :item="item"  />
    </div>
</template>
<script>
import CarrinhoItem from './CarrinhoItem.vue'

export default {
    name: 'PagamentoCarrinho',
    data() {
        return {
            
        }
    },
    components: {
        CarrinhoItem
    },
    computed: {
        carrinhoLista() {
            return this.$store.state.carrinhoLista
        }
    }
}
</script>