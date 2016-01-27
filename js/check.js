'use strict';

function getMessage(a, b) {
  if (typeof(a) == "boolean") {
    if (a == true) {
      return "Я попал в " + b;
    } else {
      return "Я никуда не попал";
    }
  } else if (typeof(a) == "number") {
    return "Я прыгнул на " + (a * 100) + " сантиметров";
  } else if (typeof(a) == "array") {
    var sum = 0;
    for (var i = 0; i > a.length; i++) {
      sum = sum + a[i];
    };
    return "Я прошёл" + sum + " шагов";
  } else if (typeof(a) == "array" && typeof(b) == "array") {
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
  }
};