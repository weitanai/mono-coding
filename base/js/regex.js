
// mathc number
const testNumber = "fasdfas18819259789fasdfasd";

const phoneReg = /[0-9]{11}/;

const phoneTestRes = testNumber.match(phoneReg);

console.log(phoneTestRes);



// match email
const emailReg = /\w*@\w*\.com/;

const emailQQ = "987346185@qq.comhhlfasdf";

const resEmail = emailQQ.match(emailReg);
console.log(resEmail);


var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
const isMathTime = string.match(regex);
console.log(isMathTime);
var result = string.replace(regex, "$2/$3/$1");
console.log(result);
// => "06/12/2017"


// match group 
const groupReg = /(c|g|p)ar/g;

const groupStr =" The car is parked in the garage.";

const groupRes = groupStr.match(groupReg);
console.log(groupRes);