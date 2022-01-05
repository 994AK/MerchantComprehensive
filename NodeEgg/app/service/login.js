'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index({ username, password }) {
    const { ctx, app } = this;


    // 查询数据库是否存在这个用户
    const usernameFind = await ctx.model.User.findOne({ username });
    const passwordFind = await ctx.model.User.findOne({ password });

    if (usernameFind && passwordFind) {
      const user = await ctx.model.User.find({ username });
      const payload = {
        ...user,
      };

      const token = app.jwt.sign(
        payload,
        app.config.jwt.secret
      );

      return {
        status: 200,
        message: '登录成功',
        token,
      };

    }

    return {
      status: 401,
      message: '登录失败',
    };

  }
}

module.exports = LoginService;
