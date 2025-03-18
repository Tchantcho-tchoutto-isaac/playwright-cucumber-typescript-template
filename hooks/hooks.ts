import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext(); // Créer un contexte
  page = await context.newPage(); // Associer une page au contexte

  // Démarrer le tracing pour enregistrer les actions du test
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  });

  // Ajouter les objets Playwright à `this` pour les utiliser dans les tests
  this.browser = browser;
  this.context = context;
  this.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    await context.tracing.stop({ path: `traces/trace-${scenario.pickle.name}.zip` });
  } else {
    await context.tracing.stop();
  }

  // Fermer le navigateur après le test
  await browser.close();
});
