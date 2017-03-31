window.onload = function () {

	var id = document.getElementsByName('identity');
	var stu = document.getElementById('student');
	var wor = document.getElementById('worker');

	var stuInfo = document.getElementById('stuInfo');
	var worInfo = document.getElementById('worInfo');

	var city = document.getElementById('city');
	var school = document.getElementById('school');

	var cArr = [
		'虚拟世界', 
		'中国',
		'英国'
	];
	var sArr = [
		['霍格沃茨魔法学校', '布斯巴顿魔法学院', '艾利斯顿学院'], 
		['北京大学', '清华大学', '浙江大学', '嘉应学院'],
		['牛津大学', '剑桥大学']
	];

	stu.addEventListener('click', function () {
		if (stu.checked) {
			worInfo.style.display = 'none';
			stuInfo.style.display = 'block';
		}
	}, false);

	wor.addEventListener('click', function () {
		if (!wor.getAttribute('checked')) {
			stuInfo.style.display = 'none';
			worInfo.style.display = 'block';
		} 
	}, false);

	function cityInit() {
		city.length = cArr.length;
		for (var i = 0; i < cArr.length; i++) {
			city.options[i].text = cArr[i];
		}
		school.length = sArr[0].length;
		for (var i = 0; i < sArr[0].length; i++) {
			school.options[i].text = sArr[0][i];
		}
	}

	function schoolInit(index) {
		school.length = sArr[index].length;
		for (var i = 0; i < sArr[index].length; i++) {
			school.options[i].text = sArr[index][i];
		}
	}
	cityInit();
	city.addEventListener('change', function () {
		schoolInit(this.selectedIndex);
	}, false);
};