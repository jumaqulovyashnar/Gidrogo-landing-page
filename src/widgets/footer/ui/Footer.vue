<script setup lang="ts">
import GidroGoLogo from '@/shared/ui/icon/GidroGoLogo.vue'
import { ArrowUp, Phone } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()

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
            <GidroGoLogo />
          </div>
          <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
            Suv yetkazib berish biznesi uchun yangi avlod boshqaruv tizimi. Barcha jarayonlar yagona tizimda.
          </p>

          <!-- Telegram Quick Button -->
          <div class="pt-2">
            <a
              href="https://t.me/gidrogo_admin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-400 hover:text-sky-300 transition-all duration-200 text-xs font-semibold group"
            >
              <svg class="w-4 h-4 fill-sky-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z"/>
              </svg>
              <span>Telegram orqali bog‘lanish</span>
            </a>
          </div>
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
              <a href="#faq" @click.prevent="scrollToSection('#faq')" class="hover:text-sky-400 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Aloqa column with Phone Numbers & Telegram (lg:col-span-3) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-sm font-bold text-slate-200">Aloqa</h4>
          <ul class="space-y-3 text-xs sm:text-sm text-slate-400">
            <!-- Phone 1: +998 94 178 24 02 -->
            <li>
              <a
                href="tel:+998941782402"
                class="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors font-medium group"
              >
                <div class="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Phone class="w-3.5 h-3.5" />
                </div>
                <span>+998 (94) 178-24-02</span>
              </a>
            </li>

            <!-- Phone 2: +998 99 571 31 13 -->
            <li>
              <a
                href="tel:+998995713113"
                class="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors font-medium group"
              >
                <div class="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Phone class="w-3.5 h-3.5" />
                </div>
                <span>+998 (99) 571-31-13</span>
              </a>
            </li>

            <!-- Telegram Link -->
            <li>
              <a
                href="https://t.me/gidrogo_admin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors font-medium group"
              >
                <div class="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z"/>
                  </svg>
                </div>
                <span>Telegram: @gidrogo_admin</span>
              </a>
            </li>

            <!-- Demo Olish -->
            <li class="pt-1">
              <button @click="emit('open-demo')" class="text-sky-400 hover:text-sky-300 font-semibold transition-colors flex items-center gap-1.5">
                <span>Demo olish</span>
                <span>→</span>
              </button>
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
