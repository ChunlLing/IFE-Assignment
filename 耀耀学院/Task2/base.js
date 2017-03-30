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

// 获取节点的数量
Base.prototype.length = function () {
	return this.elements.length;
};

// 事件绑定
Base.prototype.bind = function (type, fn) {
	for (let i = 0; i < this.elements.length; i++) {
		this.elements[i].addEventListener(type, fn, false);
	}
	return this;
};