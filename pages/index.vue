<template>
  <section>
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
  </section>
</template>

<script>
import BookCard from '@/components/BookCard'

export default {
  layout: 'app',

  components: {
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

  watchQuery: ['page'],

  methods: {
    handlePage(page) {
      this.$router.push({ query: { page } })
    }
  }
}
</script>
