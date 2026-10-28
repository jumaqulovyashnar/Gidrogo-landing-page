<script setup lang="ts">
import { ref } from 'vue'
import { Truck, Check, X, ArrowRight, Zap, Shield, Sparkles } from 'lucide-vue-next'

const mode = ref<'manual' | 'gidrogo'>('gidrogo')
</script>

<template>
  <section id="solution" class="py-20 md:py-24 relative bg-gradient-to-b from-white via-sky-50/40 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Interactive Comparison Pill (Matches Screenshot 4) -->
      <div class="max-w-4xl mx-auto mb-16 md:mb-20">
        <div
          class="bg-white/95 backdrop-blur-md border border-sky-100 rounded-3xl p-4 sm:p-6 shadow-xl shadow-sky-950/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <!-- Left: 01 Qo'lda boshqarish -->
          <div
            @click="mode = 'manual'"
            :class="[
              'cursor-pointer text-center md:text-left p-3 rounded-2xl transition-all w-full md:w-auto',
              mode === 'manual' ? 'bg-slate-100/90' : 'opacity-60 hover:opacity-100'
            ]"
          >
            <span class="text-xs font-bold text-slate-400 block mb-0.5">01</span>
            <h4 class="text-base sm:text-lg font-bold text-slate-800">Qo‘lda boshqarish</h4>
            <p class="text-xs sm:text-sm text-slate-500 font-medium">Tarqoq · Sekin · Noaniq</p>
          </div>

          <!-- Middle Animated Slider Bar with Delivery Truck -->
          <div class="flex items-center gap-3 w-full md:w-64 px-4">
            <div class="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="absolute top-0 bottom-0 bg-gradient-to-r from-slate-300 via-sky-500 to-sky-600 transition-all duration-500"
                :style="{ width: mode === 'gidrogo' ? '100%' : '20%' }"
              ></div>
            </div>

            <!-- Central Moving Truck Icon -->
            <button
              @click="mode = mode === 'gidrogo' ? 'manual' : 'gidrogo'"
              class="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
              title="Rejimni almashtirish"
            >
              <Truck class="w-5 h-5 text-white" />
            </button>
          </div>

          <!-- Right: 02 GidroGo bilan -->
          <div
            @click="mode = 'gidrogo'"
            :class="[
              'cursor-pointer text-center md:text-right p-3 rounded-2xl transition-all w-full md:w-auto',
              mode === 'gidrogo' ? 'bg-sky-50 text-sky-900 border border-sky-100' : 'opacity-60 hover:opacity-100'
            ]"
          >
            <span class="text-xs font-bold text-sky-500 block mb-0.5">02</span>
            <h4 class="text-base sm:text-lg font-bold text-sky-900">GidroGo bilan</h4>
            <p class="text-xs sm:text-sm text-sky-700 font-medium">Yagona · Tez · Shaffof</p>
          </div>
        </div>

        <!-- Dynamic interactive card showing difference -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            :class="[
              'p-5 rounded-2xl border transition-all duration-300',
              mode === 'manual' ? 'bg-rose-50/60 border-rose-200' : 'bg-white border-slate-100 opacity-60'
            ]"
          >
            <div class="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
              <X class="w-4 h-4 text-rose-500" />
              <span>Eski usulda (Qo‘lda)</span>
            </div>
            <ul class="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Xodimlar har bir buyurtmani daftarga yoki Telegram guruhlarga yozadi</li>
              <li>Qaysi haydovchida qancha suv qolganini faqat telefon qilib bilish mumkin</li>
              <li>Oylik yakunda pullar va bo‘sh idishlar soni to‘g‘ri chiqmaydi</li>
            </ul>
          </div>

          <div
            :class="[
              'p-5 rounded-2xl border transition-all duration-300',
              mode === 'gidrogo' ? 'bg-sky-50/90 border-sky-300 shadow-md shadow-sky-500/5' : 'bg-white border-slate-100 opacity-60'
            ]"
          >
            <div class="flex items-center gap-2 text-sky-700 font-bold text-sm mb-2">
              <Check class="w-4 h-4 text-sky-600" />
              <span>GidroGo tizimida (Avtomatlashtirilgan)</span>
            </div>
            <ul class="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Buyurtma kelishi bilan tizim eng yaqin dastavkachiga xabar yuboradi</li>
              <li>Avtomobildagi va ombordagi suvlar qoldig‘i har daqiqa yangilanadi</li>
              <li>Kassa, qarzlar va to‘lovlar bir tugma bilan aniq hisoblab beriladi</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section Title & Narrative (Matches Screenshot 4) -->
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
          Yagona yechim
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          GidroGo barcha jarayonlarni yagona tizimga birlashtiradi.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Har bir buyurtma kerakli dastavkachi, to‘lov va biznes tahlili bilan uzluksiz bog‘lanadi.
        </p>
      </div>
    </div>
  </section>
</template>
