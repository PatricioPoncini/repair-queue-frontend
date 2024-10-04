<script setup lang="ts">
import { ref, computed } from 'vue'

const progress = ref(40)
const iconPosition = computed(() => `${progress.value}%`)
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="flex flex-col p-20 gap-20">
      <div class="flex flex-col">
        <div class="grid grid-cols-3">
          <div class="col-span-2 flex flex-col gap-10">
            <p class="text-7xl text-[#EBF4F6] font-semibold">Estado de mi vehículo</p>
            <p class="text-3xl text-[#EBF4F6]">
              Ingrese el número del turno proporcionado por la persona que le agendó el turno y
              consulte el estado de su vehículo
            </p>
          </div>
          <div class="flex"></div>
        </div>
      </div>
      <!-- PROGRESSS BAR WITH VEHICLE -->
      <!--<div class="relative w-full px-20">
        <progress class="progress progress-info w-full" :value="progress" max="100"></progress>
        <div class="absolute top-1/2 transform -translate-y-1/2" :style="{ left: iconPosition }">
          <v-icon name="co-car-alt" scale="2" class="text-black bg-white rounded-full" />
        </div>
      </div>-->
      <div class="flex flex-row gap-10">
        <input
          type="number"
          placeholder="Ingrese número del turno"
          class="input input-bordered w-full max-w-lg h-20"
        />
        <button class="btn btn-outline btn-primary h-20 w-40 text-xl">Buscar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 20px;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number'] {
  font-size: 30px;
}
</style>
