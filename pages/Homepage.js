import { expect } from '@playwright/test';

export class Homepage {
  constructor(page) {
    this.page = page;
    this.homeNav = page.getByRole('navigation').first();
    // The search control is a link wrapping an SVG. Clicking the SVG itself
    // often misses, because the handler sits on the parent.
    this.searchLink = page.getByRole('link', { name: 'Search' });
  }

  async waitForHome() {
    await expect(this.homeNav).toBeVisible({ timeout: 30000 });
  }

  async openSearch() {
    await this.searchLink.click();
  }
}
