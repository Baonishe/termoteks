export const COMPANY = {
  name: "TERMOTEKS",
  legal: "ТЕРМОТЕКС",
  tagline: "Производитель термоклеевых материалов",
  founded: 1993,
  address: "Московская обл., Чеховский р-н, пос. Любучаны, ул. Заводская, д. 16",
  addressShort: "пос. Любучаны, 40 км от МКАД",
  email: "termotex@bk.ru",
  phones: [
    { name: "Ольга", role: "руководитель", tel: "+7 903 760 38 33" },
    { name: "Валерий", role: "отдел продаж", tel: "+7 965 105 88 49" },
    { name: "Склад", role: "общий", tel: "+7 916 537 57 52" },
  ],
  hours: "Пн–Пт 9:00–18:00",
  warehouseHours: "9:00–16:00 без перерыва",
  whatsapp: "79037603833",
  instagramNote: "Мы в Instagram",
} as const;

export type CategoryId = "tkan" | "netkan" | "trikotazh" | "porolon";

export type ProductColor = {
  id: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: CategoryId;
  density: number;
  glueGsm?: string;
  widthCm?: number;
  widthNote?: string;
  rollQty: number;
  rollUnit: "m2" | "lm";
  price?: number;
  priceUnit: "m2" | "lm";
  onOrder?: boolean;
  image: string;
  images: string[];
  colors?: ProductColor[];
  popular?: boolean;
  thicknessMm?: number;
  twoSided?: boolean;
  base: string;
  note?: string;
};

export const CATEGORIES: {
  id: CategoryId;
  title: string;
  short: string;
  kicker: string;
  blurb: string;
  image: string;
}[] = [
  {
    id: "tkan",
    title: "На тканой основе",
    short: "Ткань",
    kicker: "Бязь · диагональ · двунитка",
    blurb: "Классические тканые прокладки для обуви и швейного производства. Плотности от 125 до 240 г/м².",
    image: "/images/fabric-dots.jpg",
  },
  {
    id: "netkan",
    title: "На нетканой основе",
    short: "Спанбонд",
    kicker: "Спанбонд СТ-80–150",
    blurb: "Спанбонд белый, бежевый и чёрный. Стабильная ширина 160 см, рулон 100 м².",
    image: "/images/spanbond-white.jpg",
  },
  {
    id: "trikotazh",
    title: "На трикотажной основе",
    short: "Трикотаж",
    kicker: "Формоустойчивый и комбинированный",
    blurb: "Аппретированный трикотаж и комбинированное полотно х/б + п/э. Под заказ.",
    image: "/images/knit-beige.jpg",
  },
  {
    id: "porolon",
    title: "На основе поролона",
    short: "Поролон",
    kicker: "2–5 мм · одно- и двухсторонний",
    blurb: "Эластичные прокладки с односторонним и двухсторонним клеевым слоем. Ширина 150 см.",
    image: "/images/foam-white.jpg",
  },
];

const SPANBOND_COLORS: ProductColor[] = [
  { id: "white", name: "Белый", image: "/images/spanbond-3.jpg" },
  { id: "beige", name: "Бежевый", image: "/images/spanbond-page-1.jpg" },
  { id: "black", name: "Чёрный", image: "/images/spanbond-page-2.jpg" },
];

export const PRODUCTS: Product[] = [
  {
    id: "bt-125",
    slug: "bt-125",
    sku: "БТ-125",
    name: "Бязь термоклеевая БТ-125",
    category: "tkan",
    density: 125,
    widthCm: 162,
    rollQty: 100,
    rollUnit: "m2",
    price: 96,
    priceUnit: "m2",
    image: "/images/fabric-dots.jpg",
    images: ["/images/fabric-dots.jpg", "/images/fabric-roll.jpg", "/images/fabric-2.jpg"],
    popular: true,
    base: "Бязь",
  },
  {
    id: "bt-142",
    slug: "bt-142",
    sku: "БТ-142",
    name: "Бязь термоклеевая БТ-142",
    category: "tkan",
    density: 142,
    widthCm: 162,
    rollQty: 100,
    rollUnit: "m2",
    price: 110,
    priceUnit: "m2",
    image: "/images/fabric-3.jpg",
    images: ["/images/fabric-3.jpg", "/images/fabric-dots.jpg", "/images/fabric-roll.jpg"],
    base: "Бязь",
  },
  {
    id: "dt-190",
    slug: "dt-190",
    sku: "ДТ-190",
    name: "Диагональ термоклеевая ДТ-190",
    category: "tkan",
    density: 190,
    widthCm: 90,
    rollQty: 100,
    rollUnit: "lm",
    priceUnit: "lm",
    onOrder: true,
    image: "/images/diagonal.jpg",
    images: ["/images/diagonal.jpg", "/images/fabric-roll.jpg"],
    base: "Диагональ",
  },
  {
    id: "dt-220",
    slug: "dt-220",
    sku: "ДТ-220",
    name: "Диагональ термоклеевая ДТ-220",
    category: "tkan",
    density: 220,
    widthCm: 90,
    rollQty: 100,
    rollUnit: "lm",
    priceUnit: "lm",
    onOrder: true,
    image: "/images/fabric-roll.jpg",
    images: ["/images/fabric-roll.jpg", "/images/diagonal.jpg"],
    base: "Диагональ",
  },
  {
    id: "dt-240",
    slug: "dt-240",
    sku: "ДТ-240",
    name: "Диагональ термоклеевая ДТ-240",
    category: "tkan",
    density: 240,
    widthCm: 90,
    rollQty: 100,
    rollUnit: "lm",
    priceUnit: "lm",
    onOrder: true,
    image: "/images/rolls-mixed.jpg",
    images: ["/images/rolls-mixed.jpg", "/images/diagonal.jpg"],
    base: "Диагональ",
  },
  {
    id: "dvt-210",
    slug: "dvt-210",
    sku: "ДВТ-210",
    name: "Двунитка термоклеевая ДВТ-210",
    category: "tkan",
    density: 210,
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/fabric-roll.jpg",
    images: ["/images/fabric-roll.jpg", "/images/rolls-mixed.jpg"],
    base: "Двунитка",
  },
  {
    id: "st-80",
    slug: "st-80",
    sku: "СТ-80",
    name: "Спанбонд термоклеевой СТ-80",
    category: "netkan",
    density: 80,
    glueGsm: "40–45",
    widthCm: 160,
    rollQty: 100,
    rollUnit: "m2",
    price: 57,
    priceUnit: "m2",
    image: "/images/spanbond-3.jpg",
    images: ["/images/spanbond-3.jpg", "/images/spanbond-page-1.jpg", "/images/spanbond-page-2.jpg"],
    colors: SPANBOND_COLORS,
    base: "Спанбонд",
  },
  {
    id: "st-100",
    slug: "st-100",
    sku: "СТ-100",
    name: "Спанбонд термоклеевой СТ-100",
    category: "netkan",
    density: 100,
    glueGsm: "40–45",
    widthCm: 160,
    rollQty: 100,
    rollUnit: "m2",
    price: 61,
    priceUnit: "m2",
    image: "/images/spanbond-white.jpg",
    images: ["/images/spanbond-white.jpg", "/images/spanbond-page-1.jpg", "/images/spanbond-page-2.jpg"],
    colors: SPANBOND_COLORS,
    popular: true,
    base: "Спанбонд",
  },
  {
    id: "st-130",
    slug: "st-130",
    sku: "СТ-130",
    name: "Спанбонд термоклеевой СТ-130",
    category: "netkan",
    density: 130,
    glueGsm: "40–45",
    widthCm: 160,
    rollQty: 100,
    rollUnit: "m2",
    price: 69,
    priceUnit: "m2",
    image: "/images/spanbond-page-1.jpg",
    images: ["/images/spanbond-page-1.jpg", "/images/spanbond-3.jpg", "/images/spanbond-page-2.jpg"],
    colors: SPANBOND_COLORS,
    base: "Спанбонд",
  },
  {
    id: "st-150",
    slug: "st-150",
    sku: "СТ-150",
    name: "Спанбонд термоклеевой СТ-150",
    category: "netkan",
    density: 150,
    glueGsm: "40–45",
    widthCm: 160,
    rollQty: 100,
    rollUnit: "m2",
    price: 73,
    priceUnit: "m2",
    image: "/images/spanbond-page-2.jpg",
    images: ["/images/spanbond-page-2.jpg", "/images/spanbond-3.jpg", "/images/spanbond-page-1.jpg"],
    colors: SPANBOND_COLORS,
    base: "Спанбонд",
  },
  {
    id: "mf-170",
    slug: "mf-170",
    sku: "МФ-170",
    name: "Трикотаж формоустойчивый МФ-170",
    category: "trikotazh",
    density: 135,
    glueGsm: "40–45",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-beige.jpg",
    images: ["/images/knit-beige.jpg", "/images/knit-2.jpg", "/images/rolls-mixed.jpg"],
    base: "Трикотажное полотно аппретированное",
  },
  {
    id: "mf-220",
    slug: "mf-220",
    sku: "МФ-220",
    name: "Трикотаж формоустойчивый МФ-220",
    category: "trikotazh",
    density: 170,
    glueGsm: "40–45",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-2.jpg",
    images: ["/images/knit-2.jpg", "/images/knit-beige.jpg"],
    base: "Трикотажное полотно аппретированное",
  },
  {
    id: "mf-220-black",
    slug: "mf-220-black",
    sku: "МФ-220 чёрный",
    name: "Трикотаж формоустойчивый МФ-220 чёрный",
    category: "trikotazh",
    density: 170,
    glueGsm: "40–45",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-dark.jpg",
    images: ["/images/knit-dark.jpg", "/images/knit-5.jpg"],
    colors: [{ id: "black", name: "Чёрный", image: "/images/knit-dark.jpg" }],
    base: "Трикотажное полотно аппретированное",
  },
  {
    id: "tp-140",
    slug: "tp-140",
    sku: "ТП-140",
    name: "Трикотаж комбинированный ТП-140",
    category: "trikotazh",
    density: 140,
    glueGsm: "40–45",
    widthNote: "120–130 см",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-3.jpg",
    images: ["/images/knit-3.jpg", "/images/knit-4.jpg"],
    base: "Трикотажное полотно комбинированное (х/б + п/э)",
  },
  {
    id: "tp-170",
    slug: "tp-170",
    sku: "ТП-170",
    name: "Трикотаж комбинированный ТП-170",
    category: "trikotazh",
    density: 170,
    glueGsm: "40–45",
    widthNote: "120–130 см",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-4.jpg",
    images: ["/images/knit-4.jpg", "/images/knit-3.jpg"],
    base: "Трикотажное полотно комбинированное (х/б + п/э)",
  },
  {
    id: "tp-220",
    slug: "tp-220",
    sku: "ТП-220",
    name: "Трикотаж комбинированный ТП-220",
    category: "trikotazh",
    density: 220,
    glueGsm: "40–45",
    widthNote: "120–130 см",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/knit-5.jpg",
    images: ["/images/knit-5.jpg", "/images/rolls-mixed.jpg"],
    base: "Трикотажное полотно комбинированное (х/б + п/э)",
  },
  {
    id: "tp-260",
    slug: "tp-260",
    sku: "ТП-260",
    name: "Трикотаж комбинированный ТП-260",
    category: "trikotazh",
    density: 260,
    glueGsm: "40–45",
    widthNote: "120–130 см",
    rollQty: 100,
    rollUnit: "m2",
    priceUnit: "m2",
    onOrder: true,
    image: "/images/rolls-mixed.jpg",
    images: ["/images/rolls-mixed.jpg", "/images/knit-5.jpg"],
    base: "Трикотажное полотно комбинированное (х/б + п/э)",
  },
  {
    id: "porolon-2",
    slug: "porolon-2",
    sku: "П-2",
    name: "Поролон термоклеевой 2 мм",
    category: "porolon",
    density: 25,
    glueGsm: "40–45",
    widthCm: 150,
    rollQty: 75,
    rollUnit: "m2",
    price: 57,
    priceUnit: "m2",
    image: "/images/foam-white.jpg",
    images: ["/images/foam-white.jpg", "/images/foam-2.jpg", "/images/foam-rolls.jpg"],
    thicknessMm: 2,
    twoSided: false,
    base: "Поролон",
  },
  {
    id: "porolon-2-2s",
    slug: "porolon-2-dvustoronniy",
    sku: "П-2 ДС",
    name: "Поролон термоклеевой 2 мм, двухсторонний",
    category: "porolon",
    density: 25,
    glueGsm: "40–45 с каждой стороны",
    widthCm: 150,
    rollQty: 75,
    rollUnit: "m2",
    price: 77,
    priceUnit: "m2",
    image: "/images/foam-2.jpg",
    images: ["/images/foam-2.jpg", "/images/foam-white.jpg"],
    thicknessMm: 2,
    twoSided: true,
    base: "Поролон",
  },
  {
    id: "porolon-3",
    slug: "porolon-3",
    sku: "П-3",
    name: "Поролон термоклеевой 3 мм",
    category: "porolon",
    density: 25,
    glueGsm: "40–45",
    widthCm: 150,
    rollQty: 50,
    rollUnit: "m2",
    price: 66,
    priceUnit: "m2",
    image: "/images/foam-beige.jpg",
    images: ["/images/foam-beige.jpg", "/images/foam-3.jpg", "/images/foam-rolls.jpg"],
    popular: true,
    thicknessMm: 3,
    twoSided: false,
    base: "Поролон",
  },
  {
    id: "porolon-3-2s",
    slug: "porolon-3-dvustoronniy",
    sku: "П-3 ДС",
    name: "Поролон термоклеевой 3 мм, двухсторонний",
    category: "porolon",
    density: 25,
    glueGsm: "40–45 с каждой стороны",
    widthCm: 150,
    rollQty: 50,
    rollUnit: "m2",
    price: 86,
    priceUnit: "m2",
    image: "/images/foam-3.jpg",
    images: ["/images/foam-3.jpg", "/images/foam-beige.jpg"],
    thicknessMm: 3,
    twoSided: true,
    base: "Поролон",
  },
  {
    id: "porolon-4",
    slug: "porolon-4",
    sku: "П-4",
    name: "Поролон термоклеевой 4 мм",
    category: "porolon",
    density: 25,
    glueGsm: "40–45",
    widthCm: 150,
    rollQty: 45,
    rollUnit: "m2",
    price: 72,
    priceUnit: "m2",
    image: "/images/foam-4.jpg",
    images: ["/images/foam-4.jpg", "/images/foam-rolls.jpg"],
    thicknessMm: 4,
    twoSided: false,
    base: "Поролон",
  },
  {
    id: "porolon-4-2s",
    slug: "porolon-4-dvustoronniy",
    sku: "П-4 ДС",
    name: "Поролон термоклеевой 4 мм, двухсторонний",
    category: "porolon",
    density: 25,
    glueGsm: "40–45 с обеих сторон",
    widthCm: 150,
    rollQty: 45,
    rollUnit: "m2",
    price: 92,
    priceUnit: "m2",
    image: "/images/foam-rolls.jpg",
    images: ["/images/foam-rolls.jpg", "/images/foam-4.jpg"],
    thicknessMm: 4,
    twoSided: true,
    base: "Поролон",
  },
  {
    id: "porolon-5",
    slug: "porolon-5",
    sku: "П-5",
    name: "Поролон термоклеевой 5 мм",
    category: "porolon",
    density: 25,
    glueGsm: "40–45",
    widthCm: 150,
    rollQty: 45,
    rollUnit: "m2",
    price: 81,
    priceUnit: "m2",
    image: "/images/foam-5.jpg",
    images: ["/images/foam-5.jpg", "/images/foam-rolls.jpg"],
    thicknessMm: 5,
    twoSided: false,
    base: "Поролон",
  },
  {
    id: "porolon-5-2s",
    slug: "porolon-5-dvustoronniy",
    sku: "П-5 ДС",
    name: "Поролон термоклеевой 5 мм, двухсторонний",
    category: "porolon",
    density: 25,
    glueGsm: "40–45 с обеих сторон",
    widthCm: 150,
    rollQty: 45,
    rollUnit: "m2",
    price: 100,
    priceUnit: "m2",
    image: "/images/foam-rolls.jpg",
    images: ["/images/foam-rolls.jpg", "/images/foam-5.jpg"],
    thicknessMm: 5,
    twoSided: true,
    base: "Поролон",
  },
];

export const CLIENTS = [
  { name: "Юничел", note: "Обувная фабрика" },
  { name: "Вестфалика", note: "Обувное производство" },
  { name: "Калужская обувная", note: "Фабрика" },
];

export const CARRIERS = ["ПЭК", "Деловые линии", "Байкал Сервис", "Энергия"];

export const FAQ = [
  {
    q: "Как узнать, есть ли в наличии интересующий меня материал?",
    a: "Свяжитесь с нами любым удобным способом — почта, телефон, WhatsApp или форма заявки на сайте. Контакты — в разделе «Контакты».",
  },
  {
    q: "Как заказать материал?",
    a: "Соберите заявку в каталоге или напишите на почту / в мессенджер. Укажите артикул, цвет, количество рулонов и город доставки.",
  },
  {
    q: "Какова минимальная партия?",
    a: "Минимальная партия — 1 рулон любого материала.",
  },
  {
    q: "Осуществляете ли вы отправку в регионы? Сколько это стоит?",
    a: "Да. Мы работаем с крупными транспортными компаниями России. Вы оплачиваете только перевозку от терминала выбранной ТК в Москве до пункта назначения. Доставку до филиала ТК в Москве берём на себя. Примерную стоимость можно рассчитать на сайте ТК или через нашего менеджера.",
  },
  {
    q: "Можно ли нанести клей на свой материал?",
    a: "Оборудование позволяет нанести термоклеевой слой практически на любой материал по вашему желанию, а также дублировать и триплировать различные материалы друг с другом.",
  },
  {
    q: "Какой клей вы используете?",
    a: "Низкотемпературные клеи на основе сополимера этиленвинилацетата (EVA) и только качественные материалы основ.",
  },
];

export const POSTS = [
  {
    slug: "chto-takoe-termokleevye-prokladki",
    title: "Что такое термоклеевые прокладочные материалы",
    date: "12 марта 2026",
    kicker: "О материале",
    excerpt:
      "Прокладка с термоклеем держит форму детали и ускоряет сборку. Разбираем, чем бязь отличается от спанбонда и когда нужен поролон.",
    image: "/images/fabric-dots.jpg",
    body: [
      "Термоклеевая прокладка — это основа (ткань, трикотаж, спанбонд или поролон), на которую нанесён клеевой слой. При нагреве и прессовании клей активируется и соединяет прокладку с верхом изделия.",
      "ТЕРМОТЕКС производит такие материалы с 1993 года на собственном производстве в Любучанах. В работе — низкотемпературные клеи на основе сополимера этиленвинилацетата: они щадяще относятся к лицевым материалам и дают стабильный привес 40–45 г/м².",
      "Тканые основы (бязь, диагональ, двунитка) берут, когда нужна прочность и привычная текстильная рука. Нетканые — когда важны лёгкость и цена. Трикотаж держит форму мягких деталей. Поролон добавляет объём и амортизацию.",
    ],
  },
  {
    slug: "byaz-i-spanbond",
    title: "Бязь или спанбонд: что выбрать",
    date: "4 февраля 2026",
    kicker: "Сравнение",
    excerpt:
      "Два самых ходовых материала в наличии. Сравниваем плотность, ширину, цену и типичные задачи в обуви и швейке.",
    image: "/images/spanbond-white.jpg",
    body: [
      "Бязь термоклеевая БТ-125 и БТ-142 — тканая хлопчатобумажная основа шириной 162 см. Рулон 100 м². Её выбирают, когда нужна классическая прокладка с понятной усадкой и прочной структурой.",
      "Спанбонд СТ-80, СТ-100, СТ-130 и СТ-150 — нетканая основа шириной 160 см, тоже по 100 м² в рулоне. Три цвета: белый, бежевый, чёрный. Он легче, ровнее кроится и обычно дешевле при той же площади.",
      "Практическое правило: для ответственных узлов и традиционных конструкций — бязь; для массового кроя, подкладки и экономии веса — спанбонд. Если сомневаетесь, возьмите по рулону каждого — минимальная партия как раз один рулон.",
    ],
  },
  {
    slug: "dostavka-po-rossii",
    title: "Как мы отгружаем в регионы",
    date: "18 января 2026",
    kicker: "Логистика",
    excerpt:
      "Самовывоз со склада в Любучанах или доставка до терминала ТК в Москве за наш счёт. Дальше — ПЭК, Деловые линии, Байкал Сервис или Энергия.",
    image: "/images/hero.jpg",
    body: [
      "Склад и производство находятся в одном месте: посёлок Любучаны, Чеховский район, 40 км от МКАД. Самовывоз — с понедельника по пятницу, склад открыт с 9:00 до 16:00 без перерыва.",
      "Если нужен регион, мы бесплатно довозим заказ до филиала транспортной компании в Москве. Дальше вы оплачиваете только плечо «Москва — ваш город». Работаем с ПЭК, «Деловыми линиями», «Байкал Сервисом» и «Энергией».",
      "Оплата — безналичный расчёт. Чтобы менеджер сразу посчитал доставку, в заявке укажите город, артикулы и число рулонов.",
    ],
  },
];

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProducts(opts?: {
  category?: CategoryId;
  q?: string;
  availability?: "all" | "stock" | "order";
}) {
  let list = PRODUCTS.slice();
  if (opts?.category) list = list.filter((p) => p.category === opts.category);
  if (opts?.availability === "stock") list = list.filter((p) => !p.onOrder);
  if (opts?.availability === "order") list = list.filter((p) => p.onOrder);
  const q = opts?.q?.trim().toLowerCase();
  if (q) {
    list = list.filter((p) =>
      [p.name, p.sku, p.base, p.note ?? ""].join(" ").toLowerCase().includes(q),
    );
  }
  return list;
}

export function relatedProducts(product: Product, limit = 3) {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(
    0,
    limit,
  );
}

export function rollLabel(p: Product) {
  return p.rollUnit === "lm" ? `${p.rollQty} пог. м` : `${p.rollQty} м²`;
}

export function widthLabel(p: Product) {
  if (p.widthNote) return p.widthNote;
  if (p.widthCm) return `${p.widthCm} см`;
  return "по запросу";
}
