export class Profilepage {
  constructor(page) {
    this.page = page;
    this.firstPost = page.locator('div._ac7v.x1ty9z65.xzboxd6').locator('div').nth(0);
    this.more = page.locator("svg[aria-label='More options']");
    this.goToPost = page.locator('button:has-text("Go to post")');
    this.likes = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(0);
    this.comments = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(1);
  }
  // open first post 
  async openFirstPost() {
    await this.firstPost.click();
  }
  // open the post
  async openPostDetails() {
    await this.more.waitFor({ state: 'visible' });
    await this.more.click();
    await this.goToPost.waitFor({ state: 'visible' });
    await this.goToPost.click();
  }
  // print number of likes and comments
  async printStats() {
    console.log("Number of likes:", await this.likes.textContent());
    console.log("Number of comments:", await this.comments.textContent());
  }
}
