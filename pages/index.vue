<template>
  <section>
    <BookAuthorFilterForm class="mb-3" @filter="handleFilter" />

    <template v-if="books.data.length > 0">
      <BookCard
        v-for="book in books.data"
        :key="book.id"
        :title="book.title"
        :authors="book.authors"
        class="mb-3"
      />

      <VPagination
        :value="currentPage"
        :length="totalPages"
        :total-visible="7"
        @input="handlePage"
      />
    </template>
    <h1 v-else>No books</h1>
  </section>
</template>

<script>
import BookAuthorFilterForm from '@/components/BookAuthorFilterForm'
import BookCard from '@/components/BookCard'

export default {
  layout: 'app',

  components: {
    BookAuthorFilterForm,
    BookCard
  },

  data() {
    return {
      books: []
    }
  },

  computed: {
    currentPage() {
      return this.books.meta.current_page
    },

    totalPages() {
      return this.books.meta.last_page
    }
  },

  async asyncData(ctx) {
    const books = await ctx.$axios.$get('/api/books', {
      params: { ...ctx.query }
    })

    return { books }
  },

  watchQuery: ['page', 'title', 'authorName'],

  methods: {
    handlePage(page) {
      this.$router.push({ query: { ...this.$route.query, page } })
    },

    handleFilter({ title, authorName }) {
      this.$router.push({ query: { title, authorName } })
    }
  }
}
</script>
