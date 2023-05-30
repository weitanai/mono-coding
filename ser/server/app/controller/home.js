"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async getUserList() {
    const { ctx } = this;
    const { uid } = ctx.session.user;
    if (uid) {
      const data = await ctx.model.User.findOne({
        where: {
          id: uid,
        }
      });
      if (uid) {
        ctx.JsonResponse.success(data);
      } else {
        ctx.JsonResponse.error("you need sign up", 404);
      }
    } else {
      ctx.JsonResponse.error("you need login", 404);
    }
  }
}

module.exports = HomeController;
