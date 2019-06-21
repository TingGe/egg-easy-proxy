'use strict';

const PROXY = Symbol('Application#EASY_PROXY');
const ProxyContext = require('../../lib/context');

module.exports = {
  get easyProxy() {
    if (!this[PROXY]) {
      this[PROXY] = new ProxyContext(this);
    }
    return this[PROXY];
  },
};
