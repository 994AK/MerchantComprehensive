'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = 'hi, egg';
  }

  async getGirls() {
    const { ctx } = this;
    ctx.body = await ctx.service.hello.getGirl(ctx.query.id);
  }


}

module.exports = HomeController;
