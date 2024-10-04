<template>
  <div>
    <div class="carousel w-full">
      <div id="item1" class="carousel-item w-full">
        <img src="/car_1.jpg" class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img src="/car_2.jpg" class="w-full" />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img src="/car_3.jpg" class="w-full" />
      </div>
      <div id="item4" class="carousel-item w-full">
        <img src="/car_4.jpg" class="w-full" />
      </div>
    </div>
    <div class="flex w-full justify-center gap-2 py-2">
      <button @click="showItem('item1')" class="btn btn-xl text-[#EBF4F6]">1</button>
      <button @click="showItem('item2')" class="btn btn-xl text-[#EBF4F6]">2</button>
      <button @click="showItem('item3')" class="btn btn-xl text-[#EBF4F6]">3</button>
      <button @click="showItem('item4')" class="btn btn-xl text-[#EBF4F6]">4</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showItem(itemId) {
      const item = document.getElementById(itemId)
      if (item) {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }
    }
  }
}
</script>
