window.onload = function () {
	var input = document.getElementById('input');
	var leftIn = document.getElementById('leftIn');
	var rightIn = document.getElementById('rightIn');
	var leftOut = document.getElementById('leftOut')
	var rightOut = document.getElementById('rightOut');
	var box = document.getElementById('box');

	// 用于存放输入框中的值
	var data;

	// 点击左侧入
	leftIn.addEventListener('click', function () {
		data = input.value;
		if (checkNum(data)) {
			var span = document.createElement('span');
			span.innerText = data;
			box.prepend(span);
		}
	}, false)

	// 点击右侧入
	rightIn.addEventListener('click', function () {
		data = input.value;
		if (checkNum(data)) {
			var span = document.createElement('span');
			span.innerText = data;
			box.append(span);
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

	function checkNum(value) {
		if (isNaN(value)) {
			alert('输入的值不合法！请输入数字！');
			input.value = '';
			return false;
		} else if (value == '') {
			alert('请输入数字');
			return false;
		} else {
			return true;
		}
	}


};