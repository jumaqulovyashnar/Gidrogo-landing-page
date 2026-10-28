<script setup lang="ts">
import { Droplet, Truck } from 'lucide-vue-next'

defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="flex items-center gap-2.5 select-none group cursor-pointer">
    <!-- Icon Container with Water & Truck -->
    <div
      class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 text-white shadow-md shadow-sky-500/25 group-hover:scale-105 group-hover:shadow-sky-500/40 transition-all duration-300"
    >
      <Truck class="w-5 h-5 text-white stroke-[2.2]" />
      <div class="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
        <Droplet class="w-3.5 h-3.5 fill-sky-500 text-sky-500 animate-pulse" />
      </div>
    </div>

    <!-- Text Logo -->
    <div class="flex items-baseline font-black tracking-tight">
      <span class="text-xl md:text-2xl text-slate-900 font-extrabold tracking-tight">Gidro</span>
      <span class="text-xl md:text-2xl text-sky-600 font-black">Go</span>
    </div>
  </div>
</template>
