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
		token:'',
		OrgId:'',
		connect_url: 'http://192.168.0.115:8010/',
		// current_language:'zh-CN',
		connect_url_all: [
			'http://182.61.31.228:8100/',
			'http://182.61.31.228:8101/',
			'http://182.61.31.228:8102/'
		],
		current_version:103
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
		changeServerUrl(state,choosed_url) {
			state.connect_url = choosed_url
		},
		changeToken(state,token){
			state.token = token
		},
// 		changeLanguage(state,current_language){
// 			state.current_language = current_language
// 		},
		changeOrgId(state,OrgId){
			state.OrgId = OrgId
		}
	}
})

export default store
