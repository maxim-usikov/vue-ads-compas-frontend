<template>
  <section>
    <VAlert :value="error" type="error" class="mb-4">
      {{ error.message }}
    </VAlert>

    <BookSearchForm class="mb-3" :loading="loading" @search="handleSearch" />

    <template v-if="books.data && books.data.length > 0">
      <BookCard
        v-for="book in books.data"
        :key="book.id"
        :title="book.title"
        :authors="book.authors"
        class="mb-3"
      />
    </template>
    <h1 v-else-if="noResults">No Results</h1>
  </section>
</template>

<script>
import BookSearchForm from '@/components/BookSearchForm'
import BookCard from '@/components/BookCard'

export default {
  middleware: 'auth',
  layout: 'app',

  components: {
    BookSearchForm,
    BookCard
  },

  data() {
    return {
      loading: false,
      error: false,
      noResults: false,
      books: []
    }
  },

  methods: {
    async handleSearch({ q }) {
      try {
        this.loading = true
        this.error = false
        this.noResults = false
        this.books = []

        const books = await this.$axios.$get('/api/search/books', {
          params: { q }
        })

        if (!books.data.length) {
          this.noResults = true
        }

        this.books = books
      } catch (err) {
        if (err.response && err.response.data) {
          this.error = err.response.data
        } else {
          this.error = { message: `${err.message}` }
        }
      } finally {
        this.loading = false
      }

      this.$router.push({ query: { q } })
    }
  }
}
</script>
