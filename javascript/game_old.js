$(document).ready(function() {





//call your game

};

var gameLife = 0;
var counter = 0;
var targetNumber = randomizer (19,120);
var crystalNumber1 = randomizer (1,12);
var crystalNumber2 = randomizer (1,12);
var crystalNumber3 = randomizer (1,12);
var crystalNumber4 = randomizer (1,12);

//create play
//create play again
//
var 

//create randomizer for value for crystals, create attr. to put data into, add data to counter, make sure to show the user guess
//create var that uses min and max

//when start button is clicked generate random number and show on screen.
	$("#gameStart").on("click", function() {
        
        var randomNumber = Math.floor(19 + (parseInt)(Math.random() * ((120 - 19) +1)));
        $('#randomNumber').text(randomNumber);
        
      });

	$("*#box").on("click", function(){
		var crystalNumber = Math.floor((Math.random() * 12) +1);
		$('crystalNumber') 


	})


});


// $('button').click(function() {
// //on button click assign random number and then add it to playerScores, if playerScore is greater

// })






// $('#box1').click(function() {
// 	for(var i =0; i < crystalNumber; i++) {
// 		playerScores.add();
// 	});

// $('#box2').click(function() {
// 	Math.floor((math.random() * 12) +1);
// 	});

// $('#box3').click(function() {
// 	Math.floor((math.random() * 12) +1);
// 	});

// $('#box4').click(function() {
// 	Math.floor((math.random() * 12) +1);
// 	});