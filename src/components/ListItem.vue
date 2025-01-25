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
            <q-btn label="Details" />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useMotorbikesStore } from 'src/stores/motorbikes'
import { storeToRefs } from 'pinia'

const store = useMotorbikesStore()

const { motorbikes } = storeToRefs(store)
</script>
