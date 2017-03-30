window.onload = function () {

	var validate = {
		name: function () {
			$(this).removeClass();
			$(this).next().text('').removeClass();
			var len = 0;
			for (var ch of $(this).value()) {
				if (ch.codePointAt(0) > 0xff) {
					len += 2;
				} else {
					len += 1;
				}
			}
			if ($(this).value().trim() == '') {
				$(this).addClass('error');
				$(this).next().text('名称不得为空').addClass('error');
			} else if (len < 4 || len > 12) {
				$(this).addClass('error');
				$(this).next().text('名称在4-12个字符之间').addClass('error');
			} else {
				$(this).addClass('success');
				$(this).next().text('格式正确').addClass('success');
			}
		},
		pass: function () {
			$(this).removeClass();
			$(this).next().text('').removeClass();
			var len = $(this).value().length;
			var type = 0;
			if (/[\d]/.test($(this).value())) {
				type++;
			}
			if (/[a-z]/.test($(this).value())) {
				type++;
			}
			if (/[A-Z]/.test($(this).value())) {
				type++;
			}
			if (len != 6) {
				$(this).addClass('error');
				$(this).next().text('密码为六位数').addClass('error');
			} else if (type < 3) {
				$(this).addClass('error');
				$(this).next().text('密码需包含数字和大小写字母').addClass('error');
			} else {
				$(this).addClass('success');
				$(this).next().text('格式正确').addClass('success');
			}
		},
		notPass: function () {},
		email: function () {},
		mobile: function () {}
	};

	$('#name').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('必填，长度为4-16个字符，1个汉字算2个字符').addClass('info');
	}).bind('blur', function () {
		validate.name.call(this);
	});

	$('#pass').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('必填，长度为6个字符，必须包含数字和大小写字符').addClass('info');
	}).bind('blur', function () {
		validate.pass.call(this);
	});


};