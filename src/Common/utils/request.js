import nativeFetch from '@system.fetch'

const baseUrl = 'https://api.douban.com'
const baseUrl2 = 'https://douban.uieee.com'
/**
 * 请求
 * @param params {header, token, data}
 * @param url
 * @param method
 * @returns {Promise<*>}
 */
// 高于1010版本，返回promise
const qaRequest = async (params = {}, url, method = 'GET') => {
  try {
    let options = {
      // header: {
      //   'Content-Type': 'application/json'
      // },
      url: baseUrl2 + url,
      responseType: 'json',
      method: method,
      data: params
    }

    // if (token) {
    //   options.header = {
    //     'Content-Type': 'application/json',
    //     'Token': `Token ${params.token}`
    //   }
    // }
    const response = await nativeFetch.fetch(options)
    console.info('fetch 成功 code: ', response.data.code)
    console.info('fetch 成功 data: ', response.data.data)
    // console.info('fetch 成功 headers: ', JSON.stringify(response.data.headers))
    return response.data.data
  } catch (err) {
    console.info('fetch 失败 code: ', err.code)
    console.info('fetch 失败 data: ', err.data)
  }

}

// 低于1010版本，返回callback
// const natives = {
//   async fetch(options) {
//     const p1 = new Promise((resolve, reject) => {
//       options.success = function(data, code) {
//         resolve({ data, code })
//       }
//       options.fail = function(data, code) {
//         reject({ data, code })
//       }
//       nativeFetch.fetch(options)
//     })
//     return p1
//   }
// }

module.exports = {
  qaRequest
}
