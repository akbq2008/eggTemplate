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
  config.keys = appInfo.name + '_1566437539672_2760';

  // add your middleware config here
  config.middleware = [];
  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true
  //   },
  // };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };  // add your user config here
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: '192.168.2.82',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: '123456',
  //     // 数据库名
  //     database: 'shop',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.2.82',
    port: 3306,
    database: 'shop',
    user: 'root',
    // 密码
    password: '123456'
  };
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
