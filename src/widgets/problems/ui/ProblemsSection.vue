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
      <div class="max-w-3xl mb-14 md:mb-18 space-y-4">
        <span class="text-xs md:text-sm font-bold tracking-widest text-sky-600 uppercase">
          Haqiqiy muammolar
        </span>
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
          class="relative group bg-white border border-slate-100 rounded-3xl p-7 hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-card-soft hover:shadow-card-hover"
        >
          <!-- Icon box -->
          <div
            class="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm"
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
