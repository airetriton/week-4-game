$(document).ready(function() {



var crystalNumber = Math.floor((Math.random() *12) +1);

var playerScores = 0;

var winsCounter = 0;

var lossesCounter = 0;


//when start button is clicked generate random number and show on screen.
	$("#gameStart").on("click", function() {
        
        var randomNumber = Math.floor(19 + (parseInt)(Math.random() * ((120 - 19) +1)));
        $('#randomNumber').text(randomNumber);
        
      });

	$("#box*").on("click", function(){
		var crystalNumber = Math.floor((Math.random() * 12) +1)

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