'use strict';
const Controller = require('egg').Controller;

class WebpackMoniterController extends Controller {

    uploadError() {
        const { ctx } = this;
        console.log('moniter---------------------------- ----', 'from webpack');
        ctx.body = 'logout success';
    }
}

module.exports = WebpackMoniterController;
