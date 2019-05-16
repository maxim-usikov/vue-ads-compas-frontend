<template>
  <VCard color="gray" hover>
    <VLayout row>
      <VFlex>
        <VCardTitle primary-title>
          <div>
            <div class="headline">{{ title }}</div>
          </div>
        </VCardTitle>
      </VFlex>
    </VLayout>

    <VDivider light />

    <VCardActions class="pa-3">
      <VChip v-for="author in authors" :key="author.id" class="mr-3">{{
        author.name
      }}</VChip>
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  name: 'BookCard',

  props: {
    title: {
      type: String,
      required: true
    },
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>
