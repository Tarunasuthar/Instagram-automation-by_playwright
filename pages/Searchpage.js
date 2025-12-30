export class Searchpage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search"]');
    this.resultsDialog = page.locator('div[role="dialog"]:visible');
  }
  // search profile
  async searchUser(username) {
    await this.searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.searchInput.fill(username);
  }
  // open first post
  async openFirstResult(username) {
    const user = this.page
      .locator('a[role="link"]', {
        hasText: username
       }).first();
    

    await user.waitFor({ state: 'visible', timeout: 10000 });
    await user.click();
  }
}
