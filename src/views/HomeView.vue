<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="flex flex-col p-20 gap-20">
      <div class="flex flex-col gap-10">
        <p class="text-7xl font-semibold text-[#EBF4F6]">Repair Queue</p>
        <p class="text-3xl text-[#EBF4F6]">
          Welcome to RepairQueue, where you can easily check the status of your vehicle in our
          workshop
        </p>
      </div>
      <div class="flex justify-center items-center w-full">
        <div class="w-[1300px]">
          <CarouselComponent />
        </div>
      </div>
      <div class="flex">
        <p class="text-center text-3xl text-[#EBF4F6]">
          At RepairQueue, we combine expertise and cutting-edge technology to ensure your vehicle
          receives the best care possible. Whether it's routine maintenance or complex repairs, our
          team of specialists is dedicated to keeping your car running smoothly. Trust us to deliver
          fast, reliable, and transparent service. Your satisfaction is our priority!
        </p>
      </div>
    </div>
  </div>
</template>
