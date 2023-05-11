// import { resolve } from 'path';
// import { chromium } from 'playwright';
// import sirv from 'sirv';
// import { fileURLToPath } from 'url';

// import polka from 'polka';
// const PORT = 8238
// const URL = `http://localhost:${PORT}`

// const root = resolve(fileURLToPath(import.meta.url), '../../../');

// const staticPath = resolve(root, 'first-vite/dist');

// interface ConsoleLogS { type: string; text: string }

// polka().use(sirv(staticPath)).listen(PORT, (err: any) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(`>ready onhttp://localhost:${PORT}`)
//     }
// })
// async function page() {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();

//     const pageEroor: Error[] = [];
//     const consoleLogs: ConsoleLogS[] = [];
//     page.on
//     page.on('console', (message) => {
//         console.log('messg---', message);
//         consoleLogs.push({
//             type: message.type(),
//             text: message.text()
//         })
//     });
//     // page.on('pageerrror', (err) => {
//     //     pageEroor.push(err);
//     // })
//     await page.goto(URL);

//     console.log({ pageEroor, consoleLogs })

// }
// page().then(res=>console.log('---res'))
const res = await Promise.resolve(1);
console.log(res);