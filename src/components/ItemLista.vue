<template>
    <div class="items-list">
        <CarregarAnimacoes />
        <ItemMenu v-for="item in itensLista" :key="item.id" :item="item" />
    </div>
</template>
<script>

import ItemMenu from './ItemMenu.vue'
import CarregarAnimacoes from '../components/CarregarAnimacoes.vue'
import axios from "axios";

export default {
    name: 'ItemLista',
    data() {
        return {
            itensLista: [],
            estaCarregado: false
        }
    },
    components: {
        ItemMenu,
        CarregarAnimacoes
    },
    computed: {
        selecionadaCategoria() {
            return this.$store.state.selecionadaCategoria
        }
    },
    methods: {
            getItemLista() {
            this.estaCarregado = true
            this.itensLista = []
            setTimeout(() => {
                axios.get(`http://localhost:3000/${this.selecionadaCategoria}`)
                .then((response) => {
                    this.itensLista = response.data 
                    this.estaCarregado = false 
                }, 500)
            })
        },
    },
    watch: {
        selecionadaCategoria() {
            this.getItemLista()
        }
    }
}
</script>
