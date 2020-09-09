<template>
  <b-container>
    <div>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group
          class="mb-0"
          label="Write a new post"
          label-for="textarea-formatter"
          description="We will convert your text to lowercase instantly"
        >
          <b-form-textarea
            id="textarea-formatter"
            v-model="post"
            placeholder="Write your post"
            :formatter="formatter"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Post</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import Coment from '@/components/Coment'
import { db } from '@/firebase'
export default {
  name: 'Wall',
  // eslint-disable-next-line vue/no-unused-components
  components: { Coment: Coment },
  data () {
    return {
      post: '',
      user: '',
      text2: '',
      error: '',
      show: true
    }
  },
  methods: {
    formatter (value) {
      return value.toLowerCase()
    },
    onSubmit (evt) {
      evt.preventDefault()
      db.collection('post').add({
        post: this.post
      })
      // eslint-disable-next-line no-unused-expressions,no-sequences
      this.text1 = ''
    }
  }
}
</script>

<style scoped>

</style>
