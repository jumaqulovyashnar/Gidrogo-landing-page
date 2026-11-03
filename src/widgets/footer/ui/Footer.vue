<script setup lang="ts">
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import { ArrowUp, Phone, Send } from 'lucide-vue-next'
import { useI18n } from '@/shared/lib/i18n'

const { t } = useI18n()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (id: string) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-slate-50 border-t border-slate-200/90 text-slate-600 py-10 md:py-12 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Flex Row: Logo + Horizontal Flex Navigation + Contacts -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <!-- Left: Logo & Tagline -->
        <div class="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a href="#top" @click.prevent="scrollToTop" class="inline-block flex-shrink-0">
            <GidroGoLogo />
          </a>
          <span class="hidden sm:inline text-slate-300">|</span>
          <p class="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Center: Horizontal Flex Navigation Links -->
        <nav class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#top"
            @click.prevent="scrollToSection('#top')"
            class="hover:text-sky-600 transition-colors"
          >
            {{ t('nav.home') }}
          </a>
          <a
            href="#problems"
            @click.prevent="scrollToSection('#problems')"
            class="hover:text-sky-600 transition-colors"
          >
            {{ t('nav.problems') }}
          </a>
          <a
            href="#features"
            @click.prevent="scrollToSection('#features')"
            class="hover:text-sky-600 transition-colors"
          >
            {{ t('nav.features') }}
          </a>
          <a
            href="#how-it-works"
            @click.prevent="scrollToSection('#how-it-works')"
            class="hover:text-sky-600 transition-colors"
          >
            {{ t('nav.howItWorks') }}
          </a>
        </nav>

        <!-- Right: Direct Contacts -->
        <div class="flex items-center gap-5 text-xs sm:text-sm font-medium text-slate-700">
          <a
            href="https://t.me/gidrogo_admin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 hover:text-sky-600 transition-colors"
          >
            <Send class="w-3.5 h-3.5 text-sky-600" />
            <span>@gidrogo_admin</span>
          </a>
          <a
            href="tel:+998941782402"
            class="flex items-center gap-1.5 font-bold hover:text-sky-600 transition-colors"
          >
            <Phone class="w-3.5 h-3.5 text-sky-600" />
            <span>+998 (94) 178-24-02</span>
          </a>
        </div>
      </div>

      <!-- Bottom Flex Row: Copyright + Back to Top -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          {{ t('footer.rights') }}
        </div>

        <!-- Yuqoriga button -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-1.5 text-slate-600 hover:text-sky-600 font-bold transition-all group focus:outline-none cursor-pointer"
        >
          <span>{{ t('footer.backToTop') }}</span>
          <ArrowUp class="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
</template>
