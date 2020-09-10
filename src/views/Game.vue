<template>
  <b-container>
    <div>
      <b-card>
        <b-button @click="startTrivia" variant="primary">Play</b-button>
        <b-card-text>
          Click the button above to start the trivia game.
        </b-card-text>
      </b-card>
      <TablaGanadores />
    </div>
  </b-container>
</template>

<script>
import TablaGanadores from '@/components/TablaGanadores'
export default {
  name: 'Game',
  components: { TablaGanadores: TablaGanadores },
  data () {
    return {
      resultados: [],
      error: '',
      show: true
    }
  },
  methods: {
    startTrivia (evt) {
      evt.preventDefault()
      this.$router.replace({ name: 'Trivia' })
    }
  }
}
</script>

<style scoped>

</style>
