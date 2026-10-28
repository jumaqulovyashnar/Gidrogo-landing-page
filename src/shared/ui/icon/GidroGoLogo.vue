<script setup lang="ts">
import logoImg from '@/assets/logo.png'

defineProps<{
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-3 select-none group cursor-pointer">
    <!-- Official Logo Image with smooth hover scale and shadow -->
    <div class="relative flex items-center justify-center">
      <img
        :src="logoImg"
        alt="GidroGo Logo"
        class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
      />
    </div>

    <!-- Text Logo -->
    <div class="flex items-baseline font-black tracking-tight">
      <span :class="['text-2xl font-black tracking-tight', light ? 'text-white' : 'text-slate-900']">Gidro</span>
      <span class="text-2xl text-sky-600 font-black">Go</span>
    </div>
  </div>
</template>
