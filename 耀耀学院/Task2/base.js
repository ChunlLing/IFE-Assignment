// 前台调用
var $ = function (args) {
	return new Base(args);
};

// 基础库
function Base(selector) {
	this.elements = [];
	switch (selector.charAt(0)) {
		case '#' :
			this.elements.push(document.getElementById(selector.substring(1)));
			break;
		case '.' :
			this.elements = (document.getElementsByClassName(selector.substring(1)));
			break;
		default :
			this.elements = document.getElementsByTagName(selector);
	}
	return this;
}