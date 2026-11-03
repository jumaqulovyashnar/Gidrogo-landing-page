<script setup lang="ts">
import { ArrowRight, ChevronDown } from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import { useI18n } from '@/shared/lib/i18n'

const { t } = useI18n()

const scrollToContact = () => {
  const el = document.querySelector('#contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const scrollToFeatures = () => {
  const el = document.querySelector('#features')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
    <!-- Ambient Glows -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[360px] rounded-full bg-gradient-to-tr from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="space-y-6 max-w-4xl mx-auto">
        <!-- Main Title (Strictly 2 Lines with Clean Leading) -->
        <h1
          class="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.2]"
        >
          <span class="block">{{ t('hero.title1') }}</span>
          <span class="block mt-1 sm:mt-2">
            <span class="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">{{ t('hero.titleHighlight') }}</span> {{ t('hero.title2') }}
          </span>
        </h1>

        <!-- Concise Meaningful Subtitle -->
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {{ t('hero.subtitle') }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            @click="scrollToContact"
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 py-3.5 text-base font-bold shadow-lg shadow-sky-600/25 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white flex items-center justify-center gap-2 cursor-pointer group transition-all hover:-translate-y-0.5"
          >
            <span>{{ t('hero.ctaContact') }}</span>
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            @click="scrollToFeatures"
            variant="outline"
            size="lg"
            class="w-full sm:w-auto rounded-xl px-7 py-3.5 text-base font-bold border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <span>{{ t('hero.ctaFeatures') }}</span>
            <ChevronDown class="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
