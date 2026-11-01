<script setup lang="ts">
import { ref } from 'vue'
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import { Button } from '@/shared/ui/button'
import { Menu, X, ArrowRight } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Bosh sahifa', href: '#top' },
  { name: 'Muammolar', href: '#problems' },
  { name: 'Imkoniyatlar', href: '#features' },
  { name: 'Qanday ishlaydi', href: '#how-it-works' },
]

const scrollTo = (href: string) => {
  isMobileMenuOpen.value = false
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Full-width Modern Enterprise Navbar -->
  <header class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Left: Logo -->
      <a href="#top" class="flex items-center flex-shrink-0">
        <GidroGoLogo />
      </a>

      <!-- Middle: Desktop Nav Links (Standardized Font & Sizes) -->
      <nav class="hidden md:flex items-center h-full">
        <ul class="flex items-center gap-8 lg:gap-10 h-full">
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="h-full flex items-center"
          >
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="relative h-full flex items-center text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2.5px] after:bg-sky-600 after:transition-all after:duration-250 after:rounded-t-full cursor-pointer"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Right: Pure CTA Button (Clean, No Phone Number) -->
      <div class="hidden sm:flex items-center">
        <Button
          @click="emit('open-demo')"
          class="rounded-xl px-6 py-2.5 text-sm font-bold shadow-md shadow-sky-600/20 flex items-center gap-2 group transition-all"
        >
          <span>Tizimga ulanish</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
        aria-label="Menyuni ochish"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden w-full bg-white border-b border-slate-200 px-6 py-5 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="block py-2.5 px-3 text-base font-semibold text-slate-800 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="pt-3 border-t border-slate-100 flex flex-col">
        <Button
          @click="emit('open-demo'); isMobileMenuOpen = false"
          class="w-full rounded-xl py-3 text-sm font-bold shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
        >
          <span>Tizimga ulanish</span>
          <ArrowRight class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </header>
</template>
