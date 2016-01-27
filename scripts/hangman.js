// Variables
var word = ["A", "B", "C", "D"];
var chosenLetters = [];
var underscores = [];
var words = ["neat", "horizon", "twisted", "evergreen", "strawberry", "emperor", "breach"];
var descriptions = ["adjective", "thing", "adjective", "botany", "food", "person", "verb"];
var lettersFound = 0;
var wrongGuesses = 0;

$(document).ready(
	function(){

		word = getNewWord();

		$('.bottom').show();
		$(".pole").fadeIn(1000);
		$(".h-pole").fadeIn(2000);
		$('.rope').fadeIn(2500);

		generateDashes(word);
		
		// $("#text").keydown(function(){
	 //        $("#text").css("background-color", "yellow");
	 //    });
	 //    $("#text").keyup(function(){
	 //        $("#text").css("background-color", "pink");
	 //    });	
});

// Keypress handler
function keypress(e){
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	key = String.fromCharCode(key).toUpperCase();

	console.log(key);
	// if(/\d/.exec(e.key))
	//console.log(word.length);
	for(i=0; i<word.length; i++){
		if(word[i] == key){
           	underscores[i] = key;
		   	console.log("aqui " + key + " array: " + underscores[i]);
			$("#word").html(underscores);
			lettersFound++;
        } 
	}
	
	if (wrongGuesses < 6) {
	if(/^[a-zA-Z]$/.exec(key))
		if(chosenLetters.indexOf(key)<0){
			$("#keypress").append(key +" ");
			chosenLetters.push(key);
			$("#status").html(" ");
		} else {
			$("#status").html("You already tried this letter: " + key);
		}
	}

	checkStatus();
};

function displayBodyPart(){
	switch (wrongGuesses) {
		case 1:
			$(".head").css("visibility", "visible");
			break;
		case 2:
			$(".body").css("visibility", "visible");
			break;
		case 3:
			$(".left-arm").css("visibility", "visible");
			break;
		case 4:
			$(".right-arm").css("visibility", "visible");
			break;
		case 5:
			$(".left-leg").css("visibility", "visible");
			break;
		case 6:
			$(".right-leg").css("visibility", "visible");
			break;
	}
	
}

// Check if the game is over
function checkStatus(){
	console.log(lettersFound + " guesses " + wrongGuesses);
	if(wrongGuesses>6){
		$("#status").html("You lost...");
	}
	else if(lettersFound === word.length){
		$("#status").html("Congraduations. You won.");
		// Also hault the handling of key presses?
	}
	else {
        	wrongGuesses++;
        	displayBodyPart();
        }
};

// Restart game
function restart(){
	//set guesses to 0 for new game
	wrongGuesses = 0;

	// Retrieve new word
	word = getNewWord();
	generateDashes(word);

	// Refresh game data
	lettersFound = 0;
	chosenLetters = [];
	$("#keypress").html("");

	$(".head").fadeOut(500);
	$(".body").fadeOut(500);
	$(".left-arm").fadeOut(500);
	$(".right-arm").fadeOut(500);
	$(".left-leg").fadeOut(500);
	$(".right-leg").fadeOut(500);
};

// Returns a new random word from array
function getNewWord(){
	var index = Math.floor(Math.random() * (8-0));
	var wordArr = words[index].split("");
	$("#description").html(descriptions[index]);
	return wordArr;
}

function generateDashes(word){
	
	var wordLength = word.length;
	var dashes = $("#word-container");
	
	console.log(word);
	//underscores = word.replace(/.{1}/g, "___ ");// this only work if word is a string
	
	for(i=0; i<wordLength; i++) {
    	underscores[i] = "__ ";
	}
	
	var letterLoc = document.createElement("div");
	    letterLoc.setAttribute("id", "word");
	    letterLoc.setAttribute("name", "word");
	    letterLoc.className = "individualletter";
		dashes.append(letterLoc);
		$("#word").html(underscores);
};


