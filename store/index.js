export const state = () => ({})

export const getters = {
  isAuthenticated(store) {
    return Boolean(store.auth.loggedIn)
  },

  me(store) {
    return store.auth.user
  }
}
