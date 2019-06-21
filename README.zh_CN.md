# egg-easy-proxy

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-easy-proxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-easy-proxy
[travis-image]: https://img.shields.io/travis/eggjs/egg-easy-proxy.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-easy-proxy
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-easy-proxy.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-easy-proxy?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-easy-proxy.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-easy-proxy
[snyk-image]: https://snyk.io/test/npm/egg-easy-proxy/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-easy-proxy
[download-image]: https://img.shields.io/npm/dm/egg-easy-proxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-easy-proxy

一个egg的代理插件，适配midwayjs，基于 egg-proxy。

## 依赖说明

### 依赖的 egg 版本

egg-easy-proxy 版本 | egg 2.x 
--- | ---
1.x | 😁
0.x | ❌

## 开启插件

```js
// config/plugin.js
exports.easyProxy = {
  enable: true,
  package: 'egg-easy-proxy',
};
```

## 使用场景

```javascript
// {app_root}/config/config.default.js
exports.easyProxy = [
  {
    host: 'http://127.0.0.1:11111',
    match: /^\/test1/,
  },
  // {
  //   host: 'https://github.com',
  //   match: /^\/explore/,
  // },
];
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

```bash
$ npm run test
```

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)