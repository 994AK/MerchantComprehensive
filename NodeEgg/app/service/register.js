'use strict';

const Service = require('egg').Service;

class RegisterService extends Service {
  async index() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    // // 查询数据库是否存在这个用户
    const user = await ctx.model.User.findOne({ username, password });
    console.log(user);
    if (!user) {
      await ctx.model.User.create(ctx.request.body);

      return {
        status: 200,
        message: '注册成功',
      };
    }
    return {
      status: 401,
      message: '已经注册过了',
    };
  }
}

module.exports = RegisterService;
