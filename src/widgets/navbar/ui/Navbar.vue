<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import FlagIcon from '@/shared/ui/icon/FlagIcon.vue'
import { Menu, X, ArrowRight, ChevronDown, Check } from 'lucide-vue-next'
import { useI18n, type Language } from '@/shared/lib/i18n'

const { t, currentLanguage, setLanguage, languages } = useI18n()

const isMobileMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)
const langDropdownRef = ref<HTMLElement | null>(null)

const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

const selectLanguage = (lang: Language) => {
  setLanguage(lang)
  isLangDropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(event.target as Node)) {
    isLangDropdownOpen.value = false
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDown)
})

const activeLangOption = computed(() => {
  return languages.find(l => l.code === currentLanguage.value) || languages[0]
})

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

      <!-- Right: Language Select Dropdown + Kirish Button -->
      <div class="hidden sm:flex items-center gap-3 lg:gap-4 flex-shrink-0">
        <!-- Custom Language Select with Country Flags -->
        <div class="relative" ref="langDropdownRef">
          <button
            @click="toggleLangDropdown"
            type="button"
            class="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 shadow-2xs hover:border-slate-300 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-200"
            aria-label="Tilni tanlash"
          >
            <FlagIcon :lang="currentLanguage" />
            <span class="tracking-wide">{{ activeLangOption.label }}</span>
            <ChevronDown
              class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200"
              :class="{ 'rotate-180 text-sky-600': isLangDropdownOpen }"
            />
          </button>

          <!-- Dropdown Options Menu (Compact Width) -->
          <div
            v-if="isLangDropdownOpen"
            class="absolute right-0 mt-1.5 w-32 bg-white border border-slate-200/90 rounded-xl shadow-lg shadow-slate-900/10 p-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="selectLanguage(lang.code)"
              type="button"
              :class="[
                'w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-left',
                currentLanguage === lang.code
                  ? 'bg-sky-50 text-sky-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              ]"
            >
              <div class="flex items-center gap-2">
                <FlagIcon :lang="lang.code" />
                <span>{{ lang.fullName }}</span>
              </div>
              <span v-if="currentLanguage === lang.code" class="text-sky-600">
                <Check class="w-3 h-3 stroke-[3]" />
              </span>
            </button>
          </div>
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
        <!-- Mobile Language Selector with Flags and "/" divider -->
        <div class="flex items-center justify-center gap-1 bg-slate-50 p-1.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-600">
          <template v-for="(lang, index) in languages" :key="lang.code">
            <button
              @click="setLanguage(lang.code)"
              type="button"
              :class="[
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold',
                currentLanguage === lang.code
                  ? 'bg-white text-sky-600 shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              ]"
            >
              <FlagIcon :lang="lang.code" />
              <span>{{ lang.label }}</span>
            </button>
            <span v-if="index < languages.length - 1" class="text-slate-300 font-light select-none">/</span>
          </template>
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
