$(document).ready(function () {
  $('#fullpage').fullpage({ //initialize
    //set options
    sectionsColor: ['#add8e6', '#add8e6', '#add8e6', '#add8e6', '#add8e6'],
    navigation: false,

    // navigationPosition: 'right',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 0) { //section 1
        balloon.play();
      }
      if (destination.index == 2) { //section 3
        frontwheel.play();
        backwheel.play();
        bic.play();
      }
      if (destination.index == 4) { //section 5
        carfrontwheel.play();
        carbackwheel.play();
        car.play();
      }
    }
  });
  // disables scrolling completely
  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);
});

var balloon = anime({
  targets: '#balloon',
  translateY: -250,
  direction: 'reverse',
  easing: 'easeInOutSine'
});

var frontwheel = anime({
  targets: '#frontwheel',
  rotate: '360',
  easing: 'linear',
  loop: true,
  duration: 1000,
});

var backwheel = anime({
  targets: '#backwheel',
  rotate: '360',
  easing: 'linear',
  loop: true,
  duration: 1000,
});

var carfrontwheel = anime({
  targets: '#carfrontwheel',
  rotate: '360',
  easing: 'linear',
  loop: true,
  duration: 1000,
});

var carbackwheel = anime({
  targets: '#carbackwheel',
  rotate: '360',
  easing: 'linear',
  loop: true,
  duration: 1000,
});

var car = anime({
  targets: '#caranim',
  translateX: 150,
  duration: 2000,
  endDelay: 200,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

var bic = anime({
  targets: '#bicanim',
  translateX: 150,
  duration: 2000,
  endDelay: 200,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

$("#namebtn").click(function () {
  var name = "Welcome, " + document.getElementById("getname").value + "!";
  $("#name").text(name);
  $("#name1").text(name);
});

//enter event bc im lazy
var input = document.getElementById("getname");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("namebtn").click();
  }
});

//tippy!
tippy('#quizzytt', {
  placement: 'bottom',
  content: "Quizzy is an online quiz app that aims to test children's knowledge on part's and anatomies of vehicles.",
});

tippy('#share', {
  placement: 'bottom',
  content: "Click to copy the link to this website!",
});

tippy('#carbg', {
  placement: 'top',
  content: "Complete Level 1 to unlock!",
});

tippy('#busbg', {
  placement: 'top',
  content: "Complete Level 2 to unlock!",
});

tippy('#bicbg', {
  placement: 'top',
  content: "Click on the play button to start!",
});

tippy('#carbgunlock', {
  placement: 'top',
  content: "Click on the play button to start!",
});

//copy link
function myFunction() {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText($(location).attr('href'));
}

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  counterFormat: 'Question %current out of 5',
  allowIncorrect: false,
  questions: [
    {
      'q': 'What bicycle part is this? <br><img src="images/wheel.png"',
      'options': [
        'Wheel',
        'Seat',
        'Handlebar',
        'Gear'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'Oh no, thats incorrect!'
    },
    {
      'q': 'What bicycle part is this? <br><br><br><img src="images/pedal.png"><br><br><br>',
      'options': [
        'Gear',
        'Handlebar',
        'Wheel',
        'Pedal'
      ],
      'correctIndex': 3,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'Oh no, thats incorrect!'
    },
    {
      'q': 'What bicycle part is this? <br><br><br><img src="images/handlebar.png"><br><br>',
      'options': [
        'Pedal',
        'Wheel',
        'Handlebar',
        'Seat'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'Oh no, thats incorrect!'
    },
    {
      'q': 'What bicycle part is this? <br><br><br><br><img src="images/seat.png"<br><br><br><br>',
      'options': [
        'Gear',
        'Seat',
        'Pedal',
        'Gear'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'Oh no, thats incorrect!'
    },
    {
      'q': 'What bicycle part is this? <br><br><br><br><img src="images/gear.png"<br><br><br><br>',
      'options': [
        'Pedal',
        'Handlebar',
        'Gear',
        'Seat'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct Answer!',
      'incorrectResponse': 'Oh no, thats incorrect!'
    }
  ]
});

const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}

// $('#carquiz').quiz({
//   //resultsScreen: '#results-screen',
//   //counter: false,
//   counterFormat: 'Question %current out of 5',
//   allowIncorrect: false,
//   questions: [
//     {
//       'q': 'What bicycle part is this? <br><img src="images/wheel.png"',
//       'options': [
//         'Wheel',
//         'Seat',
//         'Handlebar',
//         'Gear'
//       ],
//       'correctIndex': 0,
//       'correctResponse': 'Correct Answer!',
//       'incorrectResponse': 'Oh no, thats incorrect!'
//     },
//     {
//       'q': 'What bicycle part is this? <br><br><br><img src="images/pedal.png"><br><br><br>',
//       'options': [
//         'Gear',
//         'Handlebar',
//         'Wheel',
//         'Pedal'
//       ],
//       'correctIndex': 3,
//       'correctResponse': 'Correct Answer!',
//       'incorrectResponse': 'Oh no, thats incorrect!'
//     },
//     {
//       'q': 'What bicycle part is this? <br><br><br><img src="images/handlebar.png"><br><br>',
//       'options': [
//         'Pedal',
//         'Wheel',
//         'Handlebar',
//         'Seat'
//       ],
//       'correctIndex': 2,
//       'correctResponse': 'Correct Answer!',
//       'incorrectResponse': 'Oh no, thats incorrect!'
//     },
//     {
//       'q': 'What bicycle part is this? <br><br><br><br><img src="images/seat.png"<br><br><br><br>',
//       'options': [
//         'Gear',
//         'Seat',
//         'Pedal',
//         'Gear'
//       ],
//       'correctIndex': 1,
//       'correctResponse': 'Correct Answer!',
//       'incorrectResponse': 'Oh no, thats incorrect!'
//     },
//     {
//       'q': 'What bicycle part is this? <br><br><br><br><img src="images/gear.png"<br><br><br><br>',
//       'options': [
//         'Pedal',
//         'Handlebar',
//         'Gear',
//         'Seat'
//       ],
//       'correctIndex': 2,
//       'correctResponse': 'Correct Answer!',
//       'incorrectResponse': 'Oh no, thats incorrect!'
//     }
//   ]
// });