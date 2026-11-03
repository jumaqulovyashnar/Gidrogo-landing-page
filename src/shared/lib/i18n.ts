import { ref, computed } from 'vue'

export type Language = 'uz' | 'ru' | 'en'

export interface LanguageOption {
  code: Language
  label: string
  fullName: string
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'uz', label: 'UZ', fullName: 'O‘zbekcha' },
  { code: 'ru', label: 'RU', fullName: 'Русский' },
  { code: 'en', label: 'ENG', fullName: 'English' },
]

const savedLang = (typeof localStorage !== 'undefined' ? localStorage.getItem('gidrogo_lang') : null) as Language | null
export const currentLanguage = ref<Language>(savedLang && ['uz', 'ru', 'en'].includes(savedLang) ? savedLang : 'uz')

export const setLanguage = (lang: Language) => {
  currentLanguage.value = lang
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('gidrogo_lang', lang)
  }
}

export const translations = {
  nav: {
    home: {
      uz: 'Bosh sahifa',
      ru: 'Главная',
      en: 'Home',
    },
    problems: {
      uz: 'Muammolar',
      ru: 'Проблемы',
      en: 'Problems',
    },
    features: {
      uz: 'Imkoniyatlar',
      ru: 'Возможности',
      en: 'Features',
    },
    howItWorks: {
      uz: 'Qanday ishlaydi',
      ru: 'Как это работает',
      en: 'How it works',
    },
    login: {
      uz: 'Kirish',
      ru: 'Войти',
      en: 'Log in',
    },
  },
  hero: {
    badge: {
      uz: 'Yangi avlod suv yetkazib berish tizimi',
      ru: 'Система доставки воды нового поколения',
      en: 'Next-gen water delivery platform',
    },
    title1: {
      uz: 'Suv yetkazib berish biznesingizni',
      ru: 'Управляйте бизнесом доставки воды',
      en: 'Manage your water delivery business',
    },
    titleHighlight: {
      uz: 'yagona tizimda',
      ru: 'в единой системе',
      en: 'in a unified system',
    },
    title2: {
      uz: 'boshqaring.',
      ru: 'эффективно.',
      en: 'seamlessly.',
    },
    subtitle: {
      uz: 'Buyurtmalar, kuryerlar GPS marshruti, bo‘sh idishlar hisobi va onlayn to‘lovlar bir joyda. Shaffof nazorat va 2 baravar tezkor yetkazuv.',
      ru: 'Заказы, GPS маршруты курьеров, учет пустых бутылей и онлайн-платежи в одном месте. Прозрачный контроль и доставка в 2 раза быстрее.',
      en: 'Orders, courier GPS routes, empty bottle balance, and online payments in one place. Transparent control and 2x faster delivery.',
    },
    ctaContact: {
      uz: 'Ariza qoldirish',
      ru: 'Оставить заявку',
      en: 'Get in touch',
    },
    ctaFeatures: {
      uz: 'Imkoniyatlar',
      ru: 'Возможности',
      en: 'Features',
    },
    loginBtn: {
      uz: 'Kirish',
      ru: 'Войти',
      en: 'Log in',
    },
    howItWorksBtn: {
      uz: 'Qanday ishlaydi',
      ru: 'Как это работает',
      en: 'How it works',
    },
    stat1Label: {
      uz: 'Faol suv korxonalari',
      ru: 'Активных предприятий',
      en: 'Active water companies',
    },
    stat2Label: {
      uz: 'Tezroq yetkazib berish',
      ru: 'Быстрее доставка',
      en: 'Faster delivery',
    },
    stat3Label: {
      uz: 'Xarajatlar tejalishi',
      ru: 'Экономия расходов',
      en: 'Cost reduction',
    },
  },
  liveMap: {
    title: {
      uz: 'Har bir buyurtma — xaritada, nazorat ostida.',
      ru: 'Каждый заказ — на карте, под контролем.',
      en: 'Every order — on the map, under control.',
    },
    subtitle: {
      uz: 'Ferma, dastavkachi va mijoz bitta oqimda. Buyurtma holati real vaqtda ko‘rinadi.',
      ru: 'Производство, курьер и клиент в едином потоке. Статус заказа в реальном времени.',
      en: 'Warehouse, courier, and customer in one flow. Real-time order tracking.',
    },
    feature1Title: {
      uz: 'Mos dastavkachini aniqlash',
      ru: 'Умное распределение курьеров',
      en: 'Smart courier dispatching',
    },
    feature1Desc: {
      uz: 'Eng yaqin va zaxirasida yetarli suv bo‘lgan kuryerga buyurtma avtomatik uzatiladi.',
      ru: 'Заказ автоматически направляется ближайшему курьеру с нужным запасом воды.',
      en: 'Orders are automatically routed to the nearest courier with sufficient bottle inventory.',
    },
    feature2Title: {
      uz: 'Yo‘nalish va holat monitoringi',
      ru: 'Мониторинг маршрута и статуса',
      en: 'Route & status monitoring',
    },
    feature2Desc: {
      uz: 'Kuryer harakati, tirbandliklar va qolgan vaqt xaritada real vaqtda aniq ko‘rinadi.',
      ru: 'Движение курьера, пробки и расчетное время отображаются на карте онлайн.',
      en: 'Live courier movements, traffic delays, and ETA are precisely mapped in real time.',
    },
    feature3Title: {
      uz: 'Bo‘sh idishlar balansi',
      ru: 'Баланс пустой тары',
      en: 'Empty bottle balance',
    },
    feature3Desc: {
      uz: 'Har bir topshirishda bo‘sh baklar darhol ro‘yxatga olinadi va hisobga o‘tadi.',
      ru: 'При каждой сдаче пустые бутыли мгновенно фиксируются и вносятся в баланс.',
      en: 'Returned empty bottles are recorded and balanced with each customer delivery.',
    },
  },
  contact: {
    badge: {
      uz: 'Mutaxassis konsultatsiyasi',
      ru: 'Консультация специалиста',
      en: 'Expert consultation',
    },
    title1: {
      uz: 'Biznesingizni bugunoq',
      ru: 'Оцифруйте бизнес',
      en: 'Digitize your business',
    },
    titleHighlight: {
      uz: 'raqamlashtiring.',
      ru: 'уже сегодня.',
      en: 'today.',
    },
    subtitle: {
      uz: 'GidroGo tizimi orqali buyurtma qabul qilishdan tortib, kuryerlar yetkazib berishigacha bo‘lgan barcha jarayonlarni to‘liq avtomatlashtiring.',
      ru: 'Автоматизируйте все процессы от приема заказов до доставки курьерами с единой системой GidroGo.',
      en: 'Automate all operations from order intake to doorstep delivery with the all-in-one GidroGo platform.',
    },
    benefit1Title: {
      uz: 'Tezkor o‘rnatish va moslash',
      ru: 'Быстрое внедрение и настройка',
      en: 'Fast setup & onboarding',
    },
    benefit1Desc: {
      uz: 'Tizimni korxonangizga sozlab, jamoangizni bepul o‘qitib beramiz.',
      ru: 'Настроим систему под ваш бизнес и бесплатно обучим команду.',
      en: 'We tailor the platform to your workflow and train your team for free.',
    },
    benefit2Title: {
      uz: 'To‘liq nazorat va shaffoflik',
      ru: 'Полный контроль и прозрачность',
      en: 'Total control & transparency',
    },
    benefit2Desc: {
      uz: 'Kuryerlar marshruti, bo‘sh idishlar balansi va moliya doimiy nazoratda.',
      ru: 'Маршруты курьеров, баланс тары и касса под постоянным контролем.',
      en: 'Real-time courier routes, empty bottle balance, and revenue tracking.',
    },
    benefit3Title: {
      uz: '24/7 texnik ko‘mak',
      ru: 'Техническая поддержка 24/7',
      en: '24/7 technical support',
    },
    benefit3Desc: {
      uz: 'Istalgan savol yoki vaziyatda mutaxassislarimiz doimo yordamga tayyor.',
      ru: 'Наши специалисты всегда на связи и готовы помочь в любой ситуации.',
      en: 'Our specialists are always ready to assist with any questions or issues.',
    },
    check1: {
      uz: 'Bepul o‘rnatish va korxonangizga moslash',
      ru: 'Бесплатная настройка и адаптация под компанию',
      en: 'Free setup and tailored business onboarding',
    },
    check2: {
      uz: 'Biznesingizga mos tahlil va ko‘rsatkichlar',
      ru: 'Аналитика и ключевые показатели бизнеса',
      en: 'Customized business analytics & KPI dashboard',
    },
    check3: {
      uz: 'Real vaqtda kuryerlar va buyurtmalar nazorati',
      ru: 'Контроль курьеров и заказов в реальном времени',
      en: 'Real-time courier tracking and order control',
    },
    formTitle: {
      uz: 'Ariza qoldiring',
      ru: 'Оставить заявку',
      en: 'Leave a request',
    },
    formSubtitle: {
      uz: 'Ma’lumotlaringizni qoldiring, 15 daqiqada siz bilan bog‘lanamiz.',
      ru: 'Оставьте данные, и мы свяжемся с вами в течение 15 минут.',
      en: 'Leave your details and our team will contact you within 15 minutes.',
    },
    nameLabel: {
      uz: 'Ismingiz',
      ru: 'Ваше имя',
      en: 'Your name',
    },
    phoneLabel: {
      uz: 'Telefon raqamingiz',
      ru: 'Номер телефона',
      en: 'Phone number',
    },
    messageLabel: {
      uz: 'Xabar (ixtiyoriy)',
      ru: 'Сообщение (необязательно)',
      en: 'Message (optional)',
    },
    messagePlaceholder: {
      uz: 'Biznesingiz yoki buyurtmalar hajmi haqida qisqacha...',
      ru: 'Кратко о вашем бизнесе или объемах заказов...',
      en: 'Briefly about your business or order volume...',
    },
    submitBtn: {
      uz: 'Ariza yuborish',
      ru: 'Отправить заявку',
      en: 'Send request',
    },
    submitting: {
      uz: 'Yuborilmoqda...',
      ru: 'Отправка...',
      en: 'Sending...',
    },
    safeText: {
      uz: 'Ma’lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi.',
      ru: 'Ваши данные надежно защищены и не передаются третьим лицам.',
      en: 'Your information is safely stored and never shared.',
    },
    successTitle: {
      uz: 'Arizangiz qabul qilindi!',
      ru: 'Заявка принята!',
      en: 'Request received!',
    },
    successDesc: {
      uz: 'Tez orada mutaxassisimiz siz bilan bog‘lanib, barcha savollaringizga javob beradi.',
      ru: 'Наш специалист свяжется с вами в ближайшее время.',
      en: 'Our specialist will contact you shortly to answer all questions.',
    },
    sendAnother: {
      uz: 'Yana ariza yuborish',
      ru: 'Отправить еще заявку',
      en: 'Send another request',
    },
  },
  footer: {
    tagline: {
      uz: 'Suv yetkazib berish biznesi uchun yangi avlod boshqaruv tizimi. Barcha jarayonlar yagona tizimda.',
      ru: 'Система нового поколения для бизнеса доставки воды. Все процессы в единой платформе.',
      en: 'Next-generation management system for water delivery businesses. All processes in one place.',
    },
    sections: {
      uz: 'Bo‘limlar',
      ru: 'Разделы',
      en: 'Navigation',
    },
    contact: {
      uz: 'Aloqa',
      ru: 'Контакты',
      en: 'Contact',
    },
    supportHours: {
      uz: 'Har kuni 09:00 dan 20:00 gacha',
      ru: 'Ежедневно с 09:00 до 20:00',
      en: 'Daily 09:00 – 20:00',
    },
    rights: {
      uz: '© 2026 GidroGo. Barcha huquqlar himoyalangan.',
      ru: '© 2026 GidroGo. Все права защищены.',
      en: '© 2026 GidroGo. All rights reserved.',
    },
    backToTop: {
      uz: 'Yuqoriga',
      ru: 'Наверх',
      en: 'Back to top',
    },
  },
}

export function useI18n() {
  const t = (path: string): string => {
    const keys = path.split('.')
    let current: any = translations
    for (const key of keys) {
      if (current && key in current) {
        current = current[key]
      } else {
        return path
      }
    }
    if (current && typeof current === 'object' && currentLanguage.value in current) {
      return current[currentLanguage.value]
    }
    return typeof current === 'string' ? current : path
  }

  return {
    currentLanguage,
    setLanguage,
    languages: LANGUAGES,
    t,
  }
}
