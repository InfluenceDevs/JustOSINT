const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('http://localhost:3456', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  const info = await page.evaluate(() => {
    const card = document.querySelector('.tool-card');
    if (!card) return { error: 'no card' };
    const get = sel => {
      const el = card.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return { h: el.offsetHeight, w: el.offsetWidth, display: cs.display, color: cs.color, bg: cs.backgroundColor, vis: cs.visibility, oh: cs.overflow };
    };
    return {
      cardH: card.offsetHeight, cardW: card.offsetWidth, cardOF: getComputedStyle(card).overflow,
      cardTop: get('.card-top'),
      identity: get('.card-identity'),
      titleWrap: get('.card-title-wrap'),
      title: get('.card-title'),
      titleText: card.querySelector('.card-title') ? card.querySelector('.card-title').textContent.trim().slice(0,30) : null,
      badges: get('.card-badges'),
      badgesHTML: card.querySelector('.card-badges') ? card.querySelector('.card-badges').innerHTML.slice(0,100) : null,
      desc: get('.card-desc'),
      descText: card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent.trim().slice(0,50) : null,
      foot: get('.card-foot'),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
