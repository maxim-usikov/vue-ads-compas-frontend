<template>
  <VApp>
    <VNavigationDrawer v-model="drawer" fixed app>
      <NavUser />

      <VList class="pt-0" dense>
        <VListTile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <VListTileAction>
            <VIcon>{{ item.icon }}</VIcon>
          </VListTileAction>

          <VListTileContent>
            <VListTileTitle v-text="item.title" />
          </VListTileContent>
        </VListTile>
      </VList>
    </VNavigationDrawer>

    <VToolbar fixed app>
      <VToolbarSideIcon @click="drawer = !drawer" />

      <VToolbarTitle v-text="title" />
    </VToolbar>

    <VContent>
      <VContainer fluid>
        <Nuxt />
      </VContainer>
    </VContent>

    <VFooter app>
      <span>&copy; 2019</span>
    </VFooter>
  </VApp>
</template>

<script>
import { mapGetters } from 'vuex'
import NavUser from '@/components/NavUser'

export default {
  components: {
    NavUser
  },

  data() {
    return {
      title: 'Books Storage',
      drawer: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated']),

    items() {
      const items = [
        {
          icon: 'library_books',
          title: 'Books',
          to: '/'
        }
      ]

      if (this.isAuthenticated) {
        items.push({
          icon: 'search',
          title: 'Search',
          to: '/search'
        })
      }

      return items
    }
  }
}
</script>
