<script setup lang="ts">
import {
  PhoneCall,
  PackageCheck,
  UserCheck,
  Truck,
  CreditCard,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-vue-next'
import { Card } from '@/shared/ui/card'

const steps = [
  {
    number: '01',
    title: 'Mijoz buyurtma beradi',
    description: 'Telegram bot, mobil ilova yoki operator orqali mijoz o‘z manzilini tanlab 2 bosishda buyurtma yuboradi.',
    tag: 'Oson buyurtma',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Tizim qabul qiladi',
    description: 'Markaziy platforma buyurtmani soniyalar ichida ro‘yxatdan o‘tkazib, ombordagi suv zaxirasini tekshiradi.',
    tag: 'Tezkor tasdiq',
    icon: PackageCheck,
  },
  {
    number: '03',
    title: 'Dastavkachi aniqlanadi',
    description: 'GPS algoritmi eng yaqin masofadagi va yuk xonasida suv bor bo‘lgan eng mos kuryerni avtomatik belgilaydi.',
    tag: 'Smart taqsimot',
    icon: UserCheck,
  },
  {
    number: '04',
    title: 'Suv yetkaziladi',
    description: 'Kuryer optimal tirbandliksiz marshrut bo‘yicha toza ichimlik suvini mijoz eshigigacha tezkor yetkazib beradi.',
    tag: 'Jonli yetkazuv',
    icon: Truck,
  },
  {
    number: '05',
    title: 'To‘lov amalga oshadi',
    description: 'Payme, Click, Uzum yoki naqd pul to‘lovi qabul qilinib, bo‘sh baklar soni hisobi avtomatik yangilanadi.',
    tag: 'Kassa nazorati',
    icon: CreditCard,
  },
  {
    number: '06',
    title: 'Ma’lumot saqlanadi',
    description: 'Mijoz ma’lumotlari, kunlik tushum, kuryerlar KPI ko‘rsatkichi va sof foyda hisobotda to‘liq qayd etiladi.',
    tag: 'Avtomatik hisobot',
    icon: BarChart3,
  },
]
</script>

<template>
  <section id="how-it-works" class="py-20 md:py-32 bg-[#030e21] text-white relative overflow-hidden">
    <!-- Ambient backdrops -->
    <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-600/15 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 md:mb-20 space-y-4">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase">
          Oddiy va aqlli oqim
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
          GidroGo qanday ishlaydi?
        </h2>
        <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
          Buyurtma kelganidan boshlab biznes statistikasi shakllanguncha — olti bog‘langan qulay bosqich.
        </p>
      </div>

      <!-- Spacious Responsive 3x2 Shadcn Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <Card
          v-for="step in steps"
          :key="step.number"
          class="relative bg-[#081834]/90 backdrop-blur-xl border border-slate-800/90 rounded-[2rem] p-7 sm:p-8 hover:border-sky-500/70 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
        >
          <!-- Subtle Top Gradient Glow on Hover -->
          <div class="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-sky-500/10 blur-2xl group-hover:bg-sky-500/25 transition-all duration-300 pointer-events-none"></div>

          <div>
            <!-- Top Bar: Icon & Step Number -->
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-14 h-14 rounded-2xl bg-sky-950/80 border border-sky-800/60 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-md shadow-black/30"
              >
                <component :is="step.icon" class="w-7 h-7 stroke-[2]" />
              </div>

              <!-- Large Watermark Number -->
              <span class="text-3xl font-black text-slate-700/80 group-hover:text-sky-400 transition-colors">
                {{ step.number }}
              </span>
            </div>

            <!-- Title & Description -->
            <h4 class="text-xl font-extrabold text-white mb-3 group-hover:text-sky-300 transition-colors">
              {{ step.title }}
            </h4>
            <p class="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
              {{ step.description }}
            </p>
          </div>

          <!-- Bottom Footer Tag -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span class="inline-flex items-center gap-1.5 font-bold text-sky-400 bg-sky-950/60 border border-sky-800/50 px-3 py-1 rounded-full">
              <Sparkles class="w-3.5 h-3.5 text-sky-400" />
              <span>{{ step.tag }}</span>
            </span>

            <span class="text-slate-500 group-hover:text-sky-400 font-bold transition-colors">
              Bosqich {{ step.number }} →
            </span>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
