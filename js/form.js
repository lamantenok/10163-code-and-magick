'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');
  var reviewForm = document.querySelector('.review-form');

  var formNameValueCookie = docCookies.getItem('userName');
  var revieMarkCookie = docCookies.getItem('userMark');

  if (formNameValueCookie !== null) {
    document.getElementById('review-name').value = formNameValueCookie;
  }

  if (revieMarkCookie !== null) {
    document.getElementById('review-mark-' + revieMarkCookie).checked = true;
  }
  reviewForm.onsubmit = function(evt) {
    var formNameValue = document.getElementById('review-name').value;
    var revieMark = document.querySelector('[name="review-mark"]:checked').value;
    evt.preventDefault();
    var myBirthday = new Date('2015-08-15');
    var dateDif = (Date.now() - myBirthday) / 24 / 60 / 60 / 1000;
    var cookieDays = +Date.now() + dateDif * 24 * 60 * 60 * 1000;
    var formatDate = new Date(cookieDays).toUTCString();
    docCookies.setItem('userName', formNameValue, formatDate);
    docCookies.setItem('userMark', revieMark, formatDate);
    reviewForm.submit();
  };

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
})();
