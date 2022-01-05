'use strict';

const Service = require('egg').Service;
const _ = require('loadsh');

class UserDatabaseService extends Service {
  // 更新数据库,修改数据库
  async update() {
    const { ctx } = this;

    const data = _.omit(ctx.request.body, [ 'date', 'urlLogo' ]);

    const Modify = await ctx.model.Formats.update({ _id: ctx.request.body._id }, data);

    if (Modify.ok) {
      return {
        status: 200,
        message: '修改成功',
      };
    }
    ctx.status = 401;
  }
}

module.exports = UserDatabaseService;
