/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // port
  config.port = 14030;
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1661407588038_6340';

  // add your middleware config here
  config.middleware = ['jsonResponse'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8081', 'http://localhost:8082', 'http://localhost:8033/']
  };
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.view = {
        root: path.join(appInfo.baseDir, 'app/public'),
        defaultViewEngine: 'ejs',
        mapping: {
            '.html': 'ejs',
            '.js': 'assets',
            '.css': 'assets',
            '.svg': 'assets'
        },
    };
  config.session = {
    key: 'server:sess',
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    encrypt: true,
  };
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'first',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '987346',
    // more sequelize options
  };
  config.multipart = {
    mode: 'file',
    allowArrayField: true,
    whitelist: ()=> true,
  };
  return {
    ...config,
    ...userConfig,
  };
};
