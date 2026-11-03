<script setup lang="ts">
import type { Language } from '@/shared/lib/i18n'

defineProps<{
  lang: Language
}>()
</script>

<template>
  <!-- Uzbekistan Flag -->
  <svg
    v-if="lang === 'uz'"
    viewBox="0 0 32 24"
    class="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-2xs flex-shrink-0 border border-slate-200/60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Blue stripe -->
    <rect width="32" height="7.5" fill="#1EB5FF" />
    <!-- Red border -->
    <rect y="7.5" width="32" height="1" fill="#E11C38" />
    <!-- White stripe -->
    <rect y="8.5" width="32" height="7" fill="#FFFFFF" />
    <!-- Red border -->
    <rect y="15.5" width="32" height="1" fill="#E11C38" />
    <!-- Green stripe -->
    <rect y="16.5" width="32" height="7.5" fill="#10B981" />
    <!-- Crescent Moon -->
    <circle cx="5" cy="4" r="2.3" fill="#FFFFFF" />
    <circle cx="5.8" cy="4" r="1.9" fill="#1EB5FF" />
    <!-- 12 Stars (3 rows) -->
    <circle cx="9" cy="2.3" r="0.45" fill="#FFFFFF" />
    <circle cx="10.5" cy="2.3" r="0.45" fill="#FFFFFF" />
    <circle cx="12" cy="2.3" r="0.45" fill="#FFFFFF" />
    <circle cx="8.2" cy="3.9" r="0.45" fill="#FFFFFF" />
    <circle cx="9.7" cy="3.9" r="0.45" fill="#FFFFFF" />
    <circle cx="11.2" cy="3.9" r="0.45" fill="#FFFFFF" />
    <circle cx="12.7" cy="3.9" r="0.45" fill="#FFFFFF" />
    <circle cx="7.4" cy="5.5" r="0.45" fill="#FFFFFF" />
    <circle cx="8.9" cy="5.5" r="0.45" fill="#FFFFFF" />
    <circle cx="10.4" cy="5.5" r="0.45" fill="#FFFFFF" />
    <circle cx="11.9" cy="5.5" r="0.45" fill="#FFFFFF" />
    <circle cx="13.4" cy="5.5" r="0.45" fill="#FFFFFF" />
  </svg>

  <!-- Russian Flag -->
  <svg
    v-else-if="lang === 'ru'"
    viewBox="0 0 32 24"
    class="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-2xs flex-shrink-0 border border-slate-200/60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="8" fill="#FFFFFF" />
    <rect y="8" width="32" height="8" fill="#0039A6" />
    <rect y="16" width="32" height="8" fill="#D52B1E" />
  </svg>

  <!-- English / UK Flag -->
  <svg
    v-else-if="lang === 'en'"
    viewBox="0 0 32 24"
    class="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-2xs flex-shrink-0 border border-slate-200/60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="24" fill="#012169" />
    <!-- White diagonals -->
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#FFFFFF" stroke-width="4.5" />
    <!-- Red diagonals -->
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" stroke-width="2" />
    <!-- White cross -->
    <path d="M16,0 V24 M0,12 H32" stroke="#FFFFFF" stroke-width="6.5" />
    <!-- Red cross -->
    <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" stroke-width="3.5" />
  </svg>
</template>
