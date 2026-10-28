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
  { name: 'Imkoniyatlar', href: '#features' },
  { name: 'Qanday ishlaydi', href: '#how-it-works' },
  { name: 'Biz uchun', href: '#problems' },
  { name: 'FAQ', href: '#faq' },
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
  <header class="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6">
    <div
      class="max-w-6xl mx-auto glass-nav border border-slate-200/80 rounded-full px-5 py-2.5 md:py-3 shadow-lg shadow-sky-950/5 flex items-center justify-between transition-all"
    >
      <!-- Logo -->
      <a href="#top" class="flex items-center">
        <GidroGoLogo />
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-7">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
          class="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Right CTA Button -->
      <div class="hidden sm:flex items-center gap-3">
        <Button
          @click="emit('open-demo')"
          class="rounded-full px-6 font-semibold shadow-md shadow-sky-600/30 flex items-center gap-2 group"
        >
          <span>Demo olish</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none"
        aria-label="Menyu"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3"
    >
      <a
        v-for="link in navLinks"
        :key="link.name"
        :href="link.href"
        @click.prevent="scrollTo(link.href)"
        class="py-2 px-3 text-base font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
      >
        {{ link.name }}
      </a>
      <div class="pt-2 border-t border-slate-100">
        <Button
          @click="emit('open-demo'); isMobileMenuOpen = false"
          class="w-full rounded-full py-3 font-semibold shadow-md shadow-sky-600/25 flex items-center justify-center gap-2"
        >
          <span>Demo olish</span>
          <ArrowRight class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </header>
</template>
