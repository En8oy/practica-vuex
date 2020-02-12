<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{pokemon.name}}</p>
    <p>{{skill.run}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed : {
    ...mapState([
      'pokemon'
    ]),
    ...mapGetters([
      'skill'
    ])
  },
  methods : {
    ...mapActions([
      'nombrarPokemon'
    ])
  },
  mounted(){
    //Se pueden enviar diferentes tipos de datos, solamente hacer el cambio correcto en las mutaciones
    this.nombrarPokemon({ name : 'charmander', skill : 'fire'});
  }

}
</script>
