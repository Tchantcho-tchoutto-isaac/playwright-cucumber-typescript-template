import { Page } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  elements = {
    usernameInput: () => this.page.locator('input[name="username"]'),
    passwordInput: () => this.page.locator('input[name="password"]'),
    submitButton: () => this.page.locator('input[type="submit"]'),
    dashboard: () => this.page.locator('.dashboard'),
  };

  async goto() {
    await this.page.goto('http://192.168.1.95:9091/admin/login');
  }

  async login(username: string, password: string) {
    await this.elements.usernameInput().fill(username);
    await this.elements.passwordInput().fill(password);
    await this.elements.passwordInput().press('Enter');
  }

  async isDashboardVisible(): Promise<boolean> {
    return await this.page.isVisible('.dashboard');
  }

}

export default LoginPage;

