

// function testTry(num) {
//     try {
//         if(num>10) {
//             throw new Error('num more than 10');
//         }
//     } catch(e) {
//         console.error(e);
//         // console.error(e, 'catch an error');
//     }
// }
// testTry(11)


// function readData() {
//     let json = '{ "age": 30 }';

//     try {
//         // ...
//         blabla(); // error!
//     } catch (err) {
//         // ...
//         if (!(err instanceof SyntaxError)) {
//             throw err; // 再次抛出（不知道如何处理它）
//         }
//     }
// }

// try {
//     readData();
// } catch (err) {
//     console.log("External catch got: " + err); // 捕获了它！
// }





async function testAsyncTry() {
	try {
		const err = await new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(notExistdata)
			}, 1000);
		})
	} catch (error) {
		console.log(error, '--- async error')
	}
}

testAsyncTry().then(console.log).catch(()=>console.error('catch error'))