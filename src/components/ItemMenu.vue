<template>
    <div class="item">
        <div class="container">
            <h1>item</h1>
            <div class="item--tag">Oferta</div>
            <img src="" alt="" class="item--img">
        </div>
        <div class="content">
            <h2 class="item--name">{{item.name}}</h2>
            <p class="item--description">{{item.description}}</p>
            <p class="item--price">{{ item.price }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemMenu',
    data() {
        return {
            
        }
    },
    props: {
        item: {}
    },
    computed: {
        selecionadaCategoria() {
            return this.$store.state.selecionadaCategoria
        },
        imagemPath() {
            return require(`../assets/images/${this.selecionadaCategoria}/${this.item.id}.png`)
        }
    }
}
</script>