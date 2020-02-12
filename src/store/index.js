import Vue from 'vue'
import Vuex from 'vuex'
import empresa from './modules/empresa'

Vue.use(Vuex)

export default new Vuex.Store({
  //Datos globales
  state: {
    pokemon : {
      name : 'pikachu',
      skill : {
        run : 'Speed'
      },
      status : false
    }
  },
  getters : {
    //Restructurar para acceder de manera facil
    skill : state => {
      return state.pokemon.skill
    }
  },
  mutations: {
    //Hacer cambios en el state
    setPokemon(state, payload){
      state.pokemon.name = payload.name;
    },
    setSkill(state, payload){
      state.pokemon.skill.run = payload.skill;
    }
  },
  actions: {
    //Metodos globales de la tienda, Tambien se puede acceder en un componente
    nombrarPokemon({state, rootState, rootGetters, commit, dispatch}, payload){
      commit('setPokemon', payload);
      dispatch('habilidadPokemon', payload);
      // 
      dispatch('empresa/cambiarEstado', payload);
    },
    habilidadPokemon({state, rootState, rootGetters, commit, dispatch}, payload){
      commit('setSkill', payload);
    }
  },
  modules: {
    empresa,
  }
})
