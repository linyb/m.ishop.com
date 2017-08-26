import Axios from 'axios'

if (process.browser) {
  require('es6-promise').polyfill()
}
// require('es6-promise/auto')
/* eslint-disable no-param-reassign */

/* eslint-disable operator-assignment */
function plugin(Vue) {
  if (!plugin.installed) {
    const reqConfig = {
      timeout: 30000,
      responseType: 'json',
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    }
    let apiUrl
    let traceUrl
    if (process.env.NODE_ENV === 'production') {
      apiUrl = '//api.bondketang.com'
      traceUrl = '//btrace.bond520.com/h5/class'
    } else if (process.env.NODE_ENV === 'testing') {
      apiUrl = '//test.api.bondketang.com'
      traceUrl = '//btrace.bond520.com/devH5/class'
    } else {
      apiUrl = '//dev.api.bondketang.me'
      // apiUrl = '//api.bondketang.com'
      traceUrl = '//btrace.bond520.com/devH5/class'
    }
    // 生成URL查询条件
    /* eslint-disable no-inner-declarations */
    function serialize(query, type = '?') {
      let urlText = ''
      if (typeof query === 'object') {
        Object.keys(query).forEach((key) => {
          if (typeof query[key] !== 'undefined' && query[key] !== 'undefined' && query[key] !== '') {
            if (type === '?') {
              urlText += `&${key}=${query[key]}`
            } else {
              urlText += `/${key}/${query[key]}`
            }
          }
        })
      }
      return urlText.replace(/^&/, '?')
    }

    // URL统一处理
    function processUrl(url, opt = {}) {
      if (url.indexOf('/api') === 0) {
        url = url.replace('/api', apiUrl)
        return `${url}${serialize(opt)}`
      }
      return url
    }

// http请求统一处理 增加默认值
    function httpToast(res, content) {
      if (content) {
        let type = 'warn'
        if (content === true && res.data) {
          content = res.data.errmsg
        }
        if (res && res.data) {
          if (res.data.errno === 0 || res.data.errno === 404000) {
            type = 'success'
          } else {
            content = res.data.errmsg
          }
        }

        this.$vux.toast.show({
          time: 2000,
          text: content,
          type,
        })
        // this.$store.dispatch('toast', { type, content })
      }
    }

    function httpError(res) {
      const msg = (res && res.status) ? `出错了 错误代码: ${res.status}  错误信息: ${res.statusText}` : '请求网络出错，请检查您的网络配置'
      httpToast.call(this, res, msg)
    }

    const dataDf = {
      errno: '',
      errmsg: '',
      data: {}
    }

    function stringParse(data) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data)
        } catch (e) {
          data = Object.assign({}, dataDf)
        }
      }
      return data
    }

    const AxiosHttp = Axios.create(reqConfig)

    async function httpGet(url, opt = {}, toastData = false, callback) {
      url = processUrl.call(this, url, opt)
      const req = { url }
      return AxiosHttp(req).then((res) => {
        res.data = stringParse(res.data) // 部分浏览器读取缓存，JSON会读成字符串
        httpToast.call(this, res, toastData)
        if (callback) {
          callback(res.data)
        }
        return res.data ? res.data : Object.assign({}, dataDf)
      }, (res) => { // 请求失败
        httpError.call(this, res.response)
        const df = Object.assign({}, dataDf)
        df.errmsg = res.response ? `数据请求出错 ${res.response.status} - ${res.response.statusText}` : '服务器错误'
        return df
      })
    }

    async function httpPost(url, opt = {}, toastData = false, callback) {
      return AxiosHttp.post(processUrl.call(this, url), opt, { withCredentials: true }).then((res) => {
        res.data = stringParse(res.data) // 部分浏览器读取缓存，JSON会读成字符串
        // 用户未登录
        // if (res.data.errno === 101) {
        //   this.$store.dispatch('setEntry', { type: 'login' })
        //   this.$store.dispatch('logout')
        // }
        httpToast.call(this, res, toastData)
        if (callback) {
          callback(res.data)
        }
        return res.data ? res.data : Object.assign({}, dataDf)
      }, (res) => {
        httpError.call(this, res.response)
        const df = Object.assign({}, dataDf)
        df.errmsg = `数据请求出错 ${res.response.status} - ${res.response.statusText}`
        return df
      })
    }

    function trace(sOp = 'pageview', stype = '') {
      const opt = {
        sOp,
        stype,
        sref: window.document.referrer || '',
        url: window.location.href || '',
        pref: (this.$store ? this.$store.getters.getTrace.pref : '') || '',
        userId: (this.$store ? this.$store.getters.getUser.id : '') || '',
        userName: (this.$store ? this.$store.getters.getUser.nickname : '') || ''
      }
      const tmpImg = new Image()
      tmpImg.src = traceUrl + serialize(opt)
    }

    let serverTime = ''
    let localTime = ''

    async function getTime() {
      const currentTime = new Date().getTime()
      if (!serverTime) {
        localTime = currentTime
        serverTime = currentTime
        const timeDate = await httpGet('/api/date/get_time')
        if (timeDate.errno === 0) {
          serverTime = new Date(timeDate.data).getTime()
          localTime = new Date().getTime()
        }
      }
      return serverTime + (currentTime - localTime)
    }

    Vue.prototype.$http = AxiosHttp
    Vue.prototype.$httpGet = httpGet
    Vue.prototype.$httpPost = httpPost
    Vue.prototype.$httpApiUrl = apiUrl
    Vue.prototype.$httpDataDf = dataDf
    Vue.prototype.$trace = trace
    Vue.prototype.$httpTime = getTime
  }
}

// 同上，Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
