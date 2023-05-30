"use strict";
const Controller = require("egg").Controller;

class UploadController extends Controller {
  
    upload() {
        const { ctx } = this;
        console.log("logout ----");
        console.log(ctx.request.body);
        ctx.session = {};
        ctx.body = "logout success";
    }
}

module.exports = UploadController;
