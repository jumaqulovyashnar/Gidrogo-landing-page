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
  <footer class="bg-white border-t border-slate-200/90 text-slate-600 pt-10 sm:pt-12 md:pt-16 pb-8 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Content Grid: On mobile Brand + 2-col Links/Contacts side-by-side -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-slate-100 items-start">
        <!-- Col 1: Brand & Tagline (Full width on mobile, 5 cols on md+) -->
        <div class="md:col-span-5 space-y-3">
          <a href="#top" @click.prevent="scrollToTop" class="inline-block">
            <GidroGoLogo />
          </a>
          <p class="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- 2-Column Grid on Mobile for Navigation & Contacts -->
        <div class="grid grid-cols-2 gap-6 sm:gap-8 md:contents md:col-span-7">
          <!-- Navigation Links -->
          <div class="space-y-3 md:col-span-4">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {{ t('footer.sections') }}
            </h4>
            <nav class="flex flex-col space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <a
                href="#top"
                @click.prevent="scrollToSection('#top')"
                class="hover:text-sky-600 transition-colors w-fit"
              >
                {{ t('nav.home') }}
              </a>
              <a
                href="#problems"
                @click.prevent="scrollToSection('#problems')"
                class="hover:text-sky-600 transition-colors w-fit"
              >
                {{ t('nav.problems') }}
              </a>
              <a
                href="#features"
                @click.prevent="scrollToSection('#features')"
                class="hover:text-sky-600 transition-colors w-fit"
              >
                {{ t('nav.features') }}
              </a>
              <a
                href="#how-it-works"
                @click.prevent="scrollToSection('#how-it-works')"
                class="hover:text-sky-600 transition-colors w-fit"
              >
                {{ t('nav.howItWorks') }}
              </a>
            </nav>
          </div>

          <!-- Direct Contacts -->
          <div class="space-y-3 md:col-span-3">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {{ t('footer.contact') }}
            </h4>
            <div class="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <a
                href="tel:+998941782402"
                class="flex items-center gap-2 hover:text-sky-600 transition-colors whitespace-nowrap"
              >
                <Phone class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 flex-shrink-0" />
                <span>+998 (94) 178-24-02</span>
              </a>
              <a
                href="https://t.me/gidrogo_admin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 hover:text-sky-600 transition-colors whitespace-nowrap"
              >
                <Send class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 flex-shrink-0" />
                <span>@gidrogo_admin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Row: Copyright + Back to Top -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
        <div>
          {{ t('footer.rights') }}
        </div>

        <button
          @click="scrollToTop"
          class="flex items-center gap-1.5 text-slate-600 hover:text-sky-600 font-bold transition-all group focus:outline-none cursor-pointer"
        >
          <span>{{ t('footer.backToTop') }}</span>
          <ArrowUp class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
</template>
