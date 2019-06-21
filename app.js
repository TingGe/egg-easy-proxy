'use strict';

const proxy = require('koa-proxy');

module.exports = app => {
  let esayConfig = app.config.easyProxy || [];
  if (!Array.isArray(esayConfig)) {
    esayConfig = [].concat(esayConfig);
  }

  esayConfig.forEach(config => {
    app.use(proxy(config));
  });
};
