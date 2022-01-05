'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 没有条件筛选的查询
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.formOperate.find(ctx.query);
  }

  // 条件筛选的查询
  async conditionQuery() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.formOperate.findQuery();
  }

  // 生成Excel表单
  async excel() {
    const { ctx } = this;
    ctx.body = await ctx.service.formOperate.excel();
  }

  // 登录
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    try {
      ctx.body = await ctx.service.login.index({ username, password });
    } catch (err) {
      console.log(err);
    }
  }

  // 注册
  async register() {
    const { ctx } = this;
    try {
      ctx.body = await ctx.service.register.index();
    } catch (err) {
      console.log(err);
    }
  }

  // 填写表单信息
  async formalist() {
    const { ctx } = this;
    const { name } = ctx.state.user[0];
    ctx.body = await ctx.service.userjson.formlist(name);
  }

  // 提交表单
  async submitForm() {
    const { ctx } = this;

    ctx.body = await ctx.service.formSubit.index(ctx.request.body);
  }

  async updateData() {
    const { ctx } = this;
    ctx.body = await ctx.service.userDatabase.update();
  }

}

module.exports = UserController;
