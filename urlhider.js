function hideevilurl(evilstring, goodstring) {
	var prefix = String.fromCharCode(8238);
	var between = "#!/?794473621=diu&4b412fd79ae1=q?/!#";
	var goodstring = goodstring.split("").reverse().join(""); // esrever.reverse(goodstring);
	var suffix = String.fromCharCode(8236);

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
	return "I HATE THIS THING";
}

function generate(form) {
	var result = document.getElementById('result');
	var valuestring = null;
	for(var i = 0; i < form.goodstring.length; i++) {
		if(form.goodstring[i].checked) {
			var valuestring = form.goodstring[i].value;
			break;
		}
	}
	result.value = hideevilurl(form.evilstring.value, findgoodurl(valuestring, form.other.value));
}
