// const username = 'weitanai'; // 将your_username替换为实际的GitHub用户名
// const accessToken = 'NAcfvHjZMxOm6MXKuLF1ZO17EuFXp1CHDrNX_iFigwbaH6Qj'; // 将your_access_token替换为实际的PAT

// fetch(`https://api.github.com/users/${username}/starred`, {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     const starCount = data.length;
//     console.log(`${username} has ${starCount} stars on GitHub.`);
//   })
//   .catch(error => console.error(error));

// const { exec } = require('child_process');
// const path = require('path');


// // 备份函数
// function backup(backupPath, desPath) {
//   exec(`cp -R ${backupPath} ${desPath}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`执行备份命令时出错：${error}`);
//       return;
//     }
//     console.log(`备份成功：${stdout}`);
//   });
// }

// const backupPath =  path.resolve(__dirname, 'type');

// const desPath =  path.resolve(__dirname, 'scroll');
// console.log(backupPath, desPath);
// backup(backupPath, desPath);
// 每天执行一次备份操作

