<template>
  <div class="q-pa-md text-h5">
    <div class="row">
      <label class="text-bold text-h5 q-mr-lg">Model</label>
      <span>{{ props.motorbike?.modelo }}</span>
    </div>
    <div class="row">
      <label class="text-bold text-h5 q-mr-lg">Buy Date</label>
      <span>{{ props.motorbike?.fechaCompra }}</span>
    </div>
    <div class="q-mt-lg text-left">
      <label class="text-bold text-h5">Main features:</label>
      <p>
        {{ props.motorbike?.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Motorbike } from 'src/common/types'
import type { PropType } from 'vue'

const props = defineProps({
  motorbike: {
    type: Object as PropType<Motorbike | undefined>,
    required: true,
  },
})
</script>
