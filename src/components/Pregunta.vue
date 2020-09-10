<template>
  <div>
    <b-card v-for="pregunta in preguntas" :key="pregunta.question"
            :title="pregunta.question">
      <b-card-text>
        <b-form-radio v-for="(respuesta, index) in pregunta.answer"
                      :key="index.respuesta"
                      :name="pregunta.question"
                      :v-model="respuesta.value"
                      :value="respuesta.value"
                      required
        >{{respuesta.text}}
        </b-form-radio>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { db } from '@/firebase'
export default {
  name: 'Pregunta',
  data () {
    return {
      preguntas: [],
      answers: [],
      selected: 'first',
      question: ''
    }
  },
  firestore () {
    return {
      preguntas: db.collection('preguntas')
    }
  }
}
</script>

<style scoped>

</style>
