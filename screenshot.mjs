import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  { url: "http://localhost:3000", name: "landing" },
  { url: "http://localhost:3000/jogos", name: "jogos" },
  { url: "http://localhost:3000/jogos/quiz", name: "quiz" },
  { url: "http://localhost:3000/cadastro", name: "cadastro" },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const p of pages) {
  const page = await context.newPage();
  await page.goto(p.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const out = path.join(__dirname, `screenshot-${p.name}.png`);
  await page.screenshot({ path: out, fullPage: true });
  console.log(`✓ ${p.name} → ${out}`);
  await page.close();
}

await browser.close();
