(function(window){
    let helloSpeaker = new Object ();
    let speakWord = "Hello, folks!";
    helloSpeaker.speak = function(name){
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
}) (window);