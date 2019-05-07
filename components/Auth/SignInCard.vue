<template>
  <VCard class="elevation-12">
    <VToolbar dark color="primary">
      <VToolbarTitle>Sign in</VToolbarTitle>
    </VToolbar>

    <VCardText>
      <VAlert :value="error" type="error" class="mb-4">
        {{ error.message }}
      </VAlert>

      <VForm v-model="valid">
        <VTextField
          v-model="username"
          :rules="rules.username"
          prepend-icon="person"
          name="username"
          label="Email"
          type="text"
          required
          @input="error = false"
        />

        <VTextField
          v-model="password"
          :rules="rules.password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          required
          @input="error = false"
        />
      </VForm>
    </VCardText>

    <VCardActions>
      <VSpacer />

      <VBtn
        color="primary"
        :disabled="!valid || loading"
        :loading="loading"
        @click="handleSignIn"
        >Sign in</VBtn
      >
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  name: 'SignInCard',

  data() {
    return {
      loading: false,
      valid: false,
      error: false,
      username: '',
      password: '',
      rules: {
        username: [v => !!v || 'E-mail is required'],
        password: [v => !!v || 'Password is required']
      }
    }
  },

  methods: {
    async handleSignIn() {
      const { username, password } = this

      try {
        this.loading = true
        this.error = false

        await this.$auth.loginWith('GrantPassword', {
          data: {
            username,
            password
          }
        })
      } catch (err) {
        if (err.response && err.response.data) {
          this.error = err.response.data
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
