import { expect } from '@playwright/test';

export class Loginpage {
  constructor(page) {
    this.page = page;

    // Instagram A/B tests the login page — one variant says "Mobile number,
    // username or email", another adds "address". Regex matches both.
    this.username = page.getByPlaceholder(/username or email/i);
    this.password = page.getByPlaceholder(/password/i);

    // The "Log in" control is a <div role="button">, not a <button>, so a
    // tag-based selector never matches it. Match by role instead.
    this.submit = page.getByRole('button', { name: 'Log in', exact: true });

    this.saveInfo = page.getByRole('button', { name: 'Save info' });
  }

  async goto() {
    await this.page.goto('https://www.instagram.com/');
    // The field renders before Instagram's JS hydrates it. Waiting for
    // "visible" isn't enough — fill() needs it editable.
    await expect(this.username).toBeEditable({ timeout: 30000 });
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    // Button carries aria-disabled="true" until both fields have content.
    await expect(this.submit).toBeEnabled({ timeout: 10000 });
    await this.submit.click();
  }

  async saveLoginInfo() {
    // This dialog doesn't always appear, so don't fail when it's absent.
    const shown = await this.saveInfo
      .isVisible({ timeout: 10000 })
      .catch(() => false);
    if (shown) await this.saveInfo.click();
  }
}
