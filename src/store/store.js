import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        selecionadaCategoria: ''
    },
    mutations: {
        alterarCategoria(state, id) {
            state.selecionadaCategoria = id
        }
    },
    actions: {
        alterarCategoria(context, id) {
            context.commit('alterarCategoria', id)
        }
    }
})