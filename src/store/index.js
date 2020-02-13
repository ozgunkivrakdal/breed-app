import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        like: 100,
        dislike:25,
        isLiked :false,
        isDisliked:false,
    },

    mutations: {
        incrementCounterLike (state, payload) {
            if(!state.isLiked){
                state.like += payload
                state.isLiked = true
                if(state.isDisliked){
                    state.dislike -= payload;
                    state.isDisliked =false
                }
            }else{
                state.like -= payload
                state.isLiked = false

            }

        },
        incrementCounterDislike (state, payload) {
            if(!state.isDisliked){
                state.dislike += payload
                state.isDisliked = true
                if(state.isLiked){
                    state.like -= payload
                    state.isLiked = false
                }
            }else{
                state.dislike -= payload
                state.isDisliked = false

            }
        }
    },

    actions: {
        incrementActionLike ({commit}, payload) {
            commit('incrementCounterLike', payload)
        },
        incrementActionDislike ({commit}, payload) {
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