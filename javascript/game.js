// $(document).ready(function() {

// startGame();

// });

var minNumber = 19;
var maxNumber = 120;

//create random numbers for game number and crystals.
var randomizer = function getRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

//collects all of the numbers the user clicks to get to target
var userGuess = 0;

//lives
var gameLife = 0;

//game counters
var counterWins = 0;
var counterLoss = 0;

//holds the random numbers
var targetNumber = randomizer (19,120);
var crystalNumber1 = randomizer (1,12);
var crystalNumber2 = randomizer (1,12);
var crystalNumber3 = randomizer (1,12);
var crystalNumber4 = randomizer (1,12);



//create play
//create play again
//create reset without refreshing page
//create randomizer for value for crystals, create attr. to put data into, add data to counter, make sure to show the user guess
//create var that uses min and max
//
 
//function startGame() {

//reset lives to 3

	gameLife = 3;

//reset target number and crystal number

	// targetNumber = [];
	// crystalNumber1 = [];
	// crystalNumber2 = [];
	// crystalNumber3 = [];
	// crystalNumber4 = [];

//when start button is clicked generate random number and show on screen.
	$("#gameStart").click(function() {
       
     $("#randomNumber").html(targetNumber);  //inputs target number


    });

    console.log(crystalNumber1);
	console.log(crystalNumber2);
	console.log(crystalNumber3);
	console.log(crystalNumber4);

	

	$("#box1").click(function() {
		$("#playerScores").html(crystalNumber1);
	});
	
	$("#box2").click(function() {
		$("#playerScores").html(crystalNumber2);
		
	});
	
	$("#box3").click(function() {
		$("#playerScores").html(crystalNumber3);
		
	});

	$("#box4").click(function() {
		$("#playerScores").html(crystalNumber4);
		
	});

	//$("#playerScores").html(totalVal);

	

	

//when crystal button is clicked take that number and add it to the userGuess

	$(".number").click(function(){

		if(userGuess===targetNumber){
			counterWins++;
			document.getElementById("wins").innerHTML ="Winner, Winner, Chicken Dinner.";
			}
		else if(userGuess > targetNumber){
			counterLoss ++;
			gameLife -1;
			document.getElementById("loss").innerHTML ="You Lose. Time to Take a Math Class.";
			}
		});
		











//things tried that didn't work yet
	// 	$("#playerScores").html(userGuess);
		
	// 	});


		
	// var totalVal = parseInt(newVal1) + parseInt(newVal2) + parseInt(newVal3) + parseInt(newVal4);


	// console.log(userGuess);

	// 	userGuess = parseInt(userGuess);
	// 	crystalNumber1 = parseInt(crystalNumber1);
	// 	crystalNumber2 = parseInt(crystalNumber2);
	// 	crystalNumber3 = parseInt(crystalNumber3);
	// 	crystalNumber4 = parseInt(crystalNumber4);

	// 	})	

			
	// }

	
	// $("#box*").click(function() {
	// 	userGuess = crystalNumber1 + userGuess;
	// 	$("#playerScores").text(userGuess);

	// });

	

 //     $("#box1").append(crystalNumber1);  //random crystal number
 //     $("#box2").append(crystalNumber2);  //random crystal number
 //     $("#box3").append(crystalNumber3);  //random crystal number
 //     $("#box4").append(crystalNumber4);  //random crystal number

 //     $("#box1").click(function() {
 //     	//take the number and add it
 //     	crystalNumber1
     

 //     	var playerGuess = 
  
        
 //      });
	

	// $("*#box").on("click", function(){
	// 	var crystalNumber = Math.floor((Math.random() * 12) +1);
	// 	$('crystalNumber') 
// }

// 	})


// });


// $('button').click(function() {
// //on button click assign random number and then add it to playerScores, if playerScore is greater

// })








// $("#box1").append(crystalNumber1);  //random crystal number
     // $("#box2").append(crystalNumber2);  //random crystal number
     // $("#box3").append(crystalNumber3);  //random crystal number
     // $("#box4").append(crystalNumber4);  //random crystal number