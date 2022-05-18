<template>
    <div class="container">
        <CategoryMenu />
        <ItemLista />
    </div>
</template>
<script>
import CategoryMenu from '../components/CategoriaMenu.vue'
import ItemLista from '../components/ItemLista.vue'

export default {
    name: 'home',
    components: {
        CategoryMenu,
        ItemLista
    }
}
</script>