function GetQueryStringRegExp(name, url) {
	var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
	if(reg.test(url)) return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
	return "";
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.lTrim = function() {
	return this.replace(/(^\s*)/g, "");
}
String.prototype.rTrim = function() {
	return this.replace(/(\s*$)/g, "");
}

String.prototype.startWith = function(str) {
	var reg = new RegExp("^" + str);
	return reg.test(this);
}

String.prototype.endWith = function(str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
}

function GetHtml(Url) {
	var Html;
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			Html = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", Url + (Url.indexOf('?') > -1 ? '&': '?') + "t=" + Math.random(), false);
	xmlhttp.send();
	return Html;
}
function GetCss(Url, Name, NewVer) {
	var a, b;
	a = "Css_" + Name;
	b = a + "_Ver";
	if (!window.localStorage.getItem(a) || parseInt(window.localStorage.getItem(b)) < NewVer) {
		window.localStorage.setItem(a, GetHtml(Url));
		window.localStorage.setItem(b, NewVer);
	}
	document.write("<style>" + window.localStorage.getItem(a) + "</style>");
}
function SetJS(JsData) {
	var hjs = document.createElement('script');
	hjs.text = JsData;
	document.body.appendChild(hjs);
}
function GetJs(Url, Name, NewVer) {
	var a, b;
	a = "Js_" + Name;
	b = a + "_Ver";
	if (!window.localStorage.getItem(a) || parseInt(window.localStorage.getItem(b)) < NewVer) {
		var c = GetHtml(Url);
		window.localStorage.setItem(a, c);
		if (c.indexOf('//EndSub') > -1) {
			window.localStorage.setItem(b, NewVer);
		}
	}
	SetJS(window.localStorage.getItem(a));
}