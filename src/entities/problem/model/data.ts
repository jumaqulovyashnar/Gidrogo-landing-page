export interface ProblemItem {
  id: string
  number: string
  title: string
  description: string
  icon: string
}

export const problemsList: ProblemItem[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Buyurtmalar tarqoq',
    description: 'Telefon, Telegram va boshqa kanallarda buyurtmalar yo‘qolib ketadi.',
    icon: 'MessageSquareText',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Dastavkachini boshqarish',
    description: 'Buyurtmani kimga berishni qo‘lda nazorat qilishga to‘g‘ri keladi.',
    icon: 'Truck',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Suv qoldig‘i',
    description: 'Mashina va ombordagi mahsulot miqdori aniq ko‘rinmaydi.',
    icon: 'Droplets',
  },
  {
    id: 'p4',
    number: '04',
    title: 'Moliyaviy nazorat',
    description: 'Tushum va xarajatlarni qo‘lda hisoblash vaqt oladi.',
    icon: 'CircleDollarSign',
  },
  {
    id: 'p5',
    number: '05',
    title: 'Mijozlar tarixi',
    description: 'Mijoz ma’lumotlari turli joylarda saqlanib qoladi.',
    icon: 'History',
  },
  {
    id: 'p6',
    number: '06',
    title: 'Monitoring',
    description: 'Yetkazib beruvchilar holatini real vaqtda kuzatish qiyin.',
    icon: 'Navigation',
  },
]
