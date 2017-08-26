'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
// 用户默认数据
const userDf = {
  curgrade: '',
  headUrl: '',
  id: '',
  imId: '',
  nickname: '',
  phone: '',
  realname: '',
  sign: '',
  studentNo: '',
  type: ''
}
// seo 基础信息
const seo = {
  title: '',
  baseTitle: window.document.title,
  description: '',
  baseDescription: document.querySelector('meta[name="description"]').getAttribute('content'),
  keywords: '',
  baseKeywords: document.querySelector('meta[name="keywords"]').getAttribute('content')
}

function getQueryString(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r !== null) return decodeURIComponent(r[2]);
  return null;
}

// 跟踪统计默认数据
const trace = {
  pref: getQueryString('pref')
}

function getCookie(name) {
  if (process.browser) {
    if (document.cookie.length > 0) {
      let start = document.cookie.indexOf(`${name}=`)
      if (start !== -1) {
        start = start + name.length + 1
        let end = document.cookie.indexOf(';', start)
        if (end === -1) {
          end = document.cookie.length
        }
        return decodeURIComponent(document.cookie.substring(start, end))
      }
    }
  }
  return ''
}

// 设置cookie
function setCookie(name, value = null, expires = 0, path = '/') {
  if (process.browser) {
    const tmpValue = encodeURIComponent(value)
    let eDate = new Date().getTime() + (expires * 1000) +
      (new Date().getTimezoneOffset() * 60 * 1000)
    eDate = new Date(eDate)
    eDate.toUTCString()
    document.cookie = `${name}=${tmpValue};path=${path};expires=${eDate}`
    // console.log(document.cookie)
    return document.cookie
  }
  return ''
}

/* eslint-disable */
const userCookie = getCookie('user')
let user = userDf
if (userCookie) {
  try {
    user = JSON.parse(userCookie)
  } catch (e) {

  }
}
const uaStr = window.navigator.userAgent
const ua = {
  isChrome: /chrome/i.test(uaStr),
  isMobile: /Mobile/i.test(uaStr),
  isWX: /MicroMessenger/i.test(uaStr),
  isIE9: /﻿MSIE 9/.test(uaStr)
}
const state = {
  ua,
  user,
  userEntry: { type: '', url: '' },
  notice: {
    toast: {
      clear: '',
      time: '',
      content: '',
      type: ''
    }
  },
  seo,
  layout: {
    header: { show: true, url: '', isUc: false, isQr: false },
    footer: { show: false }
  },
  userCenter: { isUc: false, isQr: false },
  trace,
  // scroll: {
  //   top: '',
  //   bottom: ''
  // }
  loading: false,
  qrPopup: false
}

const mutations = {
  LOGIN(state, user) {
    state.user = user
    if (user.id > 0) {
      setCookie('user', JSON.stringify(user), 7 * 24 * 60 * 60)
    }
  },
  LOGOUT(state) {
    state.user = userDf
    setCookie('user', JSON.stringify(userDf), -1)
  },
  ENTRY(state, entry) {
    state.userEntry = entry
  },
  TOAST(state, toast) {
    state.notice.toast = toast
  },
  SETVER(state, ver) {
    state.ver = ver
    setCookie('ver', JSON.stringify(ver), 30 * 24 * 60 * 60)
  },
  LOADING(state, bl) {
    state.loading = bl
  },
  SEO(state, seoObj) {
    const tmpObj = Object.assign(state.seo, seoObj)
    window.document.title = tmpObj.title ? `${tmpObj.title} - ${tmpObj.baseTitle}` : tmpObj.baseTitle
    document.querySelector('meta[name="description"]').setAttribute('content', tmpObj.description ? `${tmpObj.description} ${tmpObj.baseDescription}` : tmpObj.baseDescription)
    document.querySelector('meta[name="keywords"]').setAttribute('content', tmpObj.keywords ? `${tmpObj.keywords} - ${tmpObj.baseKeywords}` : tmpObj.baseKeywords)
    state.seo = tmpObj
  },
  LAYOUT(state, layoutObj) {
    const tmpLayout = { header: {}, footer: {} }
    if (layoutObj.header.isUc) {
      layoutObj.header.isQr = false
    }
    if (layoutObj.header.isQr) {
      layoutObj.header.isUc = false
    }
    tmpLayout.header = Object.assign(state.layout.header, layoutObj.header)
    tmpLayout.footer = Object.assign(state.layout.footer, layoutObj.footer)
    state.layout = tmpLayout
  },
  USERCENTER(state, ucObj) {
    /*if(ucObj.isUc) {
      ucObj.isQr = false;
    }
    if(ucObj.isQr) {
      ucObj.isUc = false;
    }*/
    const tmpUC = Object.assign(state.userCenter, ucObj)
    state.userCenter = tmpUC;
  },
  QRPOPUP(state, qrPopup) {
    state.qrPopup = qrPopup
  }
  // SCROLL(state, scroll) {
  //   state.scroll = scroll
  // }
}
/* eslint-enable */
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
