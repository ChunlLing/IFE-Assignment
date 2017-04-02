window.onload = function () {
	// dir代表方向。0表示面向上面（即初始状态）
	// 1表示面向左边。2表示面向右边，3表示面向下面
	var dir = 0;
	// angle用于记录旋转角度
	var angle = 0;
	// 表示移动步长
	var step = 40;

	$('.go').bind('click', function () {
		var posX = parseInt($('.box').left());
		var posY = parseInt($('.box').top());

		if (angle == 0) {
			dir = 0;
		} else if (angle == -90) {
			dir = 1;
		} else if (angle == 90) {
			dir = 2;
		} else if (angle == 180) {
			dir = 3;
		}

		console.log('dir : ' + dir);

		if (dir == 0) {
			if (posY > 0 && posY < 360) {
				$('.box').top( posY - step + 'px');
			} else {
				alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
			}
		} else if (dir == 1) {
			if (posX > 0 && posX < 360) {
				$('.box').left( posX - step + 'px');
			} else {
				alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
			}
		} else if (dir == 2) {
			if (posX > 0 && posX < 360) {
				$('.box').top( posX + step + 'px');
			} else {
				alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
			}
		} else {
			if (posY > 0 && posY < 360) {
				$('.box').left( posY + step + 'px');
			} else {
				alert('ヽ(≧□≦)ノ撞到墙壁啦，换别的方向吧~');
			}
		}
	});
	$('.t-l').bind('click', function () {
		angle -= 90;
		$('.box').css('transform', 'rotate(' + angle + 'deg)');
		console.log(angle);
	});
	$('.t-r').bind('click', function () {
		angle += 90;
		$('.box').css('transform', 'rotate(' + angle + 'deg)');
		console.log(angle);
	});
	$('.t-b').bind('click', function () {
		angle += 180;
		$('.box').css('transform', 'rotate(' + angle + 'deg)');
		console.log(angle);
	});
};