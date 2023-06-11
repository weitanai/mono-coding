const puppeteer = require('puppeteer');

async function followUsers(usernames) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // 登录知乎
    await page.goto('https://www.zhihu.com/signin');
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', 'Your_Zhihu_Username');
    await page.type('input[name="password"]', 'Your_Zhihu_Password');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // 批量关注用户
    for (let i = 0; i < usernames.length; i++) {
      const username = usernames[i];
      const profileUrl = `https://www.zhihu.com/people/${username}`;

      // 访问用户主页
      await page.goto(profileUrl);

      // 点击关注按钮
      await page.waitForSelector('button.Button--blue');
      await page.click('button.Button--blue');

      console.log(`Followed user: ${username}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

// 使用示例
const usernames = ['user1', 'user2', 'user3']; // 要关注的知乎用户名列表
followUsers(usernames);
