<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  latitud: Number,
  longitud: Number,
})

onMounted(() => {
  const map = L.map('map').setView([props.latitud as number, props.longitud as number], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

  L.marker([props.latitud as number, props.longitud as number]).addTo(map)
})
</script>

<style scoped>
#map {
  height: 380px;
  width: 600px;
}

@media (max-width: 599px) {
  #map {
    width: 90vw;
  }
}
</style>
