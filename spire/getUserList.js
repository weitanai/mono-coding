const axios = require('axios');

async function getFollowingList(username) {
  try {
    // 发送 API 请求获取用户信息
    const userResponse = await axios.get(`https://www.zhihu.com/api/v4/members/${username}`);

    
    // 获取用户 ID
    const userId = userResponse.data.id;

    // 发送 API 请求获取关注人列表
    const response = await axios.get(`https://www.zhihu.com/api/v4/members/${userId}/followees?limit=20`);

    // 处理返回的数据
    const followingList = response.data.data.map(user => user.name);
    console.log(followingList);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 使用示例
const username = 'k2yrnx'; // 替换为要获取关注人列表的知乎用户名
getFollowingList(username);
