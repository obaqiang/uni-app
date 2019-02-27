import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		token: '',
		OrgId: '',
		connect_url: 'http://47.101.50.234:83/',
		// current_language:'zh-CN',
		connect_url_all: [
			'http://182.61.31.228:8100/',
			'http://182.61.31.228:8101/',
			'http://182.61.31.228:8102/'
		],
		current_version: 103,
		deviceType: 8,
		post_header: ''
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		},
		MacInfo() {
			var locator = new ActiveXObject("WbemScripting.SWbemLocator");
			var service = locator.ConnectServer(".");
			var properties = service.ExecQuery("Select * from Win32_NetworkAdapterConfiguration Where IPEnabled =True");
			var e = new Enumerator(properties); {
				var p = e.item();
				var mac = p.MACAddress;
				console.log(mac)
				return (mac)
			}
		},
		changeServerUrl(state, choosed_url) {
			state.connect_url = choosed_url
		},
		changeToken(state, token) {
			state.token = token
		},
		// 		changeLanguage(state,current_language){
		// 			state.current_language = current_language
		// 		},
		changeOrgId(state, OrgId) {
			state.OrgId = OrgId
		},
		changePostHeader(state, post_header) {
			state.post_header = post_header
		},
		MyLoginSucRes(state, res,that) {
			if (res.data.success == true) {
				if (res.data.result.currentOrgUnit == null) {
					uni.showToast({
						title: '当前用户不属于任何组织，无法登录',
						duration: 2000
					});
				} else if (res.data.result.grantPermission == null) {
					uni.showToast({
						title: '用户未授权',
						duration: 2000
					});
				} else {
					state.token = res.data.result.token
					let post_header = {
						'Content-Type': 'application/json', //自定义请求头信息
						'Authorization': 'Bearer ' + res.data.result.token,
						'Abp.Localization.CultureName': Vue.prototype.$i18n.locale
					}
					state.post_header = post_header
					// that.changePostHeader(post_header)
					// that.changeOrgId(res.data.result.currentOrgUnit.id)
					state.changeOrgId = res.data.result.currentOrgUnit.id
					// that.childPermissions = res.data.result.grantPermission.childPermissions[0].childPermissions
					uni.setStorageSync('childPermissions', res.data.result.grantPermission.childPermissions[0].childPermissions);
					uni.setStorageSync('currentOrgUnit', res.data.result.currentOrgUnit);
					uni.setStorageSync('orgUnits', res.data.result.orgUnits);
					uni.switchTab({
						url: '../homepage/homepage'
					})
				}

			} else {
				uni.showToast({
					title: res.data.error.message,
					duration: 2000
				});
			}
		}
	}
})

export default store
