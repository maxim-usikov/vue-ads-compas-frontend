<template>
  <VFlex xs12 sm8 md4>
    <SignInCard />
  </VFlex>
</template>

<script>
import SignInCard from '@/components/Auth/SignInCard'

export default {
  middleware: 'guest',
  layout: 'centered',

  components: {
    SignInCard
  }
}
</script>
