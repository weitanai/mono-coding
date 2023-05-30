k;// const date = new Date();
// console.log(date)
// console.log(date.getDate());

// console.log(date.getHours());

// console.log(date.getTimezoneOffset());


// var search = function(nums, target) {
//     let length = nums.length-1;
//     let begin = 0;
//     console.log(length);
//     while(length >= begin) {
//         let middle = Math.floor((length - begin)/2) + begin;
//         console.log(middle);
//         if (nums[middle] > target ) {
//             length = middle+1;
//         } else if (nums[middle]<target) {
//             begin = middle;
//         } else {
//             return middle;
//         }
//     }
// };

// nums = [-1,0,3,5,9,12], target = 9

// const res = search(nums, target);

// console.log(res, '--');



// Date
// function getWeekDay(time) {
//     if (typeof time !== 'object') return;
//     const index = time.getDay();
//     const arr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
//     return arr[index];
// }

// console.log(getWeekDay(new Date()));

// function getDayAgo(time, agoDay) {
//     const tTimeS = Date.parse(time);
//     const timeA = 1000*60*60*24*agoDay;
//     const res = tTimeS - timeA;
//     return  new Date(res);
// }
// console.log(getDayAgo(new Date(), 2));

// function getLastDayOfMonth(year, month) {
//     let newMonth = month + 1;
//     let newYear = year;
//     return new Date(newYear, newMonth, 0);
// }

// console.log(getLastDayOfMonth(2022, 12), '--')

// className