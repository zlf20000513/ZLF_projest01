/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
// 当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/9cf78deebae7ae8b871a4e6cf28a5889/api'
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/9cf78deebae7ae8b871a4e6cf28a5889/api'
  },
  pro: {
    baseApi: '//future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/9cf78deebae7ae8b871a4e6cf28a5889/api'
  }
}

export default {
  env,
  // mock的总开关,
  mock: false,
  ...EnvConfig[env]
}
