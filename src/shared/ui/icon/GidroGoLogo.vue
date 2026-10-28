<script setup lang="ts">
import logoPng from '@/assets/logo.png'
import logoWebp from '@/assets/logo.webp'

defineProps<{
  size?: 'sm' | 'md' | 'lg'
  light?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-3 select-none group cursor-pointer">
    <!-- Official Logo Image with WebP/PNG picture tag and zero CLS dimensions -->
    <div class="relative flex items-center justify-center">
      <picture>
        <source :srcset="logoWebp" type="image/webp" />
        <img
          :src="logoPng"
          alt="GidroGo Logo"
          width="160"
          height="107"
          fetchpriority="high"
          decoding="async"
          class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
        />
      </picture>
    </div>

    <!-- Text Logo -->
    <div class="flex items-baseline font-black tracking-tight">
      <span :class="['text-2xl font-black tracking-tight', light ? 'text-white' : 'text-slate-900']">Gidro</span>
      <span class="text-2xl text-sky-600 font-black">Go</span>
    </div>
  </div>
</template>
