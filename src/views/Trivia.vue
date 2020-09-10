<template>
  <b-container>
    <b-form @submit="respuestaQuiz">
      <h3>Choose an answer for each of the questions and submit the test once done</h3>
      <h3>Good luck!</h3>
      <Pregunta />
      <b-button type="submit" variant="secondary">Cancel</b-button>&nbsp;&nbsp;
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import Pregunta from '@/components/Pregunta'
export default {
  name: 'Trivia',
  components: { Pregunta: Pregunta },
  data () {
    return {
      preguntas: [],
      pregunta: '',
      respuesta: ''
    }
  },
  methods: {
    respuestaQuiz (evt) {
      console.log(evt)
      evt.preventDefault()
      /* db.collection('preguntas').add({
        post: this.post
      }) */
    }
  }
}
</script>
