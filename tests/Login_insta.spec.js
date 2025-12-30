// @ts-check
import { test, expect } from '@playwright/test';
// import {page} from '@playwright/test';

test.only('login automation',async ({page})=>{
   
    await page.goto("https://www.instagram.com/");
    const username = page.locator('[name="username"]')
    const pass = page.locator("input[name='password']");
    const login= page.locator("._aswp._aswr._aswu._asw_._asx2");
    
    // Login in the instagram
    await username.fill("tarunaparmar16");
    await pass.fill('@123456789');
    await login.click();
    
    const info = page.locator(".xyamay9.x8ozs88.x1l90r2v.x1mkiyxj.x2b8uid button");
    await info.click();
    
    // go to search bar
    const search = page.locator("svg[aria-label='Search']");
    
    await search.click();

    const searchin = page.locator('input[placeholder="Search"]');
    await searchin.waitFor({ state: 'visible' });
    
    // search 
    const usernameToSearch = "rohitsharma45";
    await searchin.fill(usernameToSearch);
    
    await page.waitForTimeout(2000);
    
    const people = page.locator('a[role="link"]', {
      hasText: usernameToSearch
    }).first();

    // go to searched people profile
    await people.click();
    
    const firstelement = page.locator('div._ac7v.x1ty9z65.xzboxd6').locator('div').nth(0);
    await firstelement.click();
    
    // const more = page.locator("svg[aria-label='More options']");
    // await more.click();

    // const post = page.locator('button:has-text("Go to post")');
    // await post.click();

    const comment = page.locator("span[class='x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 x1i0vuye xvs91rp x1s688f x5n08af x10wh9bi xpm28yp x8viiok x1o7cslx'] span[class='html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs']");
    
    // print the no. of likes and comments
    // const likes = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(0);
    // const comment = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(1);
    // console.log("Number of likes " + await likes.textContent());
    console.log("Number of comments " + await comment.textContent());


   const commentprint = page.locator('div.x1qjc9v5.x972fbf.x10w94by.x1qhh985.x14e42zd.x9f619.x78zum5.xdt5ytf.x2lah0s.xk390pu.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1n2onr6.xggy1nq.x11njtxf');

  //  print top 10 comments of first post
   for(let i=0;i<10;i++){
    const comment = commentprint.nth(i);
    const cname = await comment.locator('a.x1i10hfl.xjqpnuy.xc5r6h4.xqeqjp1.x1phubyo.xdl72j9.x2lah0s.x3ct3a4.xdj266r.x14z9mp.xat24cr.x1lziwak.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.x18oe1m7.x1sy0etr.xstzfhl.x9f619.x1ypdohk.x1f6kntn.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.x5c86q.x18br7mf.x1i0vuye.x11q7cde.xr5sc7.xf8g3cd.x20cjte.xt0b8zv.x568u83.xjbqb8w.xr9e8f9.x1e4oeot.x1ui04y5.x6en5u8.x972fbf.x10w94by.x1qhh985.x14e42zd.xt0psk2.xt7dq6l.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1n2onr6.x1n5bzlp').textContent();
    const content = await comment.locator('._ap3a._aaco._aacu._aacx._aad7._aade:visible').textContent();

    console.log(cname + "->" + content);

   }

   const scroll = page.locator('.x78zum5 xdt5ytf x1iyjqo2');

});

// import { test, expect } from '@playwright/test';

// test.only('login automation',async ({page})=>{
   
//     await page.goto("https://www.instagram.com/");
//     const username = page.locator('[name="username"]')
//     const password = page.locator("input[name='password']");
//     const submit = page.locator('button._aswp._aswr._aswu._asw_._asx2');
    
//     await username.fill('taruna.suthar16');
//     await password.fill('@12345');
//     await submit.click();

//     const saveinfo = page.locator('button:has-text("Save info")');
//     await expect(saveinfo).toBeVisible({ timeout: 15000 });
//     await saveinfo.click();

// // wait until home page UI is fully loaded
//     const homeNav = page.locator('nav');
//     await expect(homeNav).toBeVisible({ timeout: 15000 });

//     const searchIcon = page.locator('svg[aria-label="Search"]');
//     await expect(searchIcon).toBeVisible({ timeout: 10000 });
//     await searchIcon.click();

//     const searchprofile = page.locator('input[placeholder="Search"]');
//     await expect(searchprofile).toBeVisible({ timeout: 10000 });

//     const usernameToSearch = "rohitsharma45";
//     await searchprofile.fill(usernameToSearch);

//     const resultsDialog = page.locator('div[role="dialog"]:visible');
//     await expect(resultsDialog).toBeVisible({ timeout: 10000 });

//     const people = page.locator('a[role="link"]', {
//       hasText: usernameToSearch
//     }).first();
    
//    await expect(people).toBeVisible({ timeout: 10000 });
//    await people.click();

//    const firstelement = page.locator('div._ac7v.x1ty9z65.xzboxd6').locator('div').nth(0);
//    await firstelement.click();

//    const more = page.locator("svg[aria-label='More options']");
//    await more.waitFor({ state: 'visible' });
//    await more.click();

//    const gotopost = page.locator('button:has-text("Go to post")');
//    await gotopost.waitFor({state:'visible'});
//    await gotopost.click();


//    const likes = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(0);
//    const comment = page.locator('span.x1ypdohk.x1s688f.x2fvf9.xe9ewy2').nth(1);
//    console.log("Number of likes " + await likes.textContent());
//    console.log("Number of comments " + await comment.textContent());
   
// //    const commentprint = page.locator('div.x5yr21d.xw2csxc.x1odjw0f.x1n2onr6');
   


    
// });