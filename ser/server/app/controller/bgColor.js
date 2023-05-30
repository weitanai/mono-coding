const Controller = require("egg").Controller;

class BgColorController extends Controller {

    getColorList() {
        const { ctx } = this;
        function randomHexColor() {
            var hex = Math.floor(Math.random() * 16777216).toString(16); //生成一个随机数
            while (hex.length < 6) { //如果生成的颜色值不足6位，则在前面补0
              hex = "0" + hex;
            }
            return `#${hex}`;
        }
        let colorList =  [];
        for (let i = 0; i<5; i++) {
            colorList.push(randomHexColor());
        }
        ctx.JsonResponse.success(colorList);
    }
}
module.exports = BgColorController;
