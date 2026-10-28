<script setup lang="ts">
import {
  MessageSquareText,
  Truck,
  Droplets,
  CircleDollarSign,
  History,
  Navigation,
} from 'lucide-vue-next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card'
import { problemsList } from '@/entities/problem/model/data'

const getIcon = (name: string) => {
  switch (name) {
    case 'MessageSquareText':
      return MessageSquareText
    case 'Truck':
      return Truck
    case 'Droplets':
      return Droplets
    case 'CircleDollarSign':
      return CircleDollarSign
    case 'History':
      return History
    case 'Navigation':
      return Navigation
    default:
      return Droplets
  }
}
</script>

<template>
  <section id="problems" class="py-20 md:py-28 relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-14 md:mb-18 space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
          Suv yetkazib berish biznesini qo‘lda boshqarish qiyin.
        </h2>
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
          Tarqoq jarayonlar vaqtni oladi, xatolarni ko‘paytiradi va biznesning haqiqiy holatini yashiradi.
        </p>
      </div>

      <!-- Problem Cards Grid (Matches Screenshot 3) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="item in problemsList"
          :key="item.id"
          class="relative group bg-white border border-slate-200/80 rounded-[2rem] p-8 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-card-soft hover:shadow-card-hover"
        >
          <!-- Subtle Top Gradient Glow on Hover -->
          <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/25 transition-all duration-300 pointer-events-none"></div>

          <!-- Icon box with water ripple reflection (rounded-full) -->
          <div
            class="w-14 h-14 rounded-full bg-sky-50 border border-sky-100/90 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-sky-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm"
          >
            <component :is="getIcon(item.icon)" class="w-6 h-6 stroke-[2]" />
          </div>

          <!-- Content -->
          <div class="space-y-2 mb-8">
            <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Big watermark number on bottom right (matches screenshot 3) -->
          <div
            class="absolute bottom-5 right-6 text-3xl font-black text-sky-100 select-none group-hover:text-sky-200 transition-colors pointer-events-none"
          >
            {{ item.number }}
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
