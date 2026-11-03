<script setup lang="ts">
import { ArrowRight, ChevronDown } from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import { useI18n } from '@/shared/lib/i18n'

const { t } = useI18n()

const scrollToHowItWorks = () => {
  const el = document.querySelector('#how-it-works')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-grid-pattern">
    <!-- Subtle Ambient Glows -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-tr from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 md:mb-14">
      <div class="space-y-6 max-w-5xl mx-auto">
        <!-- Main Title (Strictly 2 Lines with Generous Leading) -->
        <h1
          class="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.35]"
        >
          <span class="block sm:whitespace-nowrap">{{ t('hero.title1') }}</span>
          <span class="block sm:whitespace-nowrap mt-2 sm:mt-3">
            <span class="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">{{ t('hero.titleHighlight') }}</span> {{ t('hero.title2') }}
          </span>
        </h1>

        <!-- Concise Meaningful Subtitle with proper leading -->
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto pt-2">
          {{ t('hero.subtitle') }}
        </p>

        <!-- Action Buttons: Kirish + Qanday ishlaydi -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://gidrogo-project.vercel.app/login"
            class="w-full sm:w-auto rounded-xl px-8 py-3.5 text-base font-bold shadow-xl shadow-sky-600/25 bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center gap-2 transition-all group"
          >
            <span>{{ t('hero.loginBtn') }}</span>
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Button
            @click="scrollToHowItWorks"
            variant="outline"
            size="lg"
            class="w-full sm:w-auto rounded-xl px-8 py-3.5 text-base font-bold border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{{ t('hero.howItWorksBtn') }}</span>
            <ChevronDown class="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>

        <!-- 3 Highlight Metrics Pills -->
        <div class="grid grid-cols-3 gap-3 sm:gap-6 pt-6 max-w-2xl mx-auto">
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-slate-900 block">100+</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">{{ t('hero.stat1Label') }}</span>
          </div>
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-sky-600 block">2x</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">{{ t('hero.stat2Label') }}</span>
          </div>
          <div class="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <span class="text-2xl sm:text-3xl font-black text-emerald-600 block">45%</span>
            <span class="text-[11px] sm:text-xs font-semibold text-slate-500">{{ t('hero.stat3Label') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
