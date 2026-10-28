<script setup lang="ts">
import {
  Check,
  Droplet,
  Smartphone,
  LayoutDashboard,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header (Centered, Clean) -->
      <div class="max-w-3xl mx-auto text-center mb-14 md:mb-18 space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          Biznes uchun nazorat. Mijoz uchun qulaylik.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Boshqaruv paneli orqali butun korxonani boshqaring yoki mijozlar uchun qulay buyurtma berish tizimini taqdim eting.
        </p>
      </div>

      <!-- Two Large Experience Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <!-- Card 1: Biznes egalari va fermalar uchun -->
        <div
          class="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-10 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
        >
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-sky-600 tracking-wider">01</span>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700">CRM & Dashboard</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Biznes egalari va fermalar uchun
            </h3>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Barcha buyurtmalar, kuryerlar, tushum va bo‘sh idishlar zaxirasini yagona shaffof boshqaruv panelida nazorat qiling.
            </p>

            <!-- Key Features List -->
            <ul class="space-y-3.5 pt-1">
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Buyurtmalarni avtomatik qabul qilish va taqsimlash</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Kuryerlar harakatini xaritada jonli monitoring qilish</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Kunlik moliyaviy hisobot va bo‘sh baklar balansi</span>
              </li>
            </ul>
          </div>

          <!-- Complete Clean Admin Preview Card (Not chopped) -->
          <div
            class="mt-8 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-4 group-hover:border-sky-300 transition-all duration-300"
          >
            <div class="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center text-xs font-black shadow-sm">
                  G
                </div>
                <span class="text-xs font-bold text-slate-800">GidroGo Boshqaruv Paneli</span>
              </div>
              <span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-emerald-200/60">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Jonli
              </span>
            </div>

            <!-- Stats Overview -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                <span class="text-[11px] font-medium text-slate-400 block mb-0.5">Bugungi buyurtmalar</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-slate-900">148 ta</span>
                  <span class="text-[10px] font-bold text-emerald-600">+14%</span>
                </div>
              </div>
              <div class="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                <span class="text-[11px] font-medium text-slate-400 block mb-0.5">Kunlik tushum</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-slate-900">8.4M</span>
                  <span class="text-[10px] font-semibold text-slate-400">so‘m</span>
                </div>
              </div>
            </div>

            <!-- Mini chart visualization -->
            <div class="bg-white p-3 rounded-xl border border-slate-100">
              <div class="flex items-center justify-between mb-2 text-[10px] text-slate-400 font-semibold">
                <span>So‘nggi 7 kunlik yetkazish dinamikasi</span>
                <span class="text-sky-600 font-bold">Yuqori o‘sish</span>
              </div>
              <div class="h-14 w-full">
                <svg class="w-full h-full" viewBox="0 0 200 45" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="adminChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25" />
                      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,35 Q 30,28 60,30 T 120,15 T 180,10 L 200,8 L 200,45 L 0,45 Z" fill="url(#adminChartGrad)" />
                  <path d="M0,35 Q 30,28 60,30 T 120,15 T 180,10 L 200,8" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Mijozlar uchun (With Complete Smartphone Frame) -->
        <div
          class="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-10 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
        >
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-sky-600 tracking-wider">02</span>
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-700">Mijozlar ilovasi</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Mijozlar uchun
            </h3>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mijozlar telefon orqali bir necha soniyada suv buyurtma qiladi, to‘lovni amalga oshiradi va buyurtmani kuzatadi.
            </p>

            <!-- Key Features List -->
            <ul class="space-y-3.5 pt-1">
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>2 bosishda manzilni tanlab buyurtma yuborish</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Payme, Click, Uzum yoki yetkazilganda to‘lash</span>
              </li>
              <li class="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div class="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Kuryer kelish vaqtini xaritada ko‘rish</span>
              </li>
            </ul>
          </div>

          <!-- Complete, Elegant Smartphone Mockup (Full frame, completely enclosed) -->
          <div class="mt-8 flex justify-center items-center py-2">
            <div
              class="w-full max-w-[270px] bg-slate-950 p-3 rounded-[2.5rem] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/60 relative group-hover:scale-[1.02] transition-transform duration-300"
            >
              <!-- Dynamic Island / Speaker Pill -->
              <div class="w-20 h-4 bg-black rounded-full mx-auto mb-2.5 flex items-center justify-center">
                <span class="w-2 h-2 rounded-full bg-slate-800 mr-2"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500/80"></span>
              </div>

              <!-- Phone Screen Content -->
              <div class="bg-white rounded-[1.75rem] p-4 space-y-3.5 overflow-hidden">
                <!-- App Top Bar -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <div class="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-black">
                      G
                    </div>
                    <span class="text-xs font-black text-slate-900 tracking-tight">GidroGo</span>
                  </div>
                  <span class="text-[10px] font-semibold text-slate-400">Toshkent</span>
                </div>

                <!-- Active Live Delivery Banner -->
                <div class="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl p-3 shadow-md shadow-sky-600/20">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-sky-100 flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Yetkazilmoqda
                    </span>
                    <span class="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded">15 daq</span>
                  </div>
                  <p class="text-xs font-bold leading-tight">Kuryer eshigingizga yo‘lda</p>
                </div>

                <!-- Product Box -->
                <div class="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Droplet class="w-5 h-5 fill-sky-600" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-900 truncate">Toza ichimlik suvi 18.9L</p>
                    <p class="text-[10px] text-slate-500">2 dona · 36,000 so‘m</p>
                  </div>
                </div>

                <!-- Call to action button inside phone -->
                <div class="w-full py-2 bg-slate-900 text-white rounded-xl text-xs font-bold text-center">
                  Buyurtma berish
                </div>
              </div>

              <!-- Phone Bottom Home Bar -->
              <div class="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-2.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
