import { expect } from '@playwright/test';

export class Searchpage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
  }

  async searchUser(username) {
    await expect(this.searchInput).toBeEditable({ timeout: 15000 });
    await this.searchInput.fill(username);
  }

  async openFirstResult(username) {
    const result = this.page.getByRole('link', { name: username }).first();
    await expect(result).toBeVisible({ timeout: 15000 });
    await result.click();
    // Replaces the old waitForTimeout(2000) — waits for the real thing
    // and asserts it at the same time.
    await expect(this.page).toHaveURL(new RegExp(username));
  }
}
