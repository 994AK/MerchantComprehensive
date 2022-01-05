'use strict';

const Service = require('egg').Service;
const _ = require('loadsh');
const moment = require('moment');
const XLSX = require('node-xlsx');


moment.locale('zh-cn');

class Operate extends Service {
  /* 显示信息功能 */
  async find({ page, pageSize }) {
    const { ctx } = this;

    /*  处理重复的操作封装  */
    const data = async (object = {}) => {
      const totalNum = await ctx.model.Formats.find(object).countDocuments();
      const operateResult = await ctx.model.Formats.find(object).skip((+page - 1) * +pageSize).limit(+pageSize);
      // 拿到每条数据的时间处理
      operateResult.map(i => {
        const date = new Date(i.date).valueOf();
        i.date = moment(date).format('lll');
        return i;
      });


      return { totalNum, operateResult };
    };

    if (ctx.state.user[0].auth === 'Admin') {
      await data();
    } else {
      // secondary_branch 分行查询
      await data({ secondary_branch: `${ctx.state.user[0].name}分行` });
    }

    // totalNum 数据有多少条数据
    // operateResult 页数返回的数据
    const { totalNum, operateResult } = await data();
    // // console.log(operateResult);
    //
    return {
      status: 200,
      operateResult,
      totalNum,
    };
  }

  /* 筛选功能查询 */
  async findQuery() {
    const { ctx } = this;
    // 拦截对象键值为空的属性
    const data = _.pickBy(await ctx.request.body);

    // 拦截数据是否为空对象
    const juData = _.isEmpty(data);

    const datefind = findData => {
      findData.map(i => {
        const date = new Date(i.date).valueOf();
        i.date = moment(date).format('lll');
        return i;
      });
    };

    if (data.date) {
      /*
      *  数据替换
      *  {
      *   data:xxx,
      *   date:[xxx,xxx]
      *   }
      * */
      const date = _.assign(data, { date: { $gte: data.date[0], $lt: data.date[1] } });
      const findData = await ctx.model.Formats.find(date);
      datefind(findData); // 时间格式转换
      return {
        status: 200,
        boolean: true,
        findData,
      };
    }

    // 返回数据
    const findData = await ctx.model.Formats.find(data);

    datefind(findData);// 时间格式转换

    // 返回数据为 [ ] 就返回 查询不到数据
    const noData = _.isEmpty(findData);

    if (juData || noData) {
      return {
        status: 200,
        boolean: false,
      };
    }
    return {
      status: 200,
      boolean: true,
      findData,
    };
  }

  /* 生成Excel功能 */
  async excel() {
    const { ctx } = this;

    const dataSheets = [
      [
        '商户号',
        '商户名称',
        '商户分店名称（选填）',
        '二级分行',
        '商圈类型',
        '活动细类',
        '商户业态',
        '所属商圈',
        '营业执照名称',
        '按门店地理位置填写',
        '按门店地理位置写(市级城市)',
        '按门店地理位置写(区 / 县)',
        '按门店地理位置填写（路、楼层等）',
        '商户联系电话',
        '活动开始时间',
        '责任网点',
        '商户负责人 * 负责该商户营销及后期维护工作的网点员工',
        '网点联系电话',
        '优惠地图分类',
        '活动简述',
        '新增 / 删除',
        '准入条件',
        '营业执照号码',
        '营业时间',
        '客单价',
        '商户拓展渠道',
        '商户拓展联系人姓名',
        '商户拓展联系人电话',
        '是否中行收单',
        '日均交易笔数',
        '是否中行个人结算户',
        '地址',
        '商圈',
      ],
    ];

    ctx.request.body.map(i => {
      dataSheets.push([
        i.business,
        i.business_name,
        i.business_branch,
        i.location[1] + '分行',
        i.activity[0],
        i.activity[1],
        i.format,
        i.business_city,
        i.license_name,
        i.location[0],
        i.location[1],
        i.location[2],
        i.store_location,
        i.telephone,
        i.date,
        i.sales_department,
        i.sales_principal,
        i.branch_phone,
        i.discount_map,
        i.describe,
        i.merchant_status,
        i.landmark,
        i.business_number,
        i.customer_price,
        i.expand_channel,
        i.expand_name,
        i.expand_telephone,
        i.acquiring,
        i.average_day_amount,
        i.account,
        `${i.location[0]}${i.location[1]}${i.location[2]}${i.store_location}`,
        `${i.sales_department}${i.activity[0]}`,
      ]);
    });
    /* 生成buffer Excel流*/
    return XLSX.build([
      {
        name: '数据表',
        data: [ ...dataSheets ],
      },
    ]);

  }
}

module.exports = Operate;
