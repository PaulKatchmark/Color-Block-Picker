
// assigned numbers to each variable that represents the squares I made in HTML
var squareYellow = 0;
var squareGreen = 1;
var squareRed = 2;
var squareBlue = 3;

// set a variable so that I can assign the random number generated in randomNumber() to a global variable and access it outside of the function
var correctColor = 0;



$(document).ready(function()  {


randomNumber(0,3);

// function to generate a random number between 0-3. This number will coorespond with a block color
function randomNumber(min, max){
   var newNum = Math.floor(Math.random() * (1 + max - min) + min);
    correctColor = newNum; // assigns randomly generated number to global variable correctColor
   if (newNum === 0) { // if - else statements to generate appropriate message based on number gnenerated. 
     $('#correct-color').append("Pick Yellow")
   } else if (newNum === 1) {
     $('#correct-color').append("Pick Green")
   } else if  (newNum === 2) {
     $('#correct-color').append("Pick Red")
   } else  {
      $('#correct-color').append("Pick Blue")
   }
};

$('.squareYellow').click (function () { // function that allows the click ability to work on the block
   if (correctColor == 0) { //statement that checks to see if global variable matches correct block
     $('#message').text('Great Job! Now you can pick the new color above!');
     $('#correct-color').empty(); // clears the main message to allow for a new color to be chosen
     $('.squareYellow').click(randomNumber(0,3)); // reruns the randomNumber function when user chooses the correct block so that they can keep playing
} else { //option for when user chooses wrong block
    $('#message').text('Bummer, try again!');
}
});

  $('.squareGreen').click (function () {  // function that allows the click ability to work on the block
  if (correctColor == 1) { //statement that checks to see if global variable matches correct block
    $('#message').text('Great Job! Now you can pick the new color above!')
    $('#correct-color').empty(); // clears the main message to allow for a new color to be chosen
    $('.squareGreen').click(randomNumber(0,3)); // reruns the randomNumber function when user chooses the correct block so that they can keep playing
  } else { //option for when user chooses wrong block
    $('#message').text('Bummer, try again!');
  }
});

$('.squareRed').click (function () { // function that allows the click ability to work on the block
if (correctColor == 2) { //statement that checks to see if global variable matches correct block
  $('#message').text('Great Job! Now you can pick the new color above!')
  $('#correct-color').empty(); // clears the main message to allow for a new color to be chosen
  $('.squareRed').click(randomNumber(0,3)); // reruns the randomNumber function when user chooses the correct block so that they can keep playing
} else { //option for when user chooses wrong block
  $('#message').text('Bummer, try again!')
}
});

$('.squareBlue').click (function () { // function that allows the click ability to work on the block
if (correctColor == 3) { //statement that checks to see if global variable matches correct block
  $('#message').text('Great Job! Now you can pick the new color above!')
  $('#correct-color').empty(); // clears the main message to allow for a new color to be chosen
  $('.squareBlue').click(randomNumber(0,3)); // reruns the randomNumber function when user chooses the correct block so that they can keep playing
} else { //option for when user chooses wrong block
  $('#message').text('Bummer, try again!')
}
});


});
