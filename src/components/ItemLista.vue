<template>
    <div class="items-list">
        <CarregarAnimacoes />
        <ItemMenu />
    </div>
</template>
<script>

import ItemMenu from './ItemMenu.vue'
import CarregarAnimacoes from '../components/CarregarAnimacoes.vue'
export default {
    name: 'ItemLista',
    components: {
        ItemMenu,
        CarregarAnimacoes
    }
}
</script>