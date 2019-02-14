function getCookie(name, defaultValue) {
	alert(123)
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return defaultValue;
}
export default {
  getCookie
}