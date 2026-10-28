export interface FeatureItem {
  id: string
  title: string
  description?: string
  icon: string
}

export const featuresList: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Avtomatik buyurtmalar',
    description: 'Telegram bot, veb-sayt va operator qo‘ng‘iroqlari bir joyda jamlanadi.',
    icon: 'Zap',
  },
  {
    id: 'f2',
    title: 'Mos dastavkachini aniqlash',
    description: 'Marshrut va tirbandlikni hisobga olib eng yaqin kuryerga yo‘naltiradi.',
    icon: 'Users',
  },
  {
    id: 'f3',
    title: 'Real-time tracking',
    description: 'Mijoz va menejer xaritada kuryerning harakatini jonli kuzatadi.',
    icon: 'Navigation',
  },
  {
    id: 'f4',
    title: 'Ombor nazorati',
    description: 'Bo‘sh va to‘la idishlar balansi har sekundda avtomatik yangilanadi.',
    icon: 'Warehouse',
  },
  {
    id: 'f5',
    title: 'Mashina qoldig‘i',
    description: 'Har bir yetkazib beruvchi mashinasidagi suv miqdori aniq nazoratda.',
    icon: 'Droplet',
  },
  {
    id: 'f6',
    title: 'Online to‘lov',
    description: 'Payme, Click, Uzum orqali bir lahzalik xavfsiz to‘lov integratsiyasi.',
    icon: 'CreditCard',
  },
  {
    id: 'f7',
    title: 'Moliyaviy hisobot',
    description: 'Kunlik, oylik marja, tushum va xarajatlar shaffof grafiklarda.',
    icon: 'BarChart3',
  },
  {
    id: 'f8',
    title: 'Customer analytics',
    description: 'Qachon suv tugashini oldindan bashorat qilib mijozga eslatma yuboradi.',
    icon: 'Activity',
  },
]
