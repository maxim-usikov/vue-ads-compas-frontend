<template>
  <VList v-if="isAuthenticated" class="pa-1 text-truncate">
    <VListTile avatar>
      <VListTileAvatar
        color="blue-grey darken-4"
        class="text-uppercase white--text"
      >
        {{ me.email[0].toUpperCase() }}
      </VListTileAvatar>

      <VListTileContent>
        <VListTileTitle>{{ me.email }}</VListTileTitle>
      </VListTileContent>

      <VSpacer />

      <VListTileAction>
        <VMenu bottom left>
          <VBtn slot="activator" icon> <VIcon>more_vert</VIcon> </VBtn>
          <VList>
            <VListTile @click="handleSignOut">
              <VListTileTitle>Sign out</VListTileTitle>
            </VListTile>
          </VList>
        </VMenu>
      </VListTileAction>
    </VListTile>

    <VDivider />
  </VList>

  <VList v-else class="pt-0" dense>
    <VListTile @click="handleSignIn">
      <VListTileAction>
        <VIcon>person</VIcon>
      </VListTileAction>

      <VListTileContent>
        <VListTileTitle>Sign in</VListTileTitle>
      </VListTileContent>
    </VListTile>

    <VDivider />
  </VList>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavUser',

  computed: {
    ...mapGetters(['isAuthenticated', 'me'])
  },

  methods: {
    handleSignIn() {
      this.$router.push({ name: 'sign-in' })
    },

    handleSignOut() {
      this.$auth.logout()
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
