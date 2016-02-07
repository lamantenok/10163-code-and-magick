'use strict';

(function() {

  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var formText = document.getElementById('review-text');
  var formName = document.getElementById('review-name');
  var btnSubmit = document.querySelector('.review-submit');

  formText.addEventListener('keydown', validation, false);

  formName.addEventListener('keydown', validation, false);


  function validation() {
    var formNameValue = document.getElementById('review-name').value;
    var formTextValue = document.getElementById('review-text').value;
    if (formNameValue.length > 0) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }

    for (var i = 1; i <= 5; i++) {
      var revieValue = document.getElementById('review-mark-' + i).value;
      if (formTextValue.length > 0) {
        if (revieValue.checked < 3) {
          btnSubmit.disabled = true;
        } else {
          btnSubmit.disabled = false;
        }
      }
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
