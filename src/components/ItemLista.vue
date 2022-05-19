<template>
    <div class="items-list">
        <CarregarAnimacoes v-if="estaCarregado"/>
        <ItemMenu v-for="item in itensLista" :key="item.id" :item="item" />
    </div>
</template>
<script>

import ItemMenu from './ItemMenu.vue'
import CarregarAnimacoes from '../components/CarregarAnimacoes.vue'
import axios from "axios";
// import BurguerModel from '../models/BurguerModel.js'
export default {
    name: 'ItemLista',
    data() {
        return {
            itensLista: [],
            estaCarregado: false
        }
    },
//     async created() {
//     this.burgues = await BurguerModel.get();
//   },
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
            this.estaCarregado = true;
            this.itensLista = [];
            setTimeout(() => {
                axios
                .get(`http://localhost:3000/${this.selecionadaCategoria}`)
                .then((response) => {
                    this.itensLista = response.data;
                    this.estaCarregado = false;
                    console.log(response);
                });
            }, 500);
        }
    },
    watch: {
        selecionadaCategoria() {
            this.getItemLista()
        }
    }
}
</script>
