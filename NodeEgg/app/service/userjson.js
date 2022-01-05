'use strict';

const Service = require('egg').Service;
const fs = require('fs');

// const path = require('path');

class HelloService extends Service {
  async formlist(name) {
    // 匹配地区
    const site = fs.readFileSync(__dirname + '../../public/formFireJSON/data_site.json').toString();
    // 匹配对应网点
    const outlets = fs.readFileSync(__dirname + '../../public/formFireJSON/data_outlets.json').toString();
    // 匹配对应活动类型
    const address = fs.readFileSync(__dirname + '../../public/formFireJSON/data_address.json').toString();
    // 匹配对应活动描述
    const describe = fs.readFileSync(__dirname + '../../public/formFireJSON/data_describe.json').toString();
    // 匹配对应商户业态
    const format = fs.readFileSync(__dirname + '../../public/formFireJSON/data_format.json').toString();
    // 匹配对应的优惠地图
    const mapinfo = fs.readFileSync(__dirname + '../../public/formFireJSON/data_mapinfo.json').toString();
    // 匹配对应的商圈
    const business = fs.readFileSync(__dirname + '../../public/formFireJSON/data_business_district.json').toString();

    return {
      data_site: [{
        value: JSON.parse(site)[0].value,
        label: JSON.parse(site)[0].label,
        children: JSON.parse(site)[0].children.filter(i => i.value === name),
      }],
      data_outlets: JSON.parse(outlets).filter(i => i.value === `${name}分行`)[0].children,
      data_address: JSON.parse(address),
      data_describe: JSON.parse(describe),
      data_state: [{ value: '新增', label: '新增' }, { value: '删除', label: '删除' }],
      data_format: JSON.parse(format),
      data_mapinfo: JSON.parse(mapinfo),
      data_business_district: [{
        value: JSON.parse(business)[0].value,
        label: JSON.parse(business)[0].label,
        children: JSON.parse(business)[0].children.filter(i => i.value === name),
      }, {
        value: JSON.parse(business)[1].value,
        label: JSON.parse(business)[1].label,
        children: JSON.parse(business)[1].children.filter(i => i.value === name),
      },
      ],
    };
  }
}

module.exports = HelloService;
