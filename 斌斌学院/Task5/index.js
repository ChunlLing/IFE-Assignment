window.onload = function () {
	var input = document.getElementById('input');
	var leftIn = document.getElementById('leftIn');
	var rightIn = document.getElementById('rightIn');
	var leftOut = document.getElementById('leftOut')
	var rightOut = document.getElementById('rightOut');
	var auto = document.getElementById('auto');
	var sortBtn = document.getElementById('sortBtn');
	var box = document.getElementById('box');
	var sort = document.getElementById('sort');

	// 用于存放输入框中的值
	var data;
	var arr = [];

	// 点击左侧入
	leftIn.addEventListener('click', function () {
		data = input.value;
		if (checkNum(data)) {
			if (box.children.length < 60) {
				var span = document.createElement('span');
				// span.innerText = data;
				span.style.height = data + 'px';
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
				// span.innerText = data;
				span.style.height = data + 'px';
				box.append(span);
			} else {
				alert('输入的个数超过60，无法再添加啦！删掉些呗~');
			}
		}
	}, false)

	// 点击左侧出
	leftOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			box.removeChild(box.firstChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
		
	}, false)

	// 点击右侧出
	rightOut.addEventListener('click', function () {
		if (box.children.length != 0) {
			box.removeChild(box.lastChild);
		} else {
			alert('当前队列已空！无法出队！');
		}
	}, false)

	// 点击自动生成
	auto.addEventListener('click', function () {
		arr = [];
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
		var arrSort = sortArr(arr);
		for (var i = 0; i < box.children.length; i++) {
			console.log(arrSort[i]);
			var span = document.createElement('span');
			span.style.height = arrSort[i] + 'px';
			sort.append(span);
		}
	}, false);

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
		return array.sort();
	}

};