// 前台调用
var $ = function (args) {
	return new Base(args);
};

// 基础库
function Base(args) {
	this.elements = [];
	if (typeof args == 'string') {		
		// 传入的参数是字符串
		switch (args.charAt(0)) {
			case '#' :
				this.elements.push(document.getElementById(args.substring(1)));
				break;
			case '.' :
				this.elements = (document.getElementsByClassName(args.substring(1)));
				break;
			default :
				this.elements = document.getElementsByTagName(args);
		}
	} else {
		// 传入的参数是this
		this.elements[0] = args;
	}
}

// 获取节点的数量
Base.prototype.length = function () {
	return this.elements.length;
};

// 获取上一个节点对象
Base.prototype.prev = function () {
	for (let i = 0; i <this. elements.length; i++) {
		this.elements[i] = this.elements[i].prevElementSibling;
	}
	return this;
};

// 获取下一个节点对象
Base.prototype.next = function () {
	for (let i = 0; i <this. elements.length; i++) {
		this.elements[i] = this.elements[i].nextElementSibling;
	}
	return this;
};

// 事件绑定
Base.prototype.bind = function (type, fn) {
	for (let i = 0; i < this.elements.length; i++) {
		this.elements[i].addEventListener(type, fn, false);
	}
	return this;
};

// 添加class
Base.prototype.addClass = function (cn) {
	for (let i = 0; i < this.elements.length; i++) {
		this.elements[i].className += ' ' + cn;
	}
	return this;
};

// 移除class
Base.prototype.removeClass = function (cn) {
	for (let i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			this.elements[i].removeAttribute('class');
		} else {
			this.elements[i].className = this.elements[i].className.replace(cn, '');
		}
	}
	return this;
};

// 文本内容
Base.prototype.text = function (content) {
	for (let i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].innerText;
		} else {
			this.elements[i].innerText = content;
		}
	}
	return this;
};

// 表单值
Base.prototype.value = function (content) {
	for (let i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].value;
		} else {
			this.elements[i].value = content;
		}
	}
	return this;
};