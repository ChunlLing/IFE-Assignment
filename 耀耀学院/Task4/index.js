window.onload = function () {
	// dir代表方向。0表示面向上面（即初始状态）
	// 1表示面向右边，2表示面向下面，3表示面向左边
	var dir = 0;
	// angle用于记录旋转角度
	var angle = 0;
	// 表示移动步长
	var step = 40;

	$('.go').click(function () {
		rotate('GO');
	});
	$('.t-r').click(function () {
		rotate('TUN RIG');
	});
	$('.t-b').click(function () {
		rotate('TUN BAC');
	});
	$('.t-l').click(function () {
		rotate('TUN LEF');
	});

	$('#com-btn').click(function () {
		var command = $('#command').value();
		rotate(command);

	});

	function rotate(direction) {
		if (direction.toUpperCase() == 'TUN RIG') {
			// 向右转
			angle += 90;
		} else if (direction.toUpperCase() == 'TUN BAC') {
			// 向后转
			angle += 180;
		} else if (direction.toUpperCase() == 'TUN LEF') {
			// 向左转
			angle -= 270;
		}
		$('.box').css('transform', 'rotate(' + angle + 'deg)');

		if (direction.toUpperCase() == 'GO') {
			// 向前走
			var posX = parseInt($('.box').left());
			var posY = parseInt($('.box').top());

			angle %= 360;

			switch (angle) {
				case 0 : dir = 0; break;
				case 90 : dir = 1; break;
				case 180 : dir = 2; break;
				case 270 : dir = 3; break;
			}

			if (dir == 0) {
				if (posY > 0 && posY <= 360) {
					$('.box').top( posY - step + 'px');
				} else {
					alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
				}
			} else if (dir == 1) {
				if (posX >= 0 && posX < 360) {
					$('.box').left( posX + step + 'px');
				} else {
					alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
				}
			} else if (dir == 2) {
				if (posY >= 0 && posY < 360) {
					$('.box').top( posY + step + 'px');
				} else {
					alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
				}
			} else if (dir == 3) {
				if (posX > 0 && posX <= 360) {
					$('.box').left( posX - step + 'px');
				} else {
					alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
				}
			}
		}
	}
};