# egg-easy-proxy

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-easy-proxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-easy-proxy
[travis-image]: https://img.shields.io/travis/tingge/egg-easy-proxy.svg?style=flat-square
[travis-url]: https://travis-ci.org/tingge/egg-easy-proxy
[codecov-image]: https://img.shields.io/codecov/c/github/tingge/egg-easy-proxy.svg?style=flat-square
[codecov-url]: https://codecov.io/github/tingge/egg-easy-proxy?branch=master
[david-image]: https://img.shields.io/david/tingge/egg-easy-proxy.svg?style=flat-square
[david-url]: https://david-dm.org/tingge/egg-easy-proxy
[snyk-image]: https://snyk.io/test/npm/egg-easy-proxy/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-easy-proxy
[download-image]: https://img.shields.io/npm/dm/egg-easy-proxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-easy-proxy

a plugin for [egg.js](https://eggjs.org/) and [midway.js](https://midwayjs.org/), based on [egg-proxy](https://github.com/xyeric/egg-proxy), [koa-proxy](https://github.com/edorivai/koa-proxy).

## Install

```bash
$ npm i egg-easy-proxy --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.easyProxy = {
  enable: true,
  package: 'egg-easy-proxy',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.easyProxy = [
  {
    host: 'http://127.0.0.1:1111',
    match: /^\/test1/,
  },
  // {
  //   host: 'https://github.com',
  //   match: /^\/explore/,
  // },
];
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```bash
$ npm run test
```

## Questions & Suggestions

Please open an issue [here](https://github.com/TingGe/egg-easy-proxy/issues).

## License

[MIT](LICENSE)
