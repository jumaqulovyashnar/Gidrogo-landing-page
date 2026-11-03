<script setup lang="ts">
import { ref, computed } from 'vue'
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import { Menu, X, ArrowRight } from 'lucide-vue-next'
import { useI18n } from '@/shared/lib/i18n'

const { t, currentLanguage, setLanguage, languages } = useI18n()

const isMobileMenuOpen = ref(false)

const navLinks = computed(() => [
  { name: t('nav.home'), href: '#top' },
  { name: t('nav.problems'), href: '#problems' },
  { name: t('nav.features'), href: '#features' },
  { name: t('nav.howItWorks'), href: '#how-it-works' },
])

const scrollTo = (href: string) => {
  isMobileMenuOpen.value = false
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Full-width Modern Enterprise Navbar with Balanced Spacing -->
  <header class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
      <!-- Left: Logo -->
      <a href="#top" class="flex items-center flex-shrink-0">
        <GidroGoLogo />
      </a>

      <!-- Middle: Desktop Nav Links (Evenly & Proportionately Spaced) -->
      <nav class="hidden md:flex items-center">
        <ul class="flex items-center gap-6 lg:gap-8">
          <li
            v-for="link in navLinks"
            :key="link.href"
            class="flex items-center"
          >
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="relative py-1 text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer group"
            >
              <span>{{ link.name }}</span>
              <span
                class="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2.5px] bg-sky-600 rounded-full transition-all duration-200"
              ></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Right: Language Switcher (UZ / RU / ENG) + Kirish Button -->
      <div class="hidden sm:flex items-center gap-3 lg:gap-4 flex-shrink-0">
        <!-- Language Switcher Pill -->
        <div class="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-600">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="setLanguage(lang.code)"
            type="button"
            :class="[
              'px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold',
              currentLanguage === lang.code
                ? 'bg-white text-sky-600 shadow-2xs font-extrabold'
                : 'hover:text-slate-900 text-slate-500'
            ]"
          >
            {{ lang.label }}
          </button>
        </div>

        <!-- Kirish Button -->
        <a
          href="https://gidrogo-project.vercel.app/login"
          class="rounded-xl px-5 py-2.5 text-sm font-bold shadow-md shadow-sky-600/20 bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-2 group transition-all"
        >
          <span>{{ t('nav.login') }}</span>
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
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
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="block py-2.5 px-3 text-base font-semibold text-slate-800 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="pt-3 border-t border-slate-100 flex flex-col gap-3">
        <!-- Mobile Language Selector -->
        <div class="flex items-center justify-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-600">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="setLanguage(lang.code)"
            type="button"
            :class="[
              'flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center font-bold',
              currentLanguage === lang.code
                ? 'bg-white text-sky-600 shadow-2xs font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            ]"
          >
            {{ lang.label }}
          </button>
        </div>

        <a
          href="https://gidrogo-project.vercel.app/login"
          @click="isMobileMenuOpen = false"
          class="w-full rounded-xl py-3 text-sm font-bold shadow-md shadow-sky-600/20 bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-2"
        >
          <span>{{ t('nav.login') }}</span>
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </header>
</template>
