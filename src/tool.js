function plugin(Vue) {
  'use strict'

  if (!plugin.installed) {
    /* eslint-disable no-param-reassign */
    const loadScriptList = {} // 闭包 用于判断脚本是否加载
    let loadImgTimeId = ''

    const loadImgFn = function (time = 200) {
      if (loadImgTimeId) {
        clearTimeout(loadImgTimeId)
      }
      loadImgTimeId = setTimeout(() => {
        if (process.browser) {
          const t = document.documentElement.scrollTop || document.body.scrollTop
          const imgArr = document.querySelectorAll('.load-img')
          for (let i = 0; i < imgArr.length; i++) {
            if (t > imgArr[i].offsetTop - (window.screen.height * 1.5)) {
              imgArr[i].src = imgArr[i].getAttribute('data-src')
              imgArr[i].className = (imgArr[i].className || '').replace('load-img', '')
            }
          }
        }
      }, time)
    }

    Vue.prototype.$tool = {
      getSingle(fn, ...args) {
        let result
        /* eslint-disable no-return-assign */
        return () => result || (result = fn.apply(this, args))
      },
      loadImg(time) {
        return this.getSingle(loadImgFn(time))
      }
    }
  }
}

// 同上，Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
