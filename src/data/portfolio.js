export const data = {
  name: "Турко Данил",
  title: "// frontend developer · react · vue 3 · node.js",
  contacts: [
    { label: "github.com/danilturko4-crypto", href: "https://github.com/danilturko4-crypto", color: "#4f8ef7" },
    { label: "Telegram: @axyleneta", href: "https://t.me/axyleneta", color: "#7dd3a8" },
    { label: "danilturko4@gmail.com", href: "mailto:danilturko4@gmail.com", color: "#7dd3a8" },
  ],
about: [
    { text: "Занимаюсь разработкой пользовательских интерфейсов на " },
    { text: "React и Vue 3", bold: true },
    { text: ". Реализую макеты из Figma с вниманием к деталям, выстраиваю компонентную архитектуру с прицелом на масштабируемость. При необходимости проектирую серверную часть: " },
    { text: "REST API на Node.js / Express", bold: true },
    { text: ", работа с MongoDB, настройка авторизации. Привык разбираться в задачах самостоятельно — если прихожу с вопросом, то уже с гипотезами и тем, что успел проверить. Готов к новым задачам и техническим вызовам." },
  ],
  stack: [
    {
      group: "Frontend",
      color: "#4f8ef7",
      tags: ["JavaScript ES6+", "TypeScript", "React", "Vue 3", "HTML5", "SCSS", "Tailwind"],
    },
    {
      group: "State / Data",
      color: "#4f8ef7",
      tags: ["Redux", "Pinia", "Context API", "Axios"],
    },
    {
      group: "Backend",
      color: "#7dd3a8",
      tags: ["Node.js", "Express", "REST API", "JWT", "MongoDB"],
    },
    {
      group: "Инструменты",
      color: "#7dd3a8",
      tags: ["Vite", "Webpack", "Git", "Figma", "Jest"],
    },
  ],
  projects: [
    {
      name: "Parallax 3D Lens Effect",
      badge: "Vanilla JS",
      href: "https://github.com/danilturko4-crypto/parallax-3d",
      desc: "Интерактивная hero-секция с 3D-параллаксом на чистом HTML/CSS/JS без библиотек. Mouse-tracking через CSS-переменные, Canvas-дождь из 140 капель, полный адаптив без media-запросов.",
      tags: ["HTML5", "CSS3", "Vanilla JS", "Canvas API", "3D transforms"],
    },
    {
      name: "Hoster.kz",
      badge: "SCSS",
      href: "https://github.com/danilturko4-crypto/Hoster.kz",
      desc: "Верстка сайта хостинг-провайдера по макету Figma. Pixel-perfect, полный адаптив, семантическая HTML-структура. Написан на чистом SCSS без UI-фреймворков.",
      tags: ["HTML5", "SCSS", "Адаптив", "Figma → Code"],
    },
    {
      name: "Portfolio Site",
      badge: "Vue 3",
      href: null,
      desc: "Персональное портфолио на Vue 3 + Composition API. Реализован клиентский роутинг, анимации переходов, адаптивная grid-сетка.",
      tags: ["Vue 3", "Composition API", "Vue Router", "SCSS"],
    },
    {
      name: "JWT Auth Admin Panel",
      badge: "Fullstack",
      href: "https://github.com/danilturko4-crypto/Jwt-auth-admin-panels",
      demo: "https://jwt-auth-admin-panels-f8vt.vercel.app/",
      desc: "Fullstack: авторизация с JWT-токенами, защищённые роуты, административная панель. TypeScript на фронте, Express + MongoDB на бэке.",
      tags: ["TypeScript", "JWT", "Express", "MongoDB"],
    },
  ],
  workStyle: [
    "Верстка по макетам Figma без потерь",
    "Git-flow: ветки, ревью, нормальные коммиты",
    "Дебаг через DevTools и Node debugger",
    "Задачи в Jira/Trello, дедлайны соблюдаю",
    "Базовые тесты на Jest",
    "Решаю проблемы самостоятельно",
    "CORS, .env, связка фронт↔бэк",
    "Открыт к код-ревью и правкам",
  ],
};