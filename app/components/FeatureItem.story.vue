<script setup lang="ts">
import { faker } from '@faker-js/faker'
import FeatureItem from './FeatureItem.vue'

const demoFeature = {
  icon: 'pi-database',
  title: faker.word.adjective(),
  description: faker.lorem.lines(1),
}
</script>

<template>
  <Story title="FeatureItem">
    <Variant title="Default">
      <FeatureItem :feature="demoFeature" />
    </Variant>
  </Story>
</template>
