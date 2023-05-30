const Controller = require("egg").Controller;

class SiteController extends Controller {

    async index() {
        console.log("---render 14030 port ");
        const { ctx } = this;
        await ctx.render("index.html");
       
    }
}
module.exports = SiteController;
