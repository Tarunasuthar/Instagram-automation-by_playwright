
import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Searchpage } from '../pages/Searchpage';
 
test('search a profile and open the first post', async ({ page }) => {
  const loginPage = new Loginpage(page);
  const homePage = new Homepage(page);
  const searchPage = new Searchpage(page);
 
  await loginPage.goto();
  await loginPage.login(process.env.IG_USER, process.env.IG_PASS);
  await loginPage.saveLoginInfo();
 
  await homePage.waitForHome();
  await homePage.openSearch();
 
  await searchPage.searchUser('rohitsharma45');
  await searchPage.openFirstResult('rohitsharma45');
 
  await expect(page.getByRole('main')).toBeVisible();
});
 
