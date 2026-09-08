export class Loginpage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.submit = page.getByRole('button', { name: 'Log in', exact: true });
    this.saveInfo = page.getByRole('button', { name: 'Save info' });
  }

  async goto() {
    await this.page.goto('https://www.instagram.com/');
    await this.username.waitFor({ state: 'visible' });
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }

  async saveLoginInfo() {
    // this dialog doesn't always appear
    if (await this.saveInfo.isVisible({ timeout: 10000 }).catch(() => false)) {
      await this.saveInfo.click();
    }
  }
}
