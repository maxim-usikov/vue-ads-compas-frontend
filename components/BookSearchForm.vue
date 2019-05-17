<template>
  <VForm ref="form" v-model="valid" @submit.prevent="handleSearch">
    <VTextField
      v-model="q"
      label="Book title or author name"
      :rules="qRules"
      required
    />

    <!-- this preformated by eslint/prettier ... -->
    <VBtn color="primary" :disabled="!valid || loading" @click="handleSearch"
      >Search</VBtn
    >
  </VForm>
</template>

<script>
export default {
  name: 'BookSearchForm',

  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      valid: false,
      q: this.$route.query.q || '',
      qRules: [
        v => !!v || 'Required',
        v => v.length > 2 || 'Must be greater then 2 characters'
      ]
    }
  },

  methods: {
    handleSearch() {
      const { q } = this

      this.$emit('search', { q })
    }
  }
}
</script>
