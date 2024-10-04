<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="flex flex-col p-20 gap-20">
      <div class="flex flex-col gap-10">
        <p class="text-7xl font-semibold text-[#EBF4F6]">Repair Queue</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 flex">
            <p class="text-3xl text-[#EBF4F6]">
              Bienvenido a RepairQueue, donde puedes consultar fácilmente el estado de tu vehículo
              en nuestro taller
            </p>
          </div>
          <div class="flex"></div>
        </div>
      </div>
      <div class="flex justify-center items-center w-full p-10">
        <div class="w-[1300px]">
          <CarouselComponent />
        </div>
      </div>
      <div class="flex flex-col gap-14">
        <p class="text-center text-3xl text-[#EBF4F6]">
          En RepairQueue, combinamos experiencia y tecnología de vanguardia para asegurar que tu
          vehículo reciba el mejor cuidado posible
        </p>
        <hr class="border-t border-[#192646] my-4" />
        <p class="text-center text-3xl text-[#EBF4F6]">
          Ya sea mantenimiento de rutina o reparaciones complejas, nuestro equipo de especialistas
          está dedicado a mantener tu coche funcionando sin problemas
        </p>
        <hr class="border-t border-[#192646] my-4" />
        <p class="text-center text-3xl text-[#EBF4F6]">
          Confía en nosotros para ofrecer un servicio rápido, confiable y transparente. ¡Tu
          satisfacción es nuestra prioridad!
        </p>
      </div>
    </div>
  </div>
</template>
