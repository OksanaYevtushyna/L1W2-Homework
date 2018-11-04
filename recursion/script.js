var digit = function (num) {
  if (num > 0) {
    console.log(num);
    return digit(num-1)
  } else {
    return num;
  }
}
digit(10);