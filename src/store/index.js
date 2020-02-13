import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        like: 20,
        dislike:5
    },

    mutations: {
        incrementCounterLike (state, payload) {
            state.like += payload
        },
        incrementCounterDislike (state, payload) {
            state.dislike += payload
        }
    },

    actions: {
        inrementActionLike ({commit}, payload) {
            commit('incrementCounterLike', payload)
        },
        inrementActionDislike ({commit}, payload) {
            commit('incrementCounterDislike', payload)
        }
    },

    getters: {
        like (state) {
            return state.like
        },
        dislike (state) {
            return state.dislike
        }
    }
})