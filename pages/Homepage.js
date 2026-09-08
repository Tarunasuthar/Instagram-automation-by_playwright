import { expect } from '@playwright/test';

export class Homepage {
  constructor(page) {
    this.page = page;
    this.homeNav = page.getByRole('navigation');
    this.searchLink = page.getByRole('link', { name: 'Search' });
  }

  async waitForHome() {
    await expect(this.homeNav).toBeVisible({ timeout: 15000 });
  }

  async openSearch() {
    await this.searchLink.click();
  }
}
