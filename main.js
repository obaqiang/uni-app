import Vue from 'vue'
import App from './App'

import store from './store'
import VueI18n from 'vue-i18n'
import cookie from './static/cookie'

Vue.use(VueI18n)
Vue.config.productionTip = false
var i18n = new VueI18n({
	locale: 'zh-CN',
	messages: {
		'en': {
			mylogin: {
				login_text: 'login',
				login_in_now: 'Landing immediately',
				configure_server: 'Configure server'
			},
			copyRightIntro: {
				all_right_reserved: 'all right reserved'
			},
			homepage: {
				homepage_title: 'intelligent warehousing',
				homepage_bar_a: 'homepage',
				homepage_bar_b: 'personal',
				today_in: 'today_in',
				today_out: 'today_out'
			}
		},
		'zh-CN': {

			mylogin: {
				login_text: '用户登陆',
				login_in_now: '立即登陆',
				configure_server: '配置服务器'
			},
			copyRightIntro: {
				all_right_reserved: '版权所有:玖坤信息'
			},
			homepage: {
				homepage_title: '智能仓储',
				homepage_bar_a: '首页',
				homepage_bar_b: '个人中心',
				today_in: '今日入库',
				today_out: '今日出库'
			}
		},
		'zh-TW': {
			mylogin: {
				login_text: '用戶登陸',
				login_in_now: '立即登陸',
				configure_server: '配置服務器'
			},
			copyRightIntro: {
				all_right_reserved: '版權所有:玖坤信息'
			},
			homepage: {
				homepage_title: '智能倉儲',
				homepage_bar_a: '首頁',
				homepage_bar_b: '個人中心',
				today_in: '今日入庫',
				today_out: '今日出庫'
			}
		}
	}
})
Vue.prototype._i18n = i18n
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
