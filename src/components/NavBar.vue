<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const redirectTo = (path: string) => {
  router.push(`/${path}`)
}
</script>

<template>
  <div class="navbar bg-[#181f41]">
    <div class="flex-1">
      <a @click="redirectTo('')" class="btn btn-ghost text-2xl text-[#EBF4F6]">RepairQueue</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 flex gap-4">
        <li>
          <a @click="redirectTo('vehicle')" class="text-lg text-[#EBF4F6]">Estado de mi vehículo</a>
        </li>
        <li><a @click="redirectTo('about')" class="text-lg text-[#EBF4F6]">Acerca de</a></li>
      </ul>
    </div>
  </div>
</template>
