<template>
  <div v-if="loading" class="text-center">
    <q-spinner color="primary" size="3em" />
  </div>
  <q-layout v-else class="q-mt-lg text-center">
    <!-- Logo -->
    <div class="q-mb-xl">
      <q-img src="src/assets/logo-vertical.svg" width="80px" />
    </div>
    <router-view />
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMotorbikesStore } from 'src/stores/motorbikes'
import { storeToRefs } from 'pinia'

const store = useMotorbikesStore()

const { loading } = storeToRefs(store)

onMounted(async () => {
  await store.getMotorbikes()
  await store.enrichMotorbikesWithCities()
})
</script>
