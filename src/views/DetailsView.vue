<template>
  <div class="row q-mt-xl">
    <div class="col-6">
      <q-img
        src="https://mapit.me/wp-content/uploads/2024/05/background-notifications-3.webp"
        width="600px"
        class="moto-img"
      />
    </div>
    <div class="column">
      <div class="row justify-around">
        <q-btn
          v-for="(option, index) in options"
          :key="index"
          :label="option"
          @click="isSelected(option)"
          :class="selectedOption === option ? 'active-btn' : 'inactive-btn'"
          class="option-btn"
          flat
        />
      </div>
      <div class="q-pt-md">
        <div v-if="selectedOption === 'location'">
          <moto-map :latitud="coordinates?.latitud" :longitud="coordinates?.longitud" />
        </div>
        <div v-else-if="selectedOption === 'price'" class="details-card column justify-center">
          <span class="price-card row justify-center items-center"
            >{{ selectedMotorbike?.currentPrice }} €</span
          >
        </div>
        <div v-else-if="selectedOption === 'details'">
          <p>DETAILS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMotorbikesStore } from 'src/stores/motorbikes'
import { useRoute } from 'vue-router'
import MotoMap from 'src/components/MotoMap.vue'
import type { Motorbike } from 'src/common/types'
import { ref, computed } from 'vue'

const store = useMotorbikesStore()
const route = useRoute()

const options = ['location', 'price', 'details']

const selectedMotorbike = computed(() => store.getMotorbikeById(route.params.id as string))
const coordinates = selectedMotorbike.value?.coordenadas as Motorbike['coordenadas']

const selectedOption = ref('location')

const isSelected = (option: string) => {
  selectedOption.value = option
  if (selectedOption.value === 'price') store.calculateCurrentValue()
}
</script>

<style scoped lang="scss">
.moto-img {
  border-radius: 10px;
}
.active-btn {
  background: $brand;
  color: white;
}
.inactive-btn {
  background: none;
  color: $brand;
}
.option-btn {
  border: 1px solid $brand;
  width: 100px;
}
.details-card {
  width: 600px;
  height: 400px;
}
.price-card {
  background: $brand;
  height: 100px;
  color: white;
  font-size: 50px;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}
</style>
