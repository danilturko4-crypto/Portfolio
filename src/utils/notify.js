const TOKEN = import.meta.env.VITE_TG_TOKEN;
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;

export function notifyVisitor() {
  if (!TOKEN || !CHAT_ID) return;

  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });
  const ref = document.referrer ? `Откуда: ${document.referrer}` : "Прямой заход";
  const ua = navigator.userAgent;
  const device = /Mobile|Android|iPhone/i.test(ua) ? "📱 Мобильный" : "🖥️ Десктоп";

  const text = `👀 *Кто-то открыл портфолио!*\n\n🕐 ${time}\n${device}\n🔗 ${ref}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
  }).catch(() => {});
}