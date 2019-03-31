function myMove() {   // move the div up and start over
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var end=2000;  // sa nu se scrie aici 600px ca nu merge altfel
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == end) {
      pos=0;
    } else {
      pos++;
      elem.style.bottom = pos + 'px';
      elem.style.bottom = pos + 'px';

    }
  }
}

function mySecondMove() {   // move the div up and start over
  var elem2 = document.getElementById("myAnimation2");
  var pos = 0;
  var end=2000;  // sa nu se scrie aici 600px ca nu merge altfel
  var id = setInterval(frame, 15);
  function frame() {
    if (pos == end) {
      pos=0;
    } else {
      pos++;
      elem2.style.bottom = pos + 'px';
      elem2.style.bottom = pos + 'px';

    }
  }
}

// on click make the sound and dissapear

(function popBalloons () {
  var elements = document.getElementsByClassName("imgr");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
             makeSound(this.innerHTML);
            this.style.display = "none";



        });
  }
})();

(function popBalloons2 () {
  var elements = document.getElementsByClassName("imgl");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
             makeSound(this.innerHTML);
            this.style.display = "none";


        });
  }
})();




function makeSound(){
  var bubble = new Audio("images/balloonPop.mp3");
  bubble.play();
};


// url pt cod  https://www.w3schools.com/code/tryit.asp?filename=G2EDPQXZ5DJ4

// nu merge decat cu id, fara class
