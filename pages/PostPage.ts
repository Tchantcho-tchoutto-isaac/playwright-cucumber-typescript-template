import { Page, Locator, expect } from '@playwright/test';

export class PostPage {
  private page: Page;

  // Utilisation de l'objet Elements pour encapsuler les locators
  elements = {
    addPostButton: () => this.page.locator('.addlink'),
    titleInput: () => this.page.locator('#id_title'),
    contentTextarea: () => this.page.locator('#id_content'),
    saveButton: () => this.page.locator('input[name="_save"]'),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://192.168.1.95:9091/admin/');
  }

 
  async clickSave() {
    await this.elements.saveButton().click();
  }


  async fillTitle(title: string) {
    await this.elements.titleInput().fill(title);
}
async fillContent(content: string) {
    await this.elements.contentTextarea().fill(content);
}

}

export default PostPage;