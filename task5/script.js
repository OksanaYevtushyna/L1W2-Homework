function fibonacci (num) {
	var digit = [0,1];
	for (var i = 1; i < num; i++) {
		digit[digit.length] = digit[digit.length-1] + digit[digit.length-2];
	}
      return digit;
}
console.log(fibonacci(10));