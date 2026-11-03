<script setup lang="ts">
import { ref } from 'vue'
import {
  Check,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  Send,
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

const handleFormSubmit = async () => {
  if (!form.value.name.trim() || !form.value.phone.trim()) return
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
  <section id="contact" class="py-20 md:py-28 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Premium Enclosed Light CTA & Contact Card -->
      <div
        class="relative rounded-[2.5rem] bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xl shadow-sky-950/5 overflow-hidden text-slate-900"
      >
        <!-- Ambient Grid & Glows -->
        <div class="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none rounded-[2.5rem]"></div>
        <div
          class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl pointer-events-none"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <!-- Left Side Copy -->
          <div class="lg:col-span-6 space-y-6">
            <!-- Eyebrow Pill -->
            <div
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-100/90 border border-sky-200/80 text-sky-700 text-xs font-bold tracking-wide shadow-2xs"
            >
              <Sparkles class="w-3.5 h-3.5 text-sky-600" />
              <span>{{ t('contact.badge') }}</span>
            </div>

            <!-- Heading with Generous Leading -->
            <h2 class="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.25] sm:leading-[1.2]">
              <span>{{ t('contact.title1') }}</span> <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                {{ t('contact.titleHighlight') }}
              </span>
            </h2>

            <p class="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              {{ t('contact.subtitle') }}
            </p>

            <!-- 3 Feature Checkpoints -->
            <div class="space-y-3 pt-2 text-sm font-semibold text-slate-700">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{{ t('contact.check1') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{{ t('contact.check2') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check class="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{{ t('contact.check3') }}</span>
              </div>
            </div>

            <!-- Quick Direct Contact Pills -->
            <div class="pt-4 flex flex-wrap items-center gap-3.5 text-xs font-semibold text-slate-700">
              <a
                href="tel:+998941782402"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50/60 border border-slate-200/90 hover:border-sky-300 text-slate-700 hover:text-sky-700 shadow-2xs hover:shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Phone class="w-3.5 h-3.5 text-sky-600" />
                <span>+998 (94) 178-24-02</span>
              </a>
              <a
                href="https://t.me/gidrogo_admin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50/60 border border-slate-200/90 hover:border-sky-300 text-slate-700 hover:text-sky-700 shadow-2xs hover:shadow-xs transition-all hover:-translate-y-0.5"
              >
                <Send class="w-3.5 h-3.5 text-sky-600" />
                <span>@gidrogo_admin</span>
              </a>
            </div>
          </div>

          <!-- Right Side: Refined Contact Form Card -->
          <div class="lg:col-span-6 w-full">
            <div
              class="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-sky-950/8 border border-slate-200/90 relative"
            >
              <div v-if="!isSubmitted" class="space-y-4">
                <div class="space-y-1.5 mb-2">
                  <h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {{ t('contact.formTitle') }}
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {{ t('contact.formSubtitle') }}
                  </p>
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
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400"
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
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400"
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
                    rows="3"
                    :placeholder="t('contact.messagePlaceholder')"
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <Button
                  @click="handleFormSubmit"
                  :disabled="isLoading || !form.name.trim() || !form.phone.trim()"
                  size="lg"
                  class="w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 group transition-all cursor-pointer"
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
              <div v-else class="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div class="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
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
    </div>
  </section>
</template>
