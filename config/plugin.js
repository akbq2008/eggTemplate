'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
// exports.security = {
//   domainWhiteList: ['http://192.168.2.82:35295'],
// };
exports.cors = { enable: true, package: 'egg-cors', };
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};