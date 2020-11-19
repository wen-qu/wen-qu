import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 30000 // 请求超时时间 30 秒
})

axios.defaults.withCredentials = true

// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log('error: ', error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    console.log('error:' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
