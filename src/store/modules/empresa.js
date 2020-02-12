export default { 
    namespaced : true,
    state : {
        pokemon : {
            name : 'Bulbasor',
            skill : {
                run : 'Chorrillo'
            },
            status : false
        }
    },
    getters : {
        status : state => {
            return state.pokemon.status
        }
    }, 
    mutations : {
        setStatus(state, payload){
            state.pokemon.status = payload
        }
    },
    actions : {
        cambiarEstado({state, rootState, rootGetters, commit, dispatch}, payload){
            commit('setStatus', payload);
            //Puedes acceder por medio de root hacia las mutaciones y a las acciones
            //commit('setSkill', payload, {root: true});
            //dispatch('setSkill', payload, {root : true})
        }

    }
}