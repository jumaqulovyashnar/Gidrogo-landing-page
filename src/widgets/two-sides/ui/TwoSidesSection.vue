<script setup lang="ts">
import {
  Check,
  ArrowRight,
  Droplet,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
} from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'

const emit = defineEmits<{
  (e: 'open-demo'): void
}>()
</script>

<template>
  <section class="py-20 md:py-28 bg-slate-50/50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 md:mb-18 space-y-4">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
          Ikki tomon, bitta tajriba
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          Biznes uchun nazorat. Mijoz uchun qulaylik.
        </h2>
      </div>

      <!-- Two Large Experience Cards (Matches Screenshot 3) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Card 1: Biznes egalari va fermalar uchun -->
        <div
          class="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-10 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
        >
          <div class="space-y-6 mb-8 relative z-10">
            <span class="text-xs font-bold text-sky-600 tracking-wider">01</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Biznes egalari va fermalar uchun
            </h3>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Barcha buyurtma, dastavkachi, moliya va ombor jarayonlarini bir qarashda boshqaring.
            </p>

            <ul class="space-y-3 pt-2">
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Buyurtmalar nazorati</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Dastavkachilar monitoringi</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Moliyaviy hisobot va statistika</span>
              </li>
            </ul>

            <div class="pt-4">
              <Button
                @click="emit('open-demo')"
                variant="outline"
                class="rounded-2xl border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-600 font-bold group"
              >
                <span>Biznesim uchun</span>
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <!-- Inset Admin Preview Mini Card (Right/Bottom) -->
          <div
            class="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-inner transition-transform group-hover:scale-[1.01]"
          >
            <div class="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-md bg-sky-600 text-white flex items-center justify-center text-xs font-bold">G</div>
                <span class="text-xs font-bold text-slate-800">Boshqaruv paneli</span>
              </div>
              <span class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Jonli
              </span>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-3">
              <div class="bg-white p-2.5 rounded-xl border border-slate-100">
                <span class="text-[10px] text-slate-400 font-medium">Buyurtmalar</span>
                <p class="text-base font-extrabold text-slate-900">124 ta</p>
              </div>
              <div class="bg-white p-2.5 rounded-xl border border-slate-100">
                <span class="text-[10px] text-slate-400 font-medium">Sotuv</span>
                <p class="text-base font-extrabold text-slate-900">8.4M so‘m</p>
              </div>
            </div>

            <!-- Mini wave graph -->
            <div class="h-16 w-full">
              <svg class="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                <path d="M0,40 Q 50,15 100,30 T 200,10 L 200,50 L 0,50 Z" fill="#e0f2fe" opacity="0.6" />
                <path d="M0,40 Q 50,15 100,30 T 200,10" fill="none" stroke="#0284c7" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Card 2: Mijozlar uchun (With Phone Mockup) -->
        <div
          class="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-10 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
        >
          <div class="space-y-6 mb-8 relative z-10">
            <span class="text-xs font-bold text-sky-600 tracking-wider">02</span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Mijozlar uchun
            </h3>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Yaqin fermadan suvni tez buyurtma qilish va yetkazib berishni kuzatish.
            </p>

            <ul class="space-y-3 pt-2">
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Oson buyurtma</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Online yoki naqd to‘lov</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Buyurtmalar tarixi</span>
              </li>
            </ul>

            <div class="pt-4">
              <Button
                @click="emit('open-demo')"
                variant="outline"
                class="rounded-2xl border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-600 font-bold group"
              >
                <span>Ilovani ko‘rish</span>
                <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <!-- Realistic Smartphone Inset Frame (Matches Screenshot 3) -->
          <div class="mt-6 flex justify-center">
            <div
              class="w-full max-w-xs bg-slate-900 p-3 rounded-t-[2.5rem] shadow-2xl border-4 border-slate-900 border-b-0"
            >
              <!-- Speaker notch -->
              <div class="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-3"></div>

              <!-- Phone Screen -->
              <div class="bg-white rounded-t-2xl p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-sky-600">GidroGo</span>
                  <span class="text-[10px] text-slate-400">Xayrli kun</span>
                </div>

                <div class="space-y-1">
                  <h5 class="text-sm font-extrabold text-slate-900">Suv buyurtma qiling</h5>
                </div>

                <!-- Product Card inside Phone with animated water droplet -->
                <div class="bg-gradient-to-r from-sky-50 to-cyan-50/60 border border-sky-100 rounded-2xl p-3 flex items-center gap-3 relative overflow-hidden">
                  <div class="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-500/30">
                    <Droplet class="w-5 h-5 fill-white animate-bounce" style="animation-duration: 2.5s;" />
                    <span class="absolute inset-0 rounded-xl bg-white/20 animate-ping opacity-40"></span>
                  </div>
                  <div>
                    <h6 class="text-xs font-bold text-slate-800">Toza ichimlik suvi</h6>
                    <p class="text-[10px] text-slate-500">18.9 litr · 1 dona</p>
                  </div>
                </div>

                <div class="w-full py-2 bg-sky-600 text-white rounded-xl text-xs font-bold text-center shadow-md shadow-sky-600/30">
                  Buyurtma berish
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
