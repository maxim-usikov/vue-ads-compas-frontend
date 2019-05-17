<template>
  <VForm ref="form" v-model="valid">
    <VTextField v-model="title" label="Book title" required />

    <VTextField v-model="authorName" label="Author name" required />

    <VBtn color="primary" :disabled="!valid" @click="handleFilter">Filter</VBtn>
    <VBtn color="secondary" @click="handleReset">Reset</VBtn>
  </VForm>
</template>

<script>
export default {
  name: 'BookAuthorFilterForm',

  data() {
    return {
      valid: false,
      title: this.$route.query.title || '',
      authorName: this.$route.query.authorName || ''
    }
  },

  methods: {
    handleFilter() {
      const { title, authorName } = this

      this.$emit('filter', { title, authorName })
    },

    handleReset() {
      const title = undefined
      const authorName = undefined

      this.$refs.form.reset()
      this.$emit('filter', { title, authorName })
    }
  }
}
</script>
