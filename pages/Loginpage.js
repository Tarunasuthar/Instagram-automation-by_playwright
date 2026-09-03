export class Loginpage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('[name="email"]');
    this.password = page.locator('[name="pass"]');
    this.submit = page.locator('button._aswp._aswr._aswu._asw_._asx2');
    this.saveInfo = page.locator('button:has-text("Save info")');
  }

  async goto() {
    await this.page.goto("https://www.instagram.com/");
  }
  // login in the instagram
  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
  // save information of profile 
  async saveLoginInfo() {
    await this.saveInfo.waitFor({ state: 'visible', timeout: 15000 });
    await this.saveInfo.click();
  }
}
