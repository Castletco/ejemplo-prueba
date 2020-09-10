<template>
  <div>
    <b-table striped hover :items="resultados" :fields="headers"></b-table>
  </div>
</template>

<script>
import { db } from '@/firebase'
export default {
  name: 'TablaGanadores',
  data () {
    return {
      resultados: [],
      headers: [{ key: 'name', label: 'Name' },
        { key: 'score', label: 'Score' },
        { key: 'percentage', label: 'Percentage' }]
    }
  },
  firestore () {
    return {
      resultados: db.collection('resultados')
    }
  }
}
</script>

<style scoped>

</style>
