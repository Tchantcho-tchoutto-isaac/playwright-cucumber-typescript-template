import { Page, Locator, expect } from '@playwright/test';

export class AdminPage {

  private page:Page;

  constructor(page: Page) {
    this.page = page;
  }
    elements = {
      clicAddPost: () => this.page.locator('a:has-text("Add")'),
      getTitlePost: () => this.page.locator('h1')
    }

  async ClicOnAddPost(){
      await this.elements.clicAddPost().click();
  }

  async TitrePostPage(){
      await this.page.locator('h1');
  }

}

export default AdminPage;


