<template>
    <div class="item">
        <div class="item--img-container">
            <img class="item--img" :src="imagePath"/>
        </div>
        <div class="content">
            <h3 class="item--name">{{ item.name }}</h3>
            <a href="" class="item--observation">Adicionar observação</a>
        </div>
        <p class="item--price">{{ item.price | currency }}</p>
    </div>
</template>
<script>
export default {
    name: 'CarrinhoItem',
    props: {
        item:{}
    },
    filters: {
        currency(value) {
            return `R$ ${value.toLocaleString("pt-br", {
                minimumFractionDigits: 2
            })}`
        }
    },
    computed: {
        selecionadaCategoria() {
            return this.$store.state.selecionadaCategoria
        },
        imagePath() {
            return require(`../assets/images/${this.selecionadaCategoria}/${this.item.id}.png`)
        }
    }
}
</script>
<style lang="less" scoped>
.item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #D3D3D3;
  &--img-container {
    border-radius: 8px;
    background: #F1EB9C;
    width: 81px;
    height: 66px;
    display: flex;
    align-items: center;
  }
  &--img {
    width: 65px;
    display: block;
    margin: auto;
  }
  &--name {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }
  &--observation {
    font-weight: 500;
    font-size: 12px;
    color: #A9A9A9;
    text-decoration: underline;
  }
  .content {
    flex-grow: 1;
    padding: 0 20px;
  }
  &--price {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #FFFF00;
  }
}
</style>