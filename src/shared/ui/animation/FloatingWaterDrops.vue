<script setup lang="ts">
// Ambient realistic 3D floating water droplets drifting from left and right
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-30 select-none">
    <!-- LEFT SIDE DROIPLETS -->
    <!-- Droplet 1: Large glossy drop on left-top -->
    <div
      class="absolute left-4 sm:left-10 top-1/4 w-12 h-14 rounded-full bg-gradient-to-br from-white/90 via-sky-200/50 to-sky-500/30 backdrop-blur-md shadow-[0_10px_25px_rgba(2,132,199,0.25)] border border-white/60 animate-droplet-left"
      style="animation-duration: 9s; animation-delay: 0s;"
    >
      <!-- Specular shine light -->
      <div class="absolute top-2 left-2.5 w-3.5 h-2 rounded-full bg-white/90 rotate-[-25deg]"></div>
      <div class="absolute bottom-2 right-2.5 w-1.5 h-1.5 rounded-full bg-sky-400/60 blur-[1px]"></div>
    </div>

    <!-- Droplet 2: Small quick drop on left-mid -->
    <div
      class="absolute left-2 sm:left-16 top-1/2 w-8 h-9 rounded-full bg-gradient-to-br from-white/90 via-cyan-200/50 to-sky-500/40 backdrop-blur-md shadow-[0_8px_20px_rgba(6,182,212,0.25)] border border-white/70 animate-droplet-left"
      style="animation-duration: 7s; animation-delay: 2.5s;"
    >
      <div class="absolute top-1.5 left-2 w-2 h-1 rounded-full bg-white/95 rotate-[-20deg]"></div>
    </div>

    <!-- Droplet 3: Medium drop on left-bottom -->
    <div
      class="absolute left-6 sm:left-24 top-3/4 w-10 h-12 rounded-full bg-gradient-to-br from-white/90 via-sky-200/60 to-cyan-500/35 backdrop-blur-md shadow-[0_10px_22px_rgba(2,132,199,0.2)] border border-white/60 animate-droplet-left"
      style="animation-duration: 11s; animation-delay: 1.5s;"
    >
      <div class="absolute top-2 left-2 w-3 h-1.5 rounded-full bg-white/90 rotate-[-30deg]"></div>
    </div>

    <!-- RIGHT SIDE DROPLETS -->
    <!-- Droplet 4: Large drop on right-top -->
    <div
      class="absolute right-4 sm:right-12 top-1/3 w-14 h-16 rounded-full bg-gradient-to-bl from-white/90 via-sky-200/50 to-blue-500/30 backdrop-blur-md shadow-[0_12px_28px_rgba(2,132,199,0.25)] border border-white/60 animate-droplet-right"
      style="animation-duration: 10s; animation-delay: 0.8s;"
    >
      <div class="absolute top-2.5 right-3 w-4 h-2 rounded-full bg-white/90 rotate-[25deg]"></div>
      <div class="absolute bottom-2.5 left-3 w-2 h-2 rounded-full bg-sky-400/50 blur-[1px]"></div>
    </div>

    <!-- Droplet 5: Tiny fast drop on right-mid -->
    <div
      class="absolute right-3 sm:right-20 top-3/5 w-7 h-8 rounded-full bg-gradient-to-bl from-white/90 via-cyan-200/50 to-sky-500/40 backdrop-blur-md shadow-[0_6px_16px_rgba(6,182,212,0.2)] border border-white/70 animate-droplet-right"
      style="animation-duration: 8s; animation-delay: 3.2s;"
    >
      <div class="absolute top-1.5 right-1.5 w-2 h-1 rounded-full bg-white/95 rotate-[20deg]"></div>
    </div>

    <!-- Droplet 6: Medium drop on right-bottom -->
    <div
      class="absolute right-8 sm:right-28 top-[85%] w-11 h-13 rounded-full bg-gradient-to-bl from-white/90 via-sky-200/60 to-cyan-500/35 backdrop-blur-md shadow-[0_10px_24px_rgba(2,132,199,0.22)] border border-white/60 animate-droplet-right"
      style="animation-duration: 12s; animation-delay: 2s;"
    >
      <div class="absolute top-2 right-2.5 w-3 h-1.5 rounded-full bg-white/90 rotate-[30deg]"></div>
    </div>
  </div>
</template>
