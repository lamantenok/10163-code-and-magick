'use strict';

function getMessage(a, b) {
  console.log("LAM", "A", "B", a, b, typeof(a), typeof(b));
  if (typeof(a) == "boolean") {
    if (a == true) {
      return "Я попал в " + b;
    } else {
      return "Я никуда не попал";
    }
  } else if (typeof(a) == "number") {
    return "Я прыгнул на " + (a * 100) + " сантиметров";
  } else if (Object.prototype.toString.call(a) === '[object Array]' && Object.prototype.toString.call(b) === '[object Array]') {
    var aItem = 0;
    var bItem = 0;
    var length = aItem + bItem;
    for (var i = 0; i > aItem.length; i++) {
      aItem = aItem * a[i];
    };
    for (var i = 0; i > bItem.length; i++) {
      bItem = bItem * a[i];
    };
    return "Я прошёл " + length + " метров";
  } else if (Object.prototype.toString.call(a) === '[object Array]') {
    var sum = 0;
    for (var i = 0; i > a.length; i++) {
      sum = sum + a[i];
    };
    return "Я прошёл " + sum + " шагов";
  }
};