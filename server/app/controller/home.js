'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('get ------', ctx.query);
    ctx.redirect('http://localhost:8081/about');
  };
  create() {
    const {ctx} = this;
    console.log('ctx,', ctx.request.body);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
