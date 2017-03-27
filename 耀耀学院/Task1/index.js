window.onload = function () {
	var name = document.getElementById('name');
	var msg = document.getElementsByTagName('p');
	var btn = document.getElementsByTagName('button')[0];

	var text;

	btn.addEventListener('click', function () {
		text = name.value;
		if (text == '') {
			showMsg('error');
		} else if (text.length > 16 || text.length < 4) {
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
};