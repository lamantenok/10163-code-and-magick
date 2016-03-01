 'use strict';
 (function() {
   var container = document.querySelector('.reviews-list');
   var filter = document.querySelector('.reviews-filter');
   filter.classList.add('invisible');
   reviews.forEach(function(review) {
     var element = reviewtemplate(review);
     container.appendChild(element);
   });

   function reviewtemplate(data) {
     var template = document.querySelector('#review-template');


     if ('content' in template) {
       var element = template.content.children[0].cloneNode(true);
     } else {
       var element = template.children[0].cloneNode(true);
     }

     element.querySelector('.review-text').textContent = data.description;
     var oldImg = element.querySelector('.review-author');
     var reviwRating = element.querySelector('.review-rating');
     var reviewImg = new Image();
     var reviwContainer = element;
     if (data.rating == 2) {
       reviwRating.classList.add('review-rating-two');
     }
     if (data.rating == 3) {
       reviwRating.classList.add('review-rating-three');
     }
     if (data.rating == 4) {
       reviwRating.classList.add('review-rating-four');
     }
     if (data.rating == 5) {
       reviwRating.classList.add('review-rating-five');
     }
     reviewImg.onload = function() {
       element.replaceChild(reviewImg, oldImg);
       reviewImg.style.height = '124px';
       reviewImg.style.width = '124px';
       reviewImg.classList.add('review-author');
     };
     reviewImg.onerror = function() {
       reviwContainer.classList.add('review-load-failure');
     };
     reviewImg.src = data.author.picture;
     return element;
   }
   filter.classList.remove('invisible');
 })();