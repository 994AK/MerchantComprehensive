'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async upload() {
    const { ctx } = this;
    // console.log(ctx);
    const { imgUrl } = ctx.request.body;
    await ctx.service.upload.uploadBlob(imgUrl, '柳州');
    ctx.body = imgUrl;
  }
}

module.exports = UploadController;
