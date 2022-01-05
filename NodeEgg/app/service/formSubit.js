'use strict';

const Service = require('egg').Service;
const _ = require('loadsh');
const moment = require('moment');
const fs = require('fs');


class SubmitService extends Service {
  // 提交数据录入数据库
  async index(user) {
    const { ctx } = this;
    /* 处理商户信息 */
    const branch = ctx.state.user[0].name || [];
    // 添加网点
    const modelData = _.assign(user, { secondary_branch: `${branch}分行` });
    // 不保留urlLogo
    const data = _.omit(modelData, [ 'urlLogo' ]);

    /*
     *  商户号与商户名称一样就会判断为重复录入
     * */
    const oldUser = await ctx.model.Formats.findOne({
      business: data.business,
      business_name: data.business_name,
    });

    // 判断重复录入
    if (oldUser) {
      return {
        status: 401,
        message: '已存在了,请勿重复写入',
      };
    }

    /* 写入图片 */
    const base64 = user.urlLogo;
    const business_name = user.business_name;
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const base64Buffer = new Buffer(base64Data, 'base64');
    fs.mkdir(__dirname + `../../public/img/${branch}`, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('成功目录成功');
      }

      fs.writeFile(__dirname + `../../public/img/${branch}/${business_name}.png`, base64Buffer, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('保存成功');
        }
      });
    });

    // 写入路径地址
    const urlLogo = _.assign(data, { urlLogo: `/public/img/${branch}/${business_name}.png` });

    // 写入时间搓
    const dateUser = _.assign(urlLogo, { date: moment().format() });

    // 最终录入数据库
    ctx.model.Formats.create(dateUser);

    return {
      status: 200,
      message: '提交成功',
    };
  }
}

module.exports = SubmitService;
