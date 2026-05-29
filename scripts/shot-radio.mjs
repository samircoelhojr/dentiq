import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1100 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

await page.goto("http://localhost:3000/jogos/radiologia", { waitUntil: "networkidle" });
await page.screenshot({ path: "scripts/radio-1-config.png", fullPage: true });

await page.getByRole("button", { name: /Iniciar/ }).click();
await page.waitForTimeout(800);
await page.screenshot({ path: "scripts/radio-2-question.png", fullPage: true });

// answer first option
const opts = page.locator("main button").filter({ hasText: /^[A-D]/ });
// click the first answer option (letter buttons in the options list)
await page.locator("h2").first().waitFor();
const answerButtons = page.locator("main >> div.flex.flex-col.gap-3 > button");
await answerButtons.first().click();
await page.waitForTimeout(600);
await page.screenshot({ path: "scripts/radio-3-answered.png", fullPage: true });

console.log("CONSOLE_ERRORS:", JSON.stringify(errors));
await browser.close();
console.log("done");
