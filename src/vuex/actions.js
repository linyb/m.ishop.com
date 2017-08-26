'use strict'

export const login = function ({ commit, state }, user) {
  commit('LOGIN', user)
  if (user.mail === '') {
    commit('ENTRY', { type: 'bind', url: '' })
  } else {
    commit('ENTRY', {})
  }
}
export const setEntry = function ({ commit }, entry) {
  commit('ENTRY', entry)
}
export const setVer = function ({ commit }, ver) {
  commit('SETVER', ver)
}
// export const setScroll = function ({ commit }, scroll) {
//   commit('SCROLL', scroll)
// }
export const loading = function ({ commit }, bl) {
  commit('LOADING', bl)
}
export const seo = function ({ commit }, seoObj) {
  commit('SEO', seoObj)
}
export const layout = function ({ commit }, layoutObj) {
  commit('LAYOUT', layoutObj)
}
export const logout = function ({ commit }) {
  // if (location.pathname.indexOf('/my') >= 0) {
  //   console.log(this);
  //   this.$router.go('/')
  // }
  commit('LOGOUT')
}
/* eslint-disable */
export const toast = function ({ commit, state }, toast = {}) {
  if (toast.content instanceof Object) {
    toast.content = JSON.stringify(toast.content)
  }

  if (state.notice.toast.clear) {
    clearTimeout(state.notice.toast.clear)
  }

  toast.clear = setTimeout(() => {
    commit('TOAST', {})
  }, toast.time || 2000)

  commit('TOAST', toast)
}
export const qrPopup = function ({ commit }, qrPopup) {
  commit('QRPOPUP', qrPopup)
}

