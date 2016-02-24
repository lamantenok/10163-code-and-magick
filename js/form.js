'use strict';

(function() {

  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var btnSubmit = document.querySelector('.review-submit');
  btnSubmit.disabled = true;
  validation();
  document.forms[1].addEventListener('change', validation, false);
  document.forms[1].addEventListener('keyup', validation, false);

  function validation() {
    var formNameValue = document.getElementById('review-name').value;
    var formTextValue = document.getElementById('review-text').value;
    var revieValue = +(document.querySelector('[name="review-mark"]:checked').value);
    var emptyName = (formNameValue.length === 0);
    var emptyText = (formTextValue.length === 0);
    var mark = (revieValue < 3);
    var markText = emptyText && mark;
    document.querySelector('.review-fields-text').style.display = 'none';
    document.querySelector('.review-fields-name').style.display = 'none';
    document.querySelector('.review-fields').style.display = 'none';
    if (emptyName) {
      btnSubmit.disabled = true;

    } else if (markText) {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }

    if (emptyName) {
      document.querySelector('.review-fields-name').style.display = 'inline-block';
    } else {
      document.querySelector('.review-fields-name').style.display = 'none';
    }
    if (markText) {
      document.querySelector('.review-fields-text').style.display = 'inline-block';
    } else {
      document.querySelector('.review-fields-text').style.display = 'none';
    }
    if (emptyName || markText) {
      document.querySelector('.review-fields').style.display = 'inline-block';
    } else {
      document.querySelector('.review-fields').style.display = 'none';
    }
  }
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
})();
