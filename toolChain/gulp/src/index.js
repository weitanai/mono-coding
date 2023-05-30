const utils = require("./util.js");
const $ = require("jquery");

module.exports = {
    myCus: function () {
        utils.sayName("index.js to call name");
    }
};
$(function () {
    function testJquery() {
        utils.sayName(" jquery test");
    }
    testJquery();
});
