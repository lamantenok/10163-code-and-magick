'use strict';

(function() {

  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var formText = document.getElementById('review-text');
  var formName = document.getElementById('review-name');
  var btnSubmit = document.querySelector('.review-submit');
  btnSubmit.disabled = true;

  document.forms[1].addEventListener('keydown', validation, false);
  document.forms[1].addEventListener('change', validation, false);


  function validation() {
    var formNameValue = document.getElementById('review-name').value;
    var formTextValue = document.getElementById('review-text').value;
    var revieValue = +(document.querySelector("[name='review-mark']:checked").value);

    if (formNameValue.length === 0) {
      btnSubmit.disabled = true;

    } else if (formTextValue.length === 0 && revieValue <= 3) {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }

    if (formNameValue.length === 0 && formTextValue.length === 0) {
      document.querySelector('.review-fields-text').style.display = 'inline-block';
      document.querySelector('.review-fields-name').style.display = 'inline-block';
    } else if (formNameValue.length === 0 && formTextValue.length < 0) {
      document.querySelector('.review-fields-text').style.display = 'none';
      document.querySelector('.review-fields-name').style.display = 'inline-block';
    } else if (formNameValue.length > 0 && formTextValue.length === 0) {
      document.querySelector('.review-fields-text').style.display = 'inline-block';
      document.querySelector('.review-fields-name').style.display = 'none';
    } else {
      document.querySelector('.review-fields-text').style.display = 'none';
      document.querySelector('.review-fields-name').style.display = 'none';
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