import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { expect } from '@playwright/test';
import { PostPage } from '../pages/PostPage';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let adminPage: AdminPage;
let postPage: PostPage;

Given("JE SUIS SUR LA PAGE D'ACCUEIL", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('JE ME LOGUE AVEC UN COMPTE EXISTANT', async function () {
  await loginPage.login('testeur_integration', 'testeur_qa'); // Remplace avec les bonnes credentials
});

When('I click on the post button', async function () {
  adminPage = new AdminPage(page);
  await adminPage.ClicOnAddPost();
});

Then('JE remplit le formuaire avec les informations suivantes  titre {string}  contenue {string} et je soumet', async (titre: string, contenu: string) => {
  postPage = new PostPage(page);
  await postPage.fillTitle(titre);
  await postPage.fillContent(contenu);
  await postPage.clickSave();
});

Then('je suis redirigé vers la page admin et le message de succes s affiche', async () => {
  const successMessage = page.locator('.success'); // Remplace par le bon sélecteur CSS
  await expect(successMessage).toBeVisible();
  await browser.close();
});
