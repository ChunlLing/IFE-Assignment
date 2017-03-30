window.onload = function () {

	var validate = {
		name: function () {
			$('#name').removeClass();
			$('#name').next().text('').removeClass();
			var len = 0;
			for (var ch of $('#name').value()) {
				if (ch.codePointAt(0) > 0xff) {
					len += 2;
				} else {
					len += 1;
				}
			}
			if ($('#name').value().trim() == '') {
				$('#name').addClass('error');
				$('#name').next().text('名称不得为空').addClass('error');
				return false;
			} else if (len < 4 || len > 12) {
				$('#name').addClass('error');
				$('#name').next().text('名称在4-12个字符之间').addClass('error');
			} else {
				$('#name').addClass('success');
				$('#name').next().text('格式正确').addClass('success');
				return true;
			}
		},
		pass: function () {
			$('#pass').removeClass();
			$('#pass').next().text('').removeClass();
			var len = $('#pass').value().length;
			var type = 0;
			if (/[\d]/.test($('#pass').value())) {
				type++;
			}
			if (/[a-z]/.test($('#pass').value())) {
				type++;
			}
			if (/[A-Z]/.test($('#pass').value())) {
				type++;
			}
			if (len != 6) {
				$('#pass').addClass('error');
				$('#pass').next().text('密码为六位数').addClass('error');
			} else if (type < 3) {
				$('#pass').addClass('error');
				$('#pass').next().text('密码需包含数字和大小写字母三种类型').addClass('error');
			} else {
				$('#pass').addClass('success');
				$('#pass').next().text('格式正确').addClass('success');
				return true;
			}
		},
		notPass: function () {
			$('#notPass').removeClass();
			$('#notPass').next().text('').removeClass();
			if ($('#notPass').value() == '') {
				if (!$('#pass').value() == '') {
					$('#notPass').addClass('error');
					$('#notPass').next().text('两次密码不一致').addClass('error');
				}
			} else if ($('#notPass').value() !== $('#pass').value()) {
				$('#notPass').addClass('error');
				$('#notPass').next().text('两次密码不一致').addClass('error');
			} else {
				$('#notPass').addClass('success');
				$('#notPass').next().text('格式正确').addClass('success');
				return true;
			}
		},
		email: function () {
			$('#email').removeClass();
			$('#email').next().text('').removeClass();
			if ($('#email').value().match(/[\w]+@[\w]{2,4}\.com/)) {
				$('#email').addClass('success');
				$('#email').next().text('格式正确').addClass('success');
				return true;
			} else if ($('#email').value() == '') {
				$('#email').addClass('error');
				$('#email').next().text('邮箱不得为空').addClass('error');
			} else {
				$('#email').addClass('error');
				$('#email').next().text('格式不正确').addClass('error');
			}
		},
		mobile: function () {
			$('#mobile').removeClass();
			$('#mobile').next().text('').removeClass();
			if ($('#mobile').value().match(/[\d]{11}/)) {
				$('#mobile').addClass('success');
				$('#mobile').next().text('格式正确').addClass('success');
				return true;
			} else {
				$('#mobile').addClass('error');
				$('#mobile').next().text('格式不正确').addClass('error');
			}
		}
	};

	$('#name').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('必填，长度为4-16个字符，1个汉字算2个字符').addClass('info');
	}).bind('blur', function () {
		validate.name();
	});

	$('#pass').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('必填，长度为6个字符，必须包含数字和大小写字符').addClass('info');
	}).bind('blur', function () {
		validate.pass();
	});

	$('#notPass').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('请再次输入密码').addClass('info');
	}).bind('blur', function () {
		validate.notPass();
	});

	$('#email').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('请输入有效的邮箱，格式为example@example.com').addClass('info');
	}).bind('blur', function () {
		validate.email();
	});

	$('#mobile').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('请输入11位的手机号码').addClass('info');
	}).bind('blur', function () {
		validate.mobile();
	});

	$('button').bind('click', function () {
		console.log(validate.mobile.call($('#name')));
		if (validate.name.call($('#name')) && validate.pass.call($('#pass')) && validate.notPass.call($('#notPass')) && validate.email.call($('#email')) && validate.mobile.call($('#mobile'))) {
			alert('注册成功');
		} else {
			alert('信息未填写完整，请补充完整');
		}
	});
};