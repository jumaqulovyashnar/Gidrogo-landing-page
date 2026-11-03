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
  Zap,
  BarChart3,
  Headphones,
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
const nameHasError = ref(false)
const phoneHasError = ref(false)

// Name Regex: Only letters (Latin, Cyrillic, Uzbek vowels/consonants), spaces, apostrophes (min 2, max 50)
const NAME_REGEX = /^[a-zA-Zа-яА-ЯёЁўғқҳЎҒҚҲo'O'g'G'\s'’-]{2,50}$/

// Phone Regex: Full Uzbek format with +998 (XX) XXX-XX-XX
const PHONE_REGEX = /^\+998\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/

const onNameInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  // On-the-fly sanitize: automatically strip out numbers and symbols
  const cleaned = target.value.replace(/[^a-zA-Zа-яА-ЯёЁўғқҳЎҒҚҲo'O'g'G'\s'’-]/g, '')
  form.value.name = cleaned
  nameHasError.value = false
  if (errorMessage.value) errorMessage.value = ''
}

const onPhoneInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let raw = target.value

  if (!raw.trim()) {
    form.value.phone = ''
    phoneHasError.value = false
    return
  }

  // Extract digits only
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('998')) {
    digits = digits.slice(3)
  }
  digits = digits.slice(0, 9)

  let formatted = '+998'
  if (digits.length > 0) {
    formatted += ' (' + digits.substring(0, 2)
  }
  if (digits.length >= 2) {
    formatted += ') ' + digits.substring(2, 5)
  }
  if (digits.length >= 5) {
    formatted += '-' + digits.substring(5, 7)
  }
  if (digits.length >= 7) {
    formatted += '-' + digits.substring(7, 9)
  }

  form.value.phone = formatted
  phoneHasError.value = false
  if (errorMessage.value) errorMessage.value = ''
}

const onPhoneFocus = () => {
  if (!form.value.phone.trim()) {
    form.value.phone = '+998 ('
  }
}

const onPhoneBlur = () => {
  if (form.value.phone === '+998 (' || form.value.phone === '+998') {
    form.value.phone = ''
  }
}

const handleFormSubmit = async () => {
  nameHasError.value = false
  phoneHasError.value = false
  errorMessage.value = ''

  const trimmedName = form.value.name.trim()
  if (!trimmedName || !NAME_REGEX.test(trimmedName)) {
    nameHasError.value = true
    errorMessage.value = t('contact.nameError')
    return
  }

  const trimmedPhone = form.value.phone.trim()
  if (!trimmedPhone || !PHONE_REGEX.test(trimmedPhone)) {
    phoneHasError.value = true
    errorMessage.value = t('contact.phoneError')
    return
  }

  isLoading.value = true
  try {
    await sendDemoEmail({
      name: trimmedName,
      phone: trimmedPhone,
      message: form.value.message.trim(),
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
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        <!-- Left Side: Balanced Copy & Benefits (Matching Card Height) -->
        <div class="lg:col-span-6 flex flex-col justify-between py-2">
          <!-- Top: Title & Subtitle -->
          <div class="space-y-4">
            <h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.2]">
              <span>{{ t('contact.title1') }}</span>
              <span class="text-sky-600 block mt-1">{{ t('contact.titleHighlight') }}</span>
            </h2>

            <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              {{ t('contact.subtitle') }}
            </p>
          </div>

          <!-- Middle: 3 Clean Benefit Points -->
          <div class="space-y-6 my-auto pt-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <Zap class="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h4 class="text-base font-bold text-slate-900">{{ t('contact.benefit1Title') }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed mt-0.5">{{ t('contact.benefit1Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <BarChart3 class="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h4 class="text-base font-bold text-slate-900">{{ t('contact.benefit2Title') }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed mt-0.5">{{ t('contact.benefit2Desc') }}</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                <Headphones class="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h4 class="text-base font-bold text-slate-900">{{ t('contact.benefit3Title') }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed mt-0.5">{{ t('contact.benefit3Desc') }}</p>
              </div>
            </div>
          </div>
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
                  <label class="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span class="flex items-center gap-1.5">
                      <User class="w-3.5 h-3.5 text-sky-600" />
                      <span>{{ t('contact.nameLabel') }}</span>
                    </span>
                    <span class="text-[10px] text-slate-400 font-normal">max 50</span>
                  </label>
                  <input
                    :value="form.name"
                    @input="onNameInput"
                    required
                    type="text"
                    maxlength="50"
                    placeholder="Sardor Aliyev"
                    :class="[
                      'w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all placeholder:text-slate-400',
                      nameHasError
                        ? 'border-rose-400 bg-rose-50/40 text-rose-900 focus:ring-4 focus:ring-rose-100'
                        : 'border-slate-200 text-slate-900 bg-slate-50/50 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-100'
                    ]"
                  />
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span class="flex items-center gap-1.5">
                      <Phone class="w-3.5 h-3.5 text-sky-600" />
                      <span>{{ t('contact.phoneLabel') }}</span>
                    </span>
                    <span class="text-[10px] text-slate-400 font-normal">+998 (XX)</span>
                  </label>
                  <input
                    :value="form.phone"
                    @input="onPhoneInput"
                    @focus="onPhoneFocus"
                    @blur="onPhoneBlur"
                    required
                    type="tel"
                    maxlength="19"
                    placeholder="+998 (90) 123-45-67"
                    :class="[
                      'w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all placeholder:text-slate-400 font-mono tracking-wide',
                      phoneHasError
                        ? 'border-rose-400 bg-rose-50/40 text-rose-900 focus:ring-4 focus:ring-rose-100'
                        : 'border-slate-200 text-slate-900 bg-slate-50/50 focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-100'
                    ]"
                  />
                </div>
              </div>

              <!-- Textarea Field -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare class="w-3.5 h-3.5 text-sky-600" />
                    <span>{{ t('contact.messageLabel') }}</span>
                  </label>
                  <span class="text-[11px] text-slate-400">{{ form.message.length }}/500</span>
                </div>
                <textarea
                  v-model="form.message"
                  rows="4"
                  maxlength="500"
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
