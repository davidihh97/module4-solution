// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {

  // STEP 7: Create the byeSpeaker object
  var byeSpeaker = {};

  // DO NOT attach speakWord to the object
  var speakWord = "Good Bye";

  // STEP 8: Attach the speak function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
