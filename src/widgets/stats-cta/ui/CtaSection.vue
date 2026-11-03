<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  User,
  Phone,
  MessageSquare,
  Loader2,
} from 'lucide-vue-next'
import { Button } from '@/shared/ui/button'
import { sendDemoEmail } from '@/shared/lib/email'
import { useI18n } from '@/shared/lib/i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  phone: '',
  message: '',
})

const isSubmitted = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const handleFormSubmit = async () => {
  if (!form.value.name.trim()) {
    errorMessage.value = 'Iltimos, ismingizni kiriting.'
    return
  }
  if (!form.value.phone.trim() || form.value.phone.trim().length < 7) {
    errorMessage.value = 'Iltimos, telefon raqamingizni to‘liq kiriting.'
    return
  }

  errorMessage.value = ''
  isLoading.value = true
  try {
    await sendDemoEmail({
      name: form.value.name,
      phone: form.value.phone,
      message: form.value.message,
    })
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isLoading.value = false
    isSubmitted.value = true
  }
}
</script>

<template>
  <section id="contact" class="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left Side: Clean Copy & Contacts -->
        <div class="lg:col-span-6 space-y-6">
          <h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.2]">
            <span>{{ t('contact.title1') }}</span>
            <span class="text-sky-600 block mt-1">{{ t('contact.titleHighlight') }}</span>
          </h2>

          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <!-- Right Side: Bordered Card for Form -->
        <div class="lg:col-span-6 w-full">
          <div class="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-lg shadow-slate-900/[0.04]">
            <div v-if="!isSubmitted" class="space-y-4">
              <div class="space-y-1 mb-3">
                <h3 class="text-2xl font-black text-slate-900 tracking-tight">
                  {{ t('contact.formTitle') }}
                </h3>
                <p class="text-sm text-slate-500 leading-relaxed">
                  {{ t('contact.formSubtitle') }}
                </p>
              </div>

              <!-- Error message if validation fails -->
              <div v-if="errorMessage" class="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-2 rounded-lg border border-rose-200">
                {{ errorMessage }}
              </div>

              <!-- Name & Phone Fields -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User class="w-3.5 h-3.5 text-sky-600" />
                    <span>{{ t('contact.nameLabel') }}</span>
                  </label>
                  <input
                    v-model="form.name"
                    required
                    type="text"
                    placeholder="Sardor Aliyev"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone class="w-3.5 h-3.5 text-sky-600" />
                    <span>{{ t('contact.phoneLabel') }}</span>
                  </label>
                  <input
                    v-model="form.phone"
                    required
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <!-- Textarea Field -->
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <MessageSquare class="w-3.5 h-3.5 text-sky-600" />
                  <span>{{ t('contact.messageLabel') }}</span>
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  :placeholder="t('contact.messagePlaceholder')"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <Button
                @click="handleFormSubmit"
                :disabled="isLoading"
                size="lg"
                class="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 group transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <Loader2 v-if="isLoading" class="w-4 h-4 animate-spin" />
                <span>{{ isLoading ? t('contact.submitting') : t('contact.submitBtn') }}</span>
                <ArrowRight v-if="!isLoading" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <!-- Safe Subtext with Shield Icon -->
              <div class="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-400 font-medium text-center">
                <ShieldCheck class="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{{ t('contact.safeText') }}</span>
              </div>
            </div>

            <!-- Success State -->
            <div v-else class="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div class="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 class="w-9 h-9" />
              </div>
              <div class="space-y-1">
                <h4 class="text-2xl font-black text-slate-900">
                  {{ t('contact.successTitle') }}
                </h4>
                <p class="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  {{ t('contact.successDesc') }}
                </p>
              </div>
              <Button
                variant="outline"
                @click="isSubmitted = false; form = { name: '', phone: '', message: '' }"
                class="mt-2 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                {{ t('contact.sendAnother') }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
