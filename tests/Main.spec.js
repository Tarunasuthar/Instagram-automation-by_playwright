import { test } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Searchpage } from '../pages/Searchpage';
import { Profilepage } from '../pages/Profilepage';

test('login automation', async ({ page }) => {

  const loginPage = new Loginpage(page);
  const homePage = new Homepage(page);
  const searchPage = new Searchpage(page);
  const profilePage = new Profilepage(page);

  await loginPage.goto();
  await loginPage.login('taruna.suthar16', '@12345');
  await loginPage.saveLoginInfo();

  await homePage.waitForHome();
  await homePage.openSearch();

  await searchPage.searchUser('rohitsharma45');
  await searchPage.openFirstResult('rohitsharma45');

  await profilePage.openFirstPost();
  await profilePage.openPostDetails();
  await profilePage.printStats();
});
