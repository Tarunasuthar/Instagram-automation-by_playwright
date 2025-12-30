export class Homepage {
  constructor(page) {
    this.page = page;
    this.homeNav = page.locator('nav');
    this.searchIcon = page.locator('svg[aria-label="Search"]');
  }
  
  async waitForHome() {
    await this.homeNav.waitFor({ state: 'visible', timeout: 15000 });
  }
  // open search bar
  async openSearch() {
    await this.searchIcon.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchIcon.click();
  }
}
