$(document).ready(function() {
	for (var i = 1; i < 101; i++) {
		if (i%3 == 0 && i%5 == 0) {
			$("ul").append("<li>fizzbuzz</li>")
		}
		else if (i%5 == 0) {
			$("ul").append("<li>buzz</li>")
		}
		else if (i%3 == 0) {
			$("ul").append("<li>fizz</li>")
		}
		else
			$("ul").append("<li>" + i + "</li>")
	};
});