$(document).ready(function() {



//create random numbers for game number and crystals.
var randomizer = function getRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

//creates the random numbers
var targetNumber = randomizer (19,120);



// var crystalNumber = Math.floor(Math.random() *(12 -1 + 1)) + 1;

// randomizer (1,12);
// var crystalNumber2 = randomizer (1,12);
// var crystalNumber3 = randomizer (1,12);
// var crystalNumber4 = randomizer (1,12);


//collects all of the numbers the user clicks to get to target
var userCounter = 0;
// var totalVal = 0;

//lives
var gameLife = 0;

//game counters
var counterWins = 0;
var counterLoss = 0;


//reset lives to 3

	gameLife = 3;

var crystalNumber = [12, 7, 10, 4];	

//when start button is clicked generate random number and show on screen.
	$("#gameStart").click(function() {       
     $("#randomNumber").html(targetNumber);  //inputs target number
    });

	
    for (var i = 0; i < crystalNumber.length ; i++) {
    	
    	$("#box1").attr("data-crystalvalue", crystalNumber[i]);
    	$("#box2").attr("data-crystalvalue", crystalNumber[i]);
    	$("#box3").attr("data-crystalvalue", crystalNumber[i]);
    	$("#box4").attr("data-crystalvalue", crystalNumber[i]);
    }
	

	$(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    crystalValue = parseInt(crystalValue);
    
    userCounter += crystalValue;

    alert("New score: " + userCounter);

    if (userCounter === targetNumber) {
      alert("You win!");
    }

    else if (userCounter >= targetNumber) {
      alert("You lose!!");

    // document.getElementById("playerScore").html(userCounter);
	}


});
});	

	 

//things tried that didn't work yet

	// while (totalVal < targetNumber) {

		// $("#box1").click(function() {
		// userGuess = userGuess + crystalNumber1;
		// $("#playerScore").append(userGuess);
		// });

		
		// $("#box2").click(function() {
		// totalVal = userGuess + crystalNumber2;
		// $("#playerScore").append(totalVal);
		// });

		// $("#box3").click(function() {
		// totalVal = userGuess + crystalNumber3;
		// $("#playerScore").append(totalVal);
		// }); 

		// $("#box4").click(function() {
		// totalVal = userGuess + crystalNumber4;
		// $("#playerScore").append(totalVal);

		// });

		// };
		

		// $(".number").click(function(){

		// var userGuess = ($(this).attr("crystalNumber*"));
		// userGuess = parseInt(userGuess);
		// totalVal += userGuess;
		// $("#playerScores").html(userGuess);


//when crystal button is clicked take that number and add it to the userGuess

	// $(".number").click(function(){

	// 	if(totalVal===targetNumber){
	// 		counterWins++;
	// 		document.getElementById("wins").innerHTML ="Winner, Winner, Chicken Dinner.";
	// 		}
	// 	else if(totalVal > targetNumber){
	// 		counterLoss ++;
	// 		gameLife -1;
	// 		document.getElementById("loss").innerHTML ="You Lose. Time to Take a Math Class.";
	// 		}
	// 	});
		


//create play
//create play again
//create reset without refreshing page
//create randomizer for value for crystals, create attr. to put data into, add data to counter, make sure to show the user guess
//create var that uses min and max
//

// //create crystals

// var crystalOptions = [1,2,3,4];

// //create images for each crystal option

// for (var i = 0; i < crystalOptions.length; i++) {

// 	$('<div/>', {
// 		'class': 'crystal-image',
// 	}).appendTo("#crystals");

// 	var imageCrystal = $("<img>");

// 	imageCrystal.attr("src", "images/greengemstone1.png"[1], "images/ltbluegemstone1.png"[2], "images/purplegemstone1.png"[3], "images/pinkgemstone1.png"[4])

// 	imageCrystal.attr("data-crystalvalue", crystalNumber);

	
	// $("#box2").click(function() {
	// 	$("#playerScores").html(crystalNumber2);
		
	// });
	
	// $("#box3").click(function() {
	// 	$("#playerScores").html(crystalNumber3);
		
	// });

	// $("#box4").click(function() {
	// 	$("#playerScores").html(crystalNumber4);
		
	// });




	//reset target number and crystal number

	// targetNumber = [];
	// crystalNumber1 = [];
	// crystalNumber2 = [];
	// crystalNumber3 = [];
	// crystalNumber4 = [];	

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
  
        
 
	

	// $("*#box").on("click", function(){
	// 	var crystalNumber = Math.floor((Math.random() * 12) +1);
	// 	$('crystalNumber') 
// }


// $('button').click(function() {
// //on button click assign random number and then add it to playerScores, if playerScore is greater

// })


// $("#box1").append(crystalNumber1);  //random crystal number
     // $("#box2").append(crystalNumber2);  //random crystal number
     // $("#box3").append(crystalNumber3);  //random crystal number
     // $("#box4").append(crystalNumber4);  //random crystal number