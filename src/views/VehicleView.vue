<script setup lang="ts">
import { ref, computed } from 'vue'

const progress = ref(40)
const iconPosition = computed(() => `${progress.value}%`)
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="flex flex-col p-20 gap-20">
      <p class="text-7xl text-[#EBF4F6] font-semibold">Estado de mi vehículo</p>
      <div class="relative w-full px-20">
        <progress class="progress progress-info w-full" :value="progress" max="100"></progress>
        <div class="absolute top-1/2 transform -translate-y-1/2" :style="{ left: iconPosition }">
          <v-icon name="co-car-alt" scale="2" class="text-black bg-white rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 20px; /* Ajusta esto según necesites */
}
</style>
