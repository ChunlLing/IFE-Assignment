window.onload = function () {
	var input = document.getElementById('input');			// 输入框DOM对象
	var leftIn = document.getElementById('leftIn');			// 左侧入按钮对象
	var rightIn = document.getElementById('rightIn');		// 右侧如按钮对象
	var leftOut = document.getElementById('leftOut')		// 左侧出按钮对象
	var rightOut = document.getElementById('rightOut');		// 右侧出按钮对象
	var auto = document.getElementById('auto');				// 自动生成按钮对象
	var sortBtn = document.getElementById('sortBtn');		// 排序按钮对象
	var box = document.getElementById('box');				// 第一个显示框对象
	var sort = document.getElementById('sort');				// 排序后显示框对象

	// 用于存放输入框中的值
	var data;
	// 用于存放box中已有的值
	var arr = [];

	// 点击左侧入
	leftIn.addEventListener('click', function () {
		data = input.value;
		if (checkNum(data)) {
			// 已输入个数小于60
			if (box.children.length < 60) {
				var span = document.createElement('span');
				span.style.height = data + 'px';
				arr.unshift(data);
				console.log('arr.unshift:' + arr);
				box.prepend(span);
			} else {
				alert('输入的个数超过60，无法再添加啦！删掉些呗~');
			}
		}
	}, false)

	// 点击右侧入
	rightIn.addEventListener('click', function () {
		data = input.value;
		if (checkNum(data)) {
			if (box.children.length < 60) {
				var span = document.createElement('span');
				span.style.height = data + 'px';
				arr.push(data);
				console.log('arr.push:' + arr);
				box.append(span);
			} else {
				alert('输入的个数超过60，无法再添加啦！删掉些呗~');
			}
		}
	}, false)

	// 点击左侧出
	leftOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			arr.shift();
			console.log('arr.shift:' + arr);
			box.removeChild(box.firstChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
		
	}, false)

	// 点击右侧出
	rightOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			arr.pop();
			console.log('arr.pop:' + arr);
			box.removeChild(box.lastChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
	}, false)

	// 点击自动生成
	auto.addEventListener('click', function () {
		arr = [];
		while (sort.hasChildNodes()) {
			sort.removeChild(sort.firstChild);
		}
		while (box.hasChildNodes()) {
			box.removeChild(box.firstChild);
		}
		for (var i = 0; i < 60; i++) {
			var span = document.createElement('span');
			var rand = parseInt(Math.random() * 90 + 10);
			arr[i] = rand;
			span.style.height = rand + 'px';
			box.append(span);
		}
	}, false);

	// 点击排序
	sortBtn.addEventListener('click', function () {
		while (sort.hasChildNodes()) {
			sort.removeChild(sort.firstChild);
		}
		console.log(arr);
		var arrSort = sortArr(arr);
		console.log(arr);
		for (var i = 0; i < box.children.length; i++) {
			var span = document.createElement('span');
			span.style.height = arrSort[i] + 'px';
			sort.append(span);
		}
	}, false);

	// 检测输入的值是否合法
	function checkNum(value) {
		if (isNaN(value)) {
			alert('输入的值不合法！请输入数字！');
			input.value = '';
			return false;
		} else if (value == '') {
			alert('请输入数字');
			return false;
		} else if (value >= 100 || value <= 10) {
			alert('请输入10-100之间的数！');
			return false;
		} else {
			return true;
		}
	}

	// 排序
	function sortArr(array) {
		var temp = [];
		for (var i = 0; i < array.length; i++) {
			temp[i] = array[i];
		}
		for (var i = 0; i < temp.length; i++) {
			for (var j = 0; j < temp.length; j++) {
				if (temp[i] < temp[j]) {
					var cc = temp[i];
					temp[i] = temp[j];
					temp[j] = cc;
				}
			}
		}
		return temp;
	}

};