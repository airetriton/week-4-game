$(document).ready(function() {





//call your game

});

var minNumber = 19;
var maxNumber = 120; 

//create random numbers for game number and crystals.
var randomizer = function getRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
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
//create reset without refreshing page

//
 

//create randomizer for value for crystals, create attr. to put data into, add data to counter, make sure to show the user guess
//create var that uses min and max

//when start button is clicked generate random number and show on screen.
	$("#gameStart").click(function() {
       
     $("#randomNumber").html(targetNumber);
     $("#box1").append(crystalNumber1);
     $("#box2").append(crystalNumber2);
     $("#box3").append(crystalNumber3);
     $("#box4").append(crystalNumber4);
  
        
      });
	console.log(crystalNumber1);
	console.log(crystalNumber2);
	console.log(crystalNumber3);
	console.log(crystalNumber4);

	// $("*#box").on("click", function(){
	// 	var crystalNumber = Math.floor((Math.random() * 12) +1);
	// 	$('crystalNumber') 


// 	})


// });


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