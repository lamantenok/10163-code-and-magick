'use strict';

(function() {

  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');
  var reviewForm = document.forms[1];

  var formText = document.getElementById('review-text');
  var formName = document.getElementById('review-name');
  var btnSubmit = document.querySelector('.review-submit');
  var reviewMark = document.querySelector('.review-mark');

  formText.addEventListener('keydown', validation, false);

  formName.addEventListener('keydown', validation, false);


  function validation() {
    var formName = document.getElementById('review-name').value;
    var formText = document.getElementById('review-text').value;
    if (formName.length > 0) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }

    for (var i = 1; i <= 5; i++) {
      var revieValue = document.getElementById('review-mark-' + i).value;
      if (formText.length > 0) {
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
