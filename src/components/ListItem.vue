<template>
  <div v-for="motorbike in motorbikes" :key="motorbike.id">
    <q-card class="list-card q-my-lg q-py-md">
      <!-- Desktop -->
      <div class="desktop-view q-hidden-sm-down">
        <div class="row justify-between text-center items-center">
          <div class="col-3">
            <q-icon name="two_wheeler" size="60px" />
          </div>
          <div class="col-2">
            <div class="column">
              <label class="text-bold">Model</label>
              <span>{{ motorbike.modelo }}</span>
            </div>
          </div>
          <div class="col-2">
            <div class="column">
              <label class="text-bold">Name</label>
              <span>{{ motorbike.nombre }}</span>
            </div>
          </div>
          <div class="col-2">
            <div class="column">
              <label class="text-bold">City</label>
              <span>{{ motorbike.city }}</span>
            </div>
          </div>
          <div class="col-3">
            <q-btn flat label="go to details" class="list-btn" @click="goToDetails(motorbike.id)" />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useMotorbikesStore } from 'src/stores/motorbikes'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const store = useMotorbikesStore()
const router = useRouter()

const { motorbikes } = storeToRefs(store)

const goToDetails = (motorbike: string) => {
  void router.push({ name: 'details', params: { id: motorbike } })
}
</script>

<style scoped lang="scss">
.list-btn {
  color: $brand;
}
</style>
