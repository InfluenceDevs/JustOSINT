const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://localhost:3456', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));
  
  const info = await page.evaluate(() => {
    const card = document.querySelector('.tool-card');
    if (!card) return { error: 'no .tool-card found', gridHTML: document.getElementById('toolGrid')?.innerHTML?.slice(0, 200) };
    const g = sel => {
      const el = card.querySelector(sel);
      if (!el) return `NOT FOUND`;
      const cs = getComputedStyle(el);
      return { h: el.offsetHeight, w: el.offsetWidth, display: cs.display, color: cs.color, bg: cs.backgroundColor, innerHTML: el.innerHTML.slice(0, 60) };
    };
    return {
      cardH: card.offsetHeight, cardW: card.offsetWidth,
      cardOverflow: getComputedStyle(card).overflow,
      cardChildren: card.children.length,
      cardTop: g('.card-top'),
      identity: g('.card-identity'),
      titleWrap: g('.card-title-wrap'),
      title: g('.card-title'),
      titleText: card.querySelector('.card-title a')?.textContent,
      badges: g('.card-badges'),
      signals: g('.card-signals'),
      desc: g('.card-desc'),
      foot: g('.card-foot'),
    };
  });
  
  console.log(JSON.stringify(info, null, 2));
  
  // Also take a screenshot
  await page.screenshot({ path: 'E:/JustOSINT/screenshot_debug.png', fullPage: false });
  console.log('Screenshot saved');
  
  await browser.close();
})().catch(e => console.error('Error:', e.message));
