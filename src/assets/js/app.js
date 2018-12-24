

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$(function () {
  var showClass = 'show';

  $('input').on('checkval', function () {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});

/*
// reference inquiry question collection

var questionRef = firebase.database().ref('inqury');
var $questionForm = $('#questionForm');

$questionForm.submit(function(event) {
  event.preventDefault();
  var questionData = $questionForm.serializeArray();
  questionRef.push(questionData, function(err) {
    if (err) {
      window.alert('Error when submitting data: ' + err.message);
    }
  });
  $('#questionForm')[0].reset();
  $('#questionSuccess').fadeIn( "slow" ).removeClass('hide');

})


// reference subscribe collection and filestore
var subscribeRef = firebase.database().ref('subscribe');


// download case study on articles pages


$('#subscribeSubmit').on("click", function( event ) {  
    event.preventDefault();
    // get values
    var subscribeEmail = document.getElementById('subscribeEmail').value;
    // save message
    saveSubscribe(subscribeEmail);

    
    var storage = firebase.app().storage("gs://openketch1.appspot.com");
    var storageRef = firebase.storage().ref();
    var newsletterRef = storageRef.child('newsletter/newsletter.pdf');

    newsletterRef.getDownloadURL().then(function(url) {
      console.log(url);
      $('#downloadModal').foundation('open');
      $('#downloadLink').attr("href", url);
    
      }).catch(function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            alert("Download is not available at this time, please try again later");
            break;

          case 'storage/unauthorized':
            alert("Server authorizatino error");
            break;

          case 'storage/canceled':
            alert("Canceled");
            break;

          case 'storage/unknown':
            alert("Download is not available at this time, please try again later");
            break;

          default:
            alert("Error");
            break;
        }
      });

});




function saveSubscribe(subscribeEmail){
  var newSubscribeRef = subscribeRef.push();
  newSubscribeRef.set({
    email: subscribeEmail
  });
}

// subscribe to newsletter


var newsletterSubscribeRef = firebase.database().ref('newsletterSubscribe');


// download case study on articles pages


$('#newsletterSubscribeSubmit').on("click", function( event ) {  
    event.preventDefault();
    // get values
    var newsletterSubscribeEmail = document.getElementById('newsletterSubscribeEmail').value;
    // save message
    saveNewsletterSubscribe(newsletterSubscribeEmail);
    window.alert('Thank You For Subscribing');
    

});




function saveNewsletterSubscribe(newsletterSubscribeEmail){
  var newsletterSubscribeSet = newsletterSubscribeRef.push();
  newsletterSubscribeSet.set({
    email: newsletterSubscribeEmail
  });
}


*/
