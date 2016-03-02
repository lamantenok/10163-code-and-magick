 'use strict';
 (function() {
   var reviewDate = new Date() - (14 * 24 * 60 * 60 * 1000);
   var container = document.querySelector('.reviews-list');
   var filter = document.querySelector('.reviews-filter');
   var reviewsBlock = document.querySelector('.reviews');
   var activeFilter = 'reviews-all';
   var loadedReviews = null;
   var filters = document.querySelectorAll('[name="reviews"]');
   for (var i = 0; i < filters.length; i++) {
     filters[i].onclick = function(evt) {
       var clickedElementID = evt.target.id;
       setActiveFilter(clickedElementID);
     };
   }
   getReviews();

   filter.classList.add('invisible');
   reviewsBlock.classList.add('reviews-list-loading');

   function renderReviews(review) {
     container.innerHTML = '';
     var fragment = document.createDocumentFragment();
     reviews.forEach(function(review) {
       var element = reviewtemplate(review);
       fragment.appendChild(element);
     });

     container.appendChild(fragment);
   }

   function setActiveFilter(id) {
     if (activeFilter === id) {
       return;
     }
     var filteredReviews = loadedReviews.slice(0);
     switch (id) {
       case 'reviews-all':
         break;
       case 'reviews-recent':
         var recentReviews = filteredReviews.filter(function(elm) {
           return new Date(elm.date) > reviewDate;
         });
         filteredReviews = recentReviews.sort(function(a, b) {
           return new Date(b.date) > new Date(a.date);
         });
         console.log('recent');
         break;
       case 'reviews-good':
         filteredReviews = filteredReviews.filter(function(elm) {
           return elm.rating >= 3;
         });
         filteredReviews = filteredReviews.sort(function(a, b) {
           return b.rating - a.rating;
         });
         console.log('good');
         break;
       case 'reviews-bad':
         filteredReviews = filteredReviews.filter(function(elm) {
           return elm.rating <= 2;
         });
         filteredReviews = filteredReviews.sort(function(a, b) {
           return a.rating - b.rating;
         });
         console.log('bad');
         break;
       case 'reviews-popular':
         filteredReviews = filteredReviews.sort(function(a, b) {
           return b.review_usefulness - a.review_usefulness;
         });
         console.log('pop');
         break;
     }
     activeFilter = id;
     renderReviews(filteredReviews);
   }

   function getReviews() {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', '//o0.github.io/assets/json/reviews.json');
     xhr.onload = function(evt) {
       var rawData = evt.target.response;
       loadedReviews = JSON.parse(rawData);
       renderReviews(loadedReviews);
       reviewsBlock.classList.remove('reviews-list-loading');
     };
     xhr.onerror = function(evt) {
       reviewsBlock.classList.remove('reviews-load-failur');
     };
     xhr.send();
   }

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
     var reviewContainer = element;
     var reviewImg = new Image();
     if (data.rating === 2) {
       reviwRating.classList.add('review-rating-two');
     }
     if (data.rating === 3) {
       reviwRating.classList.add('review-rating-three');
     }
     if (data.rating === 4) {
       reviwRating.classList.add('review-rating-four');
     }
     if (data.rating === 5) {
       reviwRating.classList.add('review-rating-five');
     }
     reviewImg.onload = function() {
       element.replaceChild(reviewImg, oldImg);
       reviewImg.style.height = '124px';
       reviewImg.style.width = '124px';
       reviewImg.classList.add('review-author');

     };
     reviewImg.onerror = function() {
       reviewContainer.classList.add('review-load-failure');
     };
     reviewImg.src = data.author.picture;
     return element;
   }

   filter.classList.remove('invisible');
 })();
 