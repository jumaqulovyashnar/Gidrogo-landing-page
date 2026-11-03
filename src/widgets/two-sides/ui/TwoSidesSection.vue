<script setup lang="ts">
import {
  Check,
  Smartphone,
  LayoutDashboard,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  Package,
} from 'lucide-vue-next'
import { Card } from '@/shared/ui/card'
</script>

<template>
  <section class="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header (Single Clean Line) -->
      <div class="max-w-4xl lg:max-w-5xl mx-auto text-center mb-12 md:mb-16 space-y-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-snug md:whitespace-nowrap">
          Biznes uchun nazorat. <span class="text-sky-600">Mijoz uchun qulaylik.</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Boshqaruv paneli orqali butun korxonani boshqaring yoki mijozlar uchun qulay buyurtma berish tizimini taqdim eting.
        </p>
      </div>

      <!-- Two Spacious Experience Cards (Uncrowded, Premium) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <!-- Card 1: Biznes egalari va fermalar uchun -->
        <Card
          class="p-7 sm:p-9 lg:p-10 bg-white border border-slate-200/90 rounded-3xl shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="space-y-6">
            <!-- Icon & Category -->
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <LayoutDashboard class="w-5 h-5 stroke-[2]" />
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-xl bg-sky-50 text-sky-700 border border-sky-100/60">
                CRM & Dashboard
              </span>
            </div>

            <!-- Title & Description (Standardized 2 Sizes) -->
            <div class="space-y-2.5">
              <h3 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                Biznes egalari va fermalar uchun
              </h3>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Barcha buyurtmalar, kuryerlar, tushum va bo‘sh idishlar zaxirasini yagona shaffof boshqaruv panelida nazorat qiling.
              </p>
            </div>

            <!-- Key Features List (Proper Line Alignment) -->
            <ul class="space-y-3.5 pt-2">
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">Buyurtmalarni avtomatik qabul qilish va taqsimlash</span>
              </li>
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">Kuryerlar harakatini xaritada real vaqtda monitoring qilish</span>
              </li>
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">Kunlik moliyaviy hisobot va bo‘sh baklar balansi</span>
              </li>
            </ul>
          </div>

          <!-- Clean, Perfectly Aligned KPI Highlights (No cramped wrapped lines) -->
          <div class="mt-8 pt-6 border-t border-slate-100">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div class="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span class="text-xs font-semibold text-slate-500 block">Bugungi buyurtmalar</span>
                  <span class="text-2xl font-black text-slate-900 mt-0.5 block">148 ta</span>
                </div>
                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60 whitespace-nowrap">
                  +14%
                </span>
              </div>
              <div class="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span class="text-xs font-semibold text-slate-500 block">Kunlik tushum</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-2xl font-black text-slate-900">8.4M</span>
                    <span class="text-xs font-bold text-slate-500">so‘m</span>
                  </div>
                </div>
                <div class="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <TrendingUp class="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <!-- Card 2: Mijozlar uchun -->
        <Card
          class="p-7 sm:p-9 lg:p-10 bg-white border border-slate-200/90 rounded-3xl shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="space-y-6">
            <!-- Icon & Category -->
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 text-sky-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Smartphone class="w-5 h-5 stroke-[2]" />
              </div>
              <span class="text-xs font-bold px-3 py-1 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100/60">
                Mijozlar ilovasi
              </span>
            </div>

            <!-- Title & Description (Standardized 2 Sizes) -->
            <div class="space-y-2.5">
              <h3 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                Mijozlar uchun
              </h3>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mijozlar telefon orqali bir necha soniyada suv buyurtma qiladi, to‘lovni amalga oshiradi va buyurtmani kuzatadi.
              </p>
            </div>

            <!-- Key Features List (Proper Line Alignment) -->
            <ul class="space-y-3.5 pt-2">
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-cyan-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">2 bosishda manzilni tanlab buyurtma yuborish</span>
              </li>
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-cyan-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">Payme, Click, Uzum yoki yetkazilganda to‘lash</span>
              </li>
              <li class="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-800">
                <div class="w-5 h-5 rounded-md bg-cyan-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-100/80">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span class="leading-snug">Kuryer kelish vaqtini xaritada ko‘rish</span>
              </li>
            </ul>
          </div>

          <!-- Clean Client Notification Preview -->
          <div class="mt-8 pt-6 border-t border-slate-100">
            <div class="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-4 text-white flex items-center justify-between shadow-md shadow-sky-600/20">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-sky-100">Yetkazilmoqda</span>
                </div>
                <p class="text-sm sm:text-base font-bold">Toza suv 18.9L — Kuryer yo‘lda</p>
              </div>
              <span class="text-xs font-black bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-xl whitespace-nowrap">
                15 daqiqa
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
