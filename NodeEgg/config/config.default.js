/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639554524615_5087';

  // jwt 加密条件
  config.jwt = {
    secret: '123456',
  };

  config.bodyParser = {
    formLimit: '100mb',
    jsonLimit: '100mb',
    textLimit: '100mb',
  };

  // CSRF 跨域 enable false
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 静态
  exports.assets = {
    publicPath: '/public/',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  exports.mongoose = {
    url: 'mongodb://127.0.0.1/test',
    options: {},
  };

  // ejs-view
  config.view = {
    mapping: {
      '.html': 'ejs',
      '.json': 'ejs',
      '.ejs': 'ejs',
    },
  };

  // 上传文件
  config.multipart = {
    mode: 'file',
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
