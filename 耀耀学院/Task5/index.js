window.onload = function () {
	// dir代表方向。0表示面向上面（即初始状态）
	// 1表示面向右边，2表示面向下面，3表示面向左边
	var dir = 0;
	// angle用于记录旋转角度
	var angle = 0;
	// 表示移动步长
	var step = parseInt($('.item').css('width'));

	$('#go').click(function () {
		action('GO');
	});
	$('#tun-r').click(function () {
		action('TUN RIG');
	});
	$('#tun-b').click(function () {
		action('TUN BAC');
	});
	$('#tun-l').click(function () {
		action('TUN LEF');
	});

	$('#tra-t').click(function () {
		action('TRA TOP');
	});
	$('#tra-r').click(function () {
		action('TRA RIG');
	});
	$('#tra-b').click(function () {
		action('TRA BAC');
	});
	$('#tra-l').click(function () {
		action('TRA LEF');
	});

	$('#mov-t').click(function () {
		action('MOV TOP');
	});
	$('#mov-r').click(function () {
		action('MOV RIG');
	});
	$('#mov-b').click(function () {
		action('MOV BAC');
	});
	$('#mov-l').click(function () {
		action('MOV LEF');
	});

	$('#com-btn').click(function () {
		var command = $('#command').value();
		action(command);

	});

	function action(direction) {
		switch (direction.toUpperCase()) {
			case 'GO' : move(); break;
			case 'TUN RIG' : rotate('r'); break;
			case 'TUN BAC' : rotate('b'); break;
			case 'TUN LEF' : rotate('l'); break;
			case 'TRA TOP' : move('t'); break;
			case 'TRA RIG' : move('r'); break;
			case 'TRA BAC' : move('b'); break;
			case 'TRA LEF' : move('l'); break;
			case 'MOV TOP' : rotate('t'); move('t'); break;
			case 'MOV RIG' : rotate('r'); move(); break;
			case 'MOV BAC' : rotate('b'); move(); break;
			case 'MOV LEF' : rotate('l'); move(); break;
		}
	}

	function rotate(direction) {
		if (direction == 't') {
			// 向上转
			angle = 0;
		} else if (direction == 'r') {
			// 向右转
			angle += 90;
		} else if (direction == 'b') {
			// 向下转
			angle += 180;
		} else if (direction == 'l') {
			// 向左转
			angle += 270;
		}
		angle %= 360;
		$('.box').css('transform', 'rotate(' + angle + 'deg)');
	}

	function move(direction) {
		var posX = Math.ceil(parseInt($('.box').left()));
		var posY = Math.ceil(parseInt($('.box').top()));
		var warning = 'ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~';
		
		if (arguments.length == 0) {
			// 向前走
			switch (angle) {
				case 0 : dir = 0; break;
				case 90 : dir = 1; break;
				case 180 : dir = 2; break;
				case 270 : dir = 3; break;
			}
		} else if (direction == 't') {
			dir = 0;
		} else if (direction == 'r') {
			dir = 1;
		} else if (direction == 'b') {
			dir = 2;
		} else if (direction == 'l') {
			dir = 3;
		}
		if (dir == 0) {
			if (posY > 0 && posY <= 360) {
				$('.box').top( posY - step + 'px');
			} else {
				alert(warning);
			}
		} else if (dir == 1) {
			if (posX >= 0 && posX < 360) {
				$('.box').left( posX + step + 'px');
			} else {
				alert(warning);
			}
		} else if (dir == 2) {
			if (posY >= 0 && posY < 360) {
				$('.box').top( posY + step + 'px');
			} else {
				alert(warning);
			}
		} else if (dir == 3) {
			if (posX > 0 && posX <= 360) {
				$('.box').left( posX - step + 'px');
			} else {
				alert(warning);
			}
		}
	}
};