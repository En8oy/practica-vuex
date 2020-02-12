<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{pokemon.name}}</p>
    <p>{{skill.run}}</p>
    <p>{{status}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed : {
    ...mapState('empresa', [
      'pokemon'
    ]),
    ...mapGetters([
      'skill'
    ]),
    ...mapGetters('empresa', [
      'status'
    ])
  },
  methods : {
    ...mapActions([
      'nombrarPokemon'
    ]),
    ...mapActions('empresa', [
      'cambiarEstado'
    ])
  },
  mounted(){
    //Se pueden enviar diferentes tipos de datos, solamente hacer el cambio correcto en las mutaciones
    this.cambiarEstado(true);
  }

}
</script>
