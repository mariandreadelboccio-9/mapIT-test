<template>
  <q-dialog v-model="isModalOpen" persistent>
    <q-card class="q-px-md q-py-sm">
      <q-card-section class="row items-center">
        <q-avatar icon="check_circle" color="primary" text-color="white" class="q-mr-lg" />
        <div class="text-h6">¡Gracias por elegirnos!</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo lo antes posible.
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Confirm" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMotorbikesStore } from 'src/stores/motorbikes'

const store = useMotorbikesStore()

const { isModalOpen } = storeToRefs(store)
</script>
