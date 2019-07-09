'use strict';

const mock = require('egg-mock');

describe('test/easy-proxy.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/easy-proxy-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  // 请求正常
  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('hi, easyProxy')
      .expect(200);
  });

  // 请求代理地址
  it('GET /proxy, should return 500', () => {
    return app
      .httpRequest()
      .get('/proxy')
      .expect(500)
      .expect({});
  });
});
