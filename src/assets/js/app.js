

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;


// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


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

// Firebase Contact Question Form
/*

var questionRef = firebase.database().ref("inqury");
var $questionForm = $("#questionForm");
$questionForm.submit(function(event) {
    event.preventDefault();
    var questionData = $questionForm.serializeArray();
    questionRef.push(questionData, function(err) {
        if (err) {
            window.alert("Error when submitting data: " + err.message)
        }
    });
    $("#questionForm")[0].reset();
    $("#questionSuccess").fadeIn("slow").removeClass("hide")
});

// Firebase Download PDF and subscribe

var subscribeRef = firebase.database().ref("subscribe");
$("#downloadSubmit").on("click", function(event) {
    event.preventDefault();
    var downloadEmail = document.getElementById("downloadEmail").value;
    saveDownload(downloadEmail);
    var storage = firebase.app().storage("gs://ketchpartnersproduction.appspot.com");
    var storageRef = firebase.storage().ref();
    var newsletterRef = storageRef.child("newsletter/newsletter.pdf");
    newsletterRef.getDownloadURL().then(function(url) {
        console.log(url);
        $("#downloadModal").foundation("open");
        $("#downloadLink").attr("href", url)
    })["catch"](function(error) {
        switch (error.code) {
            case "storage/object-not-found":
                alert("Download is not available at this time, please try again later");
                break;
            case "storage/unauthorized":
                alert("Server authorizatino error");
                break;
            case "storage/canceled":
                alert("Canceled");
                break;
            case "storage/unknown":
                alert("Download is not available at this time, please try again later");
                break;
            default:
                alert("Error");
                break
        }
    })
});

function saveDownload(downloadEmail) {
    var newSubscribeRef = subscribeRef.push();
    newSubscribeRef.set({
        email: downloadEmail
    })
};


// Firebase Subscribe Modal Index Page


var newsletterSubscribeRef = firebase.database().ref("newsletterSubscribe");
$("#newsletterSubscribeSubmit").on("click", function(event) {
    event.preventDefault();
    var newsletterSubscribeEmail = document.getElementById("newsletterSubscribeEmail").value;
    saveNewsletterSubscribe(newsletterSubscribeEmail);
    $("#newsletterForm")[0].reset();
    $("#newsletterSubscribeModal").foundation("open");
});

function saveNewsletterSubscribe(newsletterSubscribeEmail) {
    var newsletterSubscribeSet = newsletterSubscribeRef.push();
    newsletterSubscribeSet.set({
        email: newsletterSubscribeEmail
    })
}; */
