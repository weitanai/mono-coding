'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('get ------', ctx.cookies.get('userId'));z
    if (!ctx.session.user) {
      ctx.session = {
        userId: 135,
      };
    }
    ctx.body= 'hello world'
  };
  create() {
    const {ctx} = this;
    console.log('ctx,', ctx.request.body);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
