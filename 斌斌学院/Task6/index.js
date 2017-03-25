window.onload = function () {
	var input = document.getElementById('input');			// 文本框DOM对象
	var leftIn = document.getElementById('leftIn');			// 左侧入按钮对象
	var rightIn = document.getElementById('rightIn');		// 右侧入按钮对象
	var leftOut = document.getElementById('leftOut')		// 左侧出按钮对象
	var rightOut = document.getElementById('rightOut');		// 右侧出按钮对象
	var box = document.getElementById('box');				// box显示框对象
	var search = document.getElementById('search');			// 查询输入框对象
	var searchBtn = document.getElementById('searchBtn');	// 查询按钮对象

	// 用于存放文本框中的值
	var data;
	// 用于存放box中已有的值
	var arr = [];
	// 用于存放要查询的文本
	var text = '';

	// 文本框输入文本
	input.onkeydown = function (e) {
		if (e.keyCode == 9) {
			e.preventDefault();
			this.value += '\t';
		}
	};

	// 点击查询按钮
	searchBtn.addEventListener('click', function () {
		text = search.value;
		var reg = new RegExp(text, 'g');
		var p = document.querySelectorAll('p');

		for (var i = 0; i < arr.length; i++) {
				p[i].innerHTML = arr[i];
				p[i].innerHTML = arr[i].replace(reg, '<span class="highlight">' + text + '</span>');
		}
	});

	// 点击左侧入
	leftIn.addEventListener('click', function () {
		data = input.value;
		arr.unshift(data);
		box.prepend(createNode(data));
	}, false)

	// 点击右侧入
	rightIn.addEventListener('click', function () {
		data = input.value;
		arr.push(data);
		box.append(createNode(data));
	}, false)

	// 点击左侧出
	leftOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			arr.shift();
			box.removeChild(box.firstChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
		
	}, false)

	// 点击右侧出
	rightOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			arr.pop();
			box.removeChild(box.lastChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
	}, false)

	// 生成节点
	function createNode(h) {
		var pre = document.createElement('pre');
		var p = document.createElement('p');
		p.innerText = h;
		pre.append(p);
		return pre;
	}

	// 清除所有子节点
	function clearNodes(dom) {
		while (dom.hasChildNodes()) {
			dom.removeChild(dom.firstChild);
		}
	}

};