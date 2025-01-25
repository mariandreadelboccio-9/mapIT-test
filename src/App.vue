<template>
  <div :class="$route.name === 'home' ? 'home-background' : ''">
    <div v-if="loading" class="text-center">
      <q-spinner color="primary" size="3em" />
    </div>
    <q-layout v-else class="q-pt-lg text-center">
      <div class="row q-mb-xl">
        <div class="col-2 text-left q-pl-md">
          <!-- Back button -->
          <q-btn icon="arrow_back" flat @click="goBack" v-if="hasBackBtn" />
        </div>
        <div class="col-8">
          <!-- Logo -->
          <q-img src="https://mapit.me/wp-content/uploads/2024/05/mapit-app.svg" width="80px" />
        </div>
      </div>
      <router-view />
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useMotorbikesStore } from 'src/stores/motorbikes'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

const store = useMotorbikesStore()
const router = useRouter()
const route = useRoute()

const { loading } = storeToRefs(store)

const goBack = () => {
  void router.push({ name: 'home' })
}

const hasBackBtn = computed(() => route.name === 'details')

onMounted(async () => {
  await store.getMotorbikes()
  await store.enrichMotorbikesWithCities()
})
</script>
