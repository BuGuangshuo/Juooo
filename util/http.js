// function http (url, xHost) {
//   return axios({
//     url: `https://m.maizuo.com/${url}`,
//     method: 'GET',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606697250632532718583809","bc":"310100"}',
//       'X-Host': xHost
//     }
//   })
// }
import axios from 'axios'
import { Toast } from 'vant' // 对象不用注册
const http = axios.create({
  baseURL: 'https://m.maizuo.com', // 请求网站的地址
  timeout: 10000, // 延迟时间
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606697250632532718583809","bc":"310100"}' }
  // 请求头的验证信息
})
// http 进行拦截（发请求之前，收到相应之后可以提前拦截？？？）

// Add a request interceptor
http.interceptors.request.use(function (config) { // 请求前进行拦截，显示loading框
  // Do something before request is sent
  // 显示loading
  Toast.loading({
    message: '正在加载中...', // 提示信息
    forbidClick: true, // 是否禁止背景点击
    duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) { // 响应后进行拦截，隐藏loading框
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 隐藏loading
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // 隐藏loading
  Toast.clear() // 响应失败时也清掉loading框
  return Promise.reject(error)
})
export default http
