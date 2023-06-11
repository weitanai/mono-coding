const axios = require('axios');

const getOffset = (offset) => {
    const url  = `https://www.zhihu.com/api/v4/members/k2yrnx/followees?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&offset=${offset}&limit=20`
    return url;
}

async function getFollowingList(username) {
  try {

    // 发送 API 请求获取关注人列表
    const response = await axios.get(getOffset(0));

    // 处理返回的数据
    const followingList = response.data.data.map(user => user.name);
    console.log(followingList);
  } catch (error) {
    console.error('Error:', error);
  }
}

// 使用示例
const username = 'k2yrnx'; // 替换为要获取关注人列表的知乎用户名
getFollowingList(username).then(res=> console.log(res)).catch(err=>console.error(err));
