import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        selecionadaCategoria: '',
        carrinhoLista: []
    },
    mutations: {
        alterarCategoria(state, id) {
            state.selecionadaCategoria = id
        },
        addNoCarrinho(state, el) {
            state.carrinhoLista.push(el)
        }
    },
    actions: {
        alterarCategoria(context, id) {
            context.commit('alterarCategoria', id)
        },
        addNoCarrinho(context, el) {
            context.commit('addNoCarrinho', el)
        }
    }
})