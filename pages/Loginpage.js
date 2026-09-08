import { expect } from '@playwright/test';

export class Loginpage {
  constructor(page) {
    // Instagram serves two login variants: the classic page uses
    // name="username"/"password", the newer ?flo=true flow uses "email"/"pass".
    this.username = page.locator('input[name="username"], input[name="email"]');
    this.password = page.locator('input[type="password"]');
    // Submit is a <div role="button" aria-label="Log in"> in the new flow
    // and a real <button> in the classic one — getByRole covers both.
    this.submit = page.getByRole('button', { name: 'Log in', exact: true });
    this.saveInfo = page.getByRole('button', { name: 'Save info' });
  }

  async goto() {
    await this.page.goto('https://www.instagram.com/');
    await expect(this.username).toBeEditable({ timeout: 30000 });
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await expect(this.submit).toBeEnabled({ timeout: 10000 });
    await this.submit.click();
  }

  async saveLoginInfo() {
    const shown = await this.saveInfo
      .isVisible({ timeout: 10000 })
      .catch(() => false);
    if (shown) await this.saveInfo.click();
  }
}
