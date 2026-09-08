import { expect } from '@playwright/test';

export class Searchpage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
  }

  async searchUser(username) {
    await this.searchInput.fill(username);
  }

  async openFirstResult(username) {
    const result = this.page.getByRole('link', { name: username }).first();
    await expect(result).toBeVisible({ timeout: 10000 });
    await result.click();
    await expect(this.page).toHaveURL(new RegExp(username));
  }
}
