<script setup>
import { ref } from 'vue'

defineProps({
  value: { type: Number, required: true },
  title: { type: String, default: '' }
})

const popperContainer = ref(null)

const handleMenuClose = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
}

defineEmits(['update'])
</script>

<template>
  <VMenu :close-on-content-click="false" placement="top" :delay="{ show: 0, hide: 200 }" :dispose-timeout="0"
    :popper-triggers="['hover']" @hide="handleMenuClose" group="my-popper-group">
    <span class="badge text-dark btn btn-outline-secondary p-2 px-3" :title="title">
      {{ value }}
    </span>

    <template #popper>
      <div ref="popperContainer" class="p-2 d-flex align-items-center gap-2 bg-light popperContainer">
        <button @click="$emit('update', -1)" class="btn btn-sm btn-outline-danger px-2">
          <i class="bi bi-dash">-</i>
        </button>

        <span class="fw-bold px-1" style="min-width: 20px; text-align: center;">
          {{ value }}
        </span>

        <button @click="$emit('update', 1)" class="btn btn-sm btn-outline-success px-2">
          <i class="bi bi-plus">+</i>
        </button>
      </div>
    </template>
  </VMenu>
</template>

<style scoped>
:deep(.v-popper__inner) {
  border: 1px solid #dee2e6 !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

.v-popper__popper {
  pointer-events: auto;
}

.popperContainer {
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
}
</style>