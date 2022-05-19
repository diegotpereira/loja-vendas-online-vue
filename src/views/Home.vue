<template>
    <div class="container">
        <CategoryMenu />
        <ItemLista />
        <PagamentoCarrinho />
    </div>
</template>
<script>
import CategoryMenu from '../components/CategoriaMenu.vue'
import ItemLista from '../components/ItemLista.vue'
import PagamentoCarrinho from '../components/PagamentoCarrinho.vue'

export default {
    name: 'home',
    components: {
        CategoryMenu,
        ItemLista,
        PagamentoCarrinho
    }
}
</script>

<style scoped lang="less">
.home {
  display: flex;

  @media tablets{
    flex-direction: column;
  }
}
</style>