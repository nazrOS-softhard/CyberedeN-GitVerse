import rostn from "@/assets/rostn.jpg";
import drone from "@/assets/item-drone.jpg";
import visor from "@/assets/item-visor.jpg";
import arm from "@/assets/item-arm.jpg";
import rostnFull from "@/assets/rostn-full.png"; 


export type Sensor = { label: string; unit: string; value: number; min: number; max: number };
export type Slider = { label: string; value: number; min: number; max: number; unit: string };

export type Item = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "in_stock" | "low" | "preorder";
  image: string;
  short: string;
  description: string;
  sensors: Sensor[];
  sliders: Slider[];
};

export const items: Item[] = [
  {
    id: "neurochip-x9",
    name: "growthN",
    category: "Биотехнологии",
    price: 248000,
    status: "in_stock",
    image: rostn,
    expandedImage: rostnFull,
    short: "интеллектуальная система контролируемого культивирования",
    description:
      "growthN — урбанистическая интеллектуальная система контролируемого культивирования, разработанная внутри экосистемы nazrOS для автономного выращивания растительных культур в условиях цифровой городской среды. Обеспечивает поддержание биобаланса, автоматический контроль климата и автономное производство ресурсов.",
    sensors: [
      { label: "Зелень. ядра", unit: "°C", value: 38, min: 20, max: 80 },
      { label: "Микрозелень", unit: "%", value: 42, min: 0, max: 100 },
      { label: "Грибы", unit: "dBm", value: -52, min: -100, max: 0 },
    ],
    sliders: [
      { label: "Тактовая частота", value: 3.4, min: 1, max: 6, unit: "ГГц" },
      { label: "Мощность", value: 65, min: 10, max: 100, unit: "%" },
      { label: "Охлаждение", value: 50, min: 0, max: 100, unit: "%" },
    ],
  },
  {
    id: "drone-vex",
    name: "Дрон-разведчик VEX-02",
    category: "Дроны",
    price: 8900,
    status: "low",
    image: drone,
    short: "Бесшумный микро-дрон со стелс-покрытием.",
    description:
      "Радиус автономной работы 14 км, тепловизор, активное шумоподавление и канал прямой передачи в HUD оператора. Идеален для разведки в плотной городской застройке.",
    sensors: [
      { label: "Батарея", unit: "%", value: 88, min: 0, max: 100 },
      { label: "Высота", unit: "м", value: 120, min: 0, max: 500 },
      { label: "Шум", unit: "дБ", value: 18, min: 0, max: 60 },
    ],
    sliders: [
      { label: "Скорость", value: 40, min: 0, max: 120, unit: "км/ч" },
      { label: "Стелс-режим", value: 70, min: 0, max: 100, unit: "%" },
      { label: "Камера ISO", value: 800, min: 100, max: 6400, unit: "ISO" },
    ],
  },
  {
    id: "visor-aurora",
    name: "AR-визор «Aurora»",
    category: "Оптика",
    price: 6400,
    status: "in_stock",
    image: visor,
    short: "Голографический визор с трекингом глаз 240 Гц.",
    description:
      "Двухслойный OLED, обнаружение микро-саккад и адаптивный фокус. Поддерживает overlay-протокол nazrOS Glassware. Заряд: 14 ч активной работы.",
    sensors: [
      { label: "Яркость", unit: "нт", value: 1200, min: 100, max: 3000 },
      { label: "Темп.", unit: "°C", value: 34, min: 20, max: 60 },
      { label: "Заряд", unit: "%", value: 73, min: 0, max: 100 },
    ],
    sliders: [
      { label: "Прозрачность HUD", value: 60, min: 0, max: 100, unit: "%" },
      { label: "Контраст", value: 75, min: 0, max: 100, unit: "%" },
      { label: "Refresh", value: 240, min: 60, max: 360, unit: "Гц" },
    ],
  },
  {
    id: "arm-vermillion",
    name: "Кибер-протез «Vermillion»",
    category: "Протезы",
    price: 24800,
    status: "preorder",
    image: arm,
    short: "Полноценная кибернетическая рука с тактильной обратной связью.",
    description:
      "Углеродный скелет, 32 микро-сервопривода, тактильный слой с разрешением 1 мм. Подключается к Neurochip X-9 без дополнительного драйвера.",
    sensors: [
      { label: "Усилие", unit: "Н", value: 220, min: 0, max: 800 },
      { label: "Темп.", unit: "°C", value: 31, min: 20, max: 70 },
      { label: "Калибровка", unit: "%", value: 96, min: 0, max: 100 },
    ],
    sliders: [
      { label: "Сила хвата", value: 55, min: 0, max: 100, unit: "%" },
      { label: "Скорость отклика", value: 80, min: 0, max: 100, unit: "%" },
      { label: "Чувствительность", value: 65, min: 0, max: 100, unit: "%" },
    ],
  },
];

export type Article = {
  id: string;
  title: string;
  topic: "Кибербезопасность" | "Геймдев" | "Киберспорт" | "Хакинг" | "Цифровая этика";
  excerpt: string;
  body: string;
  readTime: number;
};

export const articles: Article[] = [
  { id: "a1", title: "Архитектура нулевого доверия в 2090", topic: "Кибербезопасность", excerpt: "Почему периметр умер и что пришло на смену.", body: "Zero Trust как практика, а не маркетинг. Сегментация на уровне нейронных запросов, политики на основе поведения и непрерывная аттестация контекстов. Разбираем кейсы корпораций Aoyama и SynLine.", readTime: 7 },
  { id: "a2", title: "Гайд по эксплойтам нейро-API", topic: "Хакинг", excerpt: "Чёрный рынок патчей: где грань.", body: "Реверс-инжиниринг прошивок Neurochip X-9 и анализ цепочки CVE-2090-1337. Этические границы и правовые риски.", readTime: 12 },
  { id: "a3", title: "Сделано в подвале: инди-игры с нейро-контролем", topic: "Геймдев", excerpt: "Шесть команд, изменивших индустрию.", body: "От прототипа в Unity до релиза с BCI-контроллером за 4 месяца. Истории, бюджеты, фейлы.", readTime: 9 },
  { id: "a4", title: "Лига Nexus Pro: разбор финала", topic: "Киберспорт", excerpt: "Как «Чёрный сурикен» обыграл фаворитов.", body: "Покадровый анализ решающего матча, метрики реакции и неожиданная тактика капитана.", readTime: 6 },
  { id: "a5", title: "Кто владеет твоими снами?", topic: "Цифровая этика", excerpt: "Сны как данные — правовой вакуум.", body: "После анонса DreamCache корпорации получили доступ к слоям REM-памяти. Что говорят регуляторы Сектора 4.", readTime: 10 },
  { id: "a6", title: "ICE-машины 2090: что под капотом", topic: "Кибербезопасность", excerpt: "Активная защита: от ловушек до контратак.", body: "Технический разбор современных Intrusion Countermeasures Electronics и их слабых мест.", readTime: 8 },
];

export type Event = {
  id: string;
  title: string;
  type: "Стрим" | "Турнир" | "Митап" | "Хакатон";
  date: string;
  location: string;
  description: string;
};

export const events: Event[] = [
  { id: "e1", title: "Nexus Pro: Гранд-финал", type: "Турнир", date: "12.08.2090", location: "Арена Сектор-7", description: "Финальная битва за титул чемпиона Лиги Nexus Pro. Призовой фонд 4.2M XP." },
  { id: "e2", title: "Hack the Spire", type: "Хакатон", date: "20.08.2090", location: "Online · Darknet", description: "48 часов на взлом полигона корпорации Aoyama. Лучшие 10 команд получают доступ к закрытой бете nazrOS." },
  { id: "e3", title: "Стрим: разбор VEX-02", type: "Стрим", date: "05.08.2090", location: "Live · Channel ZERO", description: "Полевые испытания нового дрона. Зрители влияют на сценарий миссии." },
  { id: "e4", title: "Митап нейро-инженеров", type: "Митап", date: "28.07.2090", location: "Бар «Drift», Сектор-4", description: "Открытая встреча. Доклады, бета-импланты, оффлайн-знакомства." },
  { id: "e5", title: "DreamCache: дискуссия", type: "Митап", date: "01.09.2090", location: "Купол Этики", description: "Право на сны. Юристы, философы и инженеры спорят о будущем приватности." },
  { id: "e6", title: "Indie Neuro Jam", type: "Хакатон", date: "15.09.2090", location: "Online", description: "Создай игру с нейроконтроллером за 72 часа. Топ-3 публикуются в маркете nazrOS." },
];

export type Cyber = { id: string; handle: string; rank: string; xp: number; status: "online" | "ghost" | "offline" };
export const cybers: Cyber[] = [
  { id: "c1", handle: "@nazr.os", rank: "Архитектор", xp: 482300, status: "online" },
  { id: "c2", handle: "@ghost_in_static", rank: "Декер", xp: 318940, status: "ghost" },
  { id: "c3", handle: "@vex.pilot", rank: "Оператор", xp: 204400, status: "online" },
  { id: "c4", handle: "@aurora.eye", rank: "Аналитик", xp: 152780, status: "offline" },
  { id: "c5", handle: "@solaris.kid", rank: "Геймдев", xp: 98220, status: "online" },
  { id: "c6", handle: "@spike.rin", rank: "Курьер", xp: 64110, status: "ghost" },
];
