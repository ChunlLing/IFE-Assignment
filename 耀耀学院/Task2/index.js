window.onload = function () {
	var name = getDOM('#name');
	var pass = getDOM('#pass');
	var notPass = getDOM('#notPass');
	var email = getDOM('#email');
	var mobile = getDOM('#mobile');
	var btn = getDOM('button')[0];

	var text;

	name.addEventListener('focus', function () {
		addClass(this, 'info');
		this.nextElementSibling.innerText = '必填，长度为4-16个字符';
	}, false);

	name.addEventListener('blur', function () {
		text = this.value;
		removeClass(this);		
		if (text == '') {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '名称不能为空';
		} else if (strLength(text) > 16 || strLength(text) < 4) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '长度必须在4-16个字符之间';
		} else {
			addClass(this, 'success');
			this.nextElementSibling.innerText = '格式正确';
		}
	}, false);

	pass.addEventListener('focus', function () {
		addClass(this, 'info');
		this.nextElementSibling.innerText = '必填，长度为4-16个字符';
	}, false);

	pass.addEventListener('blur', function () {
		text = this.value;
		removeClass(this);		
		if (text == '') {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '密码不能为空';
		} else if (strLength(text) > 16 || strLength(text) < 4) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '长度必须在4-16个字符之间';
		} else {
			addClass(this, 'success');
			this.nextElementSibling.innerText = '格式正确';
		}
	}, false);

	notPass.addEventListener('focus', function () {
		addClass(this, 'info');
		this.nextElementSibling.innerText = '必填，长度为4-16个字符';
	}, false);

	notPass.addEventListener('blur', function () {
		text = this.value;
		var password = pass.value;
		removeClass(this);
		if (text !== password) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '两次密码不一致';
		} else if (text == '') {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '输入不得为空';
		} else {
			addClass(this, 'success');
			this.nextElementSibling.innerText = '格式正确';
		}
	}, false);

	email.addEventListener('focus', function () {
		addClass(this, 'info');
		this.nextElementSibling.innerText = '必填，邮箱格式为xxx@xxx.com';
	}, false);

	email.addEventListener('blur', function () {
		text = this.value;
		removeClass(this);		
		if (text == '') {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '邮箱不能为空';
		} else if (text.indexOf('@') == -1) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '邮箱格式不正确';
		} else {
			addClass(this, 'success');
			this.nextElementSibling.innerText = '格式正确';
		}
	}, false);

	mobile.addEventListener('focus', function () {
		addClass(this, 'info');
		this.nextElementSibling.innerText = '必填，号码为11位数字';
	}, false);

	mobile.addEventListener('blur', function () {
		text = this.value;
		removeClass(this);
		if (isNaN(text)) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '请输入数字';
		} else if (text.length !== 11) {
			addClass(this, 'error');
			this.nextElementSibling.innerText = '请输入11位数字';
		} else {
			addClass(this, 'success');
			this.nextElementSibling.innerText = '格式正确';
		}
	}, false);

	// 获取DOM元素
	function getDOM(selector) {
		if (selector.indexOf('#') != -1) {
			return document.getElementById(selector.slice(1));
		} else if (selector.indexOf('.') != -1) {
			return document.getElementsByClassName(selector.slice(1));
		} else {
			return document.getElementsByTagName(selector);
		}
	}

	// 添加类
	function addClass(dom, cn) {
		dom.className += ' ' + cn;
	}

	// 移除类
	function removeClass(dom, cn) {
		if (cn !== undefined) {
			dom.className = dom.className.replace(cn, '');
		} else {
			dom.className = '';
		}
	};

	// 判断是否为中文字符
	function isCh(c) {
		return c.codePointAt(0) > 0xFF;
	}

	// 记录字符串长度
	function strLength(str) {
		var l = 0;
		for (var ch of str) {
			if (isCh(ch)) {
				console.log(l);
				l += 2;
			} else {
				l += 1;
			}
		}
		return l;
	}

};