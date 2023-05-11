'use strict';
const Controller = require('egg').Controller;

class AuthController extends Controller {
    async login() {
        const { ctx } = this;
        const body = ctx.request.body;
        const findRes = await ctx.model.User.findOne({
            where: {
                name: body.name,
                age: body.age
            }
        })
        if (findRes && findRes.id) {
            ctx.session.user = {uid: findRes.id}
            ctx.JsonResponse.success(findRes);
        } else {
            ctx.JsonResponse.error('Login', 'you are not sign up, please goto sign up');
        }
    }
    logout() {
        const { ctx } = this;
        console.log('logout ----');
        ctx.session = {};
        ctx.body = 'logout success';
    }
}

module.exports = AuthController;
