<script setup lang="ts">
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import { ArrowUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (id: string) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-[#030c1b] text-white pt-16 pb-12 border-t border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
        <!-- Brand column (lg:col-span-5) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="flex items-center">
            <GidroGoLogo light />
          </div>
          <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
            Suv yetkazib berish biznesi uchun yangi avlod boshqaruv tizimi. Barcha jarayonlar yagona tizimda.
          </p>
        </div>

        <!-- Platforma column (lg:col-span-2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-sm font-bold text-slate-200">Platforma</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <a href="#features" @click.prevent="scrollToSection('#features')" class="hover:text-sky-400 transition-colors">
                Imkoniyatlar
              </a>
            </li>
            <li>
              <a href="#how-it-works" @click.prevent="scrollToSection('#how-it-works')" class="hover:text-sky-400 transition-colors">
                Qanday ishlaydi
              </a>
            </li>
          </ul>
        </div>

        <!-- Ma'lumot column (lg:col-span-2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="text-sm font-bold text-slate-200">Ma’lumot</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <a href="#problems" @click.prevent="scrollToSection('#problems')" class="hover:text-sky-400 transition-colors">
                Kimlar uchun
              </a>
            </li>
            <li>
              <a href="#how-it-works" @click.prevent="scrollToSection('#how-it-works')" class="hover:text-sky-400 transition-colors">
                Bosqichlar
              </a>
            </li>
          </ul>
        </div>

        <!-- Aloqa column with Phone Numbers & Telegram (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-sm font-bold text-slate-200">Aloqa</h4>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-400">
            <!-- Phone 1: +998 94 178 24 02 (Clean without icon) -->
            <li>
              <a
                href="tel:+998941782402"
                class="inline-block text-slate-300 hover:text-sky-400 transition-colors font-medium"
              >
                +998 (94) 178-24-02
              </a>
            </li>

            <!-- Phone 2: +998 99 571 31 13 (Clean without icon) -->
            <li>
              <a
                href="tel:+998995713113"
                class="inline-block text-slate-300 hover:text-sky-400 transition-colors font-medium"
              >
                +998 (99) 571-31-13
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © 2026 GidroGo. Barcha huquqlar himoyalangan.
        </div>

        <!-- "Yuqoriga ↑" button -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors group focus:outline-none"
        >
          <span>Yuqoriga</span>
          <ArrowUp class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
</template>
