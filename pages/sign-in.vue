<template>
  <VFlex xs12 sm8 md4>
    <SignInCard />
  </VFlex>
</template>

<script>
import SignInCard from '@/components/SignInCard'

export default {
  middleware: 'guest',
  layout: 'centered',

  components: {
    SignInCard
  }
}
</script>
