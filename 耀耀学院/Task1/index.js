window.onload = function () {
	var name = document.getElementById('name');
	var msg = document.getElementsByTagName('p');
	var btn = document.getElementsByTagName('button')[0];

	var text;

	btn.addEventListener('click', function () {
		text = name.value;
		if (text == '') {
			showMsg('error');
		} else if (strLength(text) > 16 || strLength(text) < 4) {
			showMsg('info');
		} else {
			showMsg('success');
		}
	}, false);

	function showMsg(cn) {
		for (var i = 0; i < msg.length; i++) {
			if (msg[i].className == cn) {
				msg[i].style.display = 'block';
			} else {
				msg[i].style.display = 'none';
			}
		}
	}

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