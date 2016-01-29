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
	key = String.fromCharCode(key).toLowerCase();

	// If game is still playing
	if (checkStatus()) {
		// If the key pressed is a letter
		if(/^[a-zA-Z]$/.exec(key)){
			// If user has not chosen the letter already
			if(chosenLetters.indexOf(key)<0){
				// Get rid of status
				$("#status").html("");
				// Add to list of chosen letters
				chosenLetters.push(key);
				// Display the letter chosen
				$("#keypress").append(key +" ");
				// Display letter on the screen with underscores
				$("#word").html(underscores);
				if(!checkForLetter(key)){
					wrongGuesses++;
					displayBodyPart(wrongGuesses);
					$("#status").html(key + " is not a letter in this word");
				}
			} else {
				// The user has chosen the letter already
				$("#status").html("You already tried this letter: " + key);
			}
		}
	}
	updateStatus();
};

function checkForLetter(key){
	var check = false;
	var count = 0;
	for(i=0; i<word.length; i++){
		if(word[i] == key){
           	underscores[i] = key.toUpperCase();
           	$("#word-container").html(underscores);
           	check = true;
           	count++;
        } 
	}
	lettersFound+=count;
	return check;
};

function updateStatus(){
	console.log(wrongGuesses);
	if(lettersFound === word.length) {
		$("#status").html("Congraduations. You won.");
	} else if (wrongGuesses >= 6) {
		$("#status").html("You lose... Click restart to begin again");
	}
	return true;
};

function displayBodyPart(){
	switch (wrongGuesses) {
		case 1:
			 $("#wrapper").attr("src","resources/2.png"); 
			break;
		case 2:
			 $("#wrapper").attr("src","resources/3.png"); 
			break;
		case 3:
			 $("#wrapper").attr("src","resources/4.png");
			 break; 
		case 4:
			 $("#wrapper").attr("src","resources/5.png");
			 break; 
		case 5:
			 $("#wrapper").attr("src","resources/6.png");
			 break; 
		case 6:
			 $("#wrapper").attr("src","resources/7.png");
			 break; 
	}
	
};

// Check if the game is over
function checkStatus(){
	if(wrongGuesses >= 6 || lettersFound === word.length){
		return false
	}
	return true;
};

// Restart game
function restart(){
	//set guesses to 0 for new game
	wrongGuesses = 0;

	// Reset displays
	$("#word-container").html("");
	$("#status").html("");
	$("#wrapper").attr("src","resources/1.png"); 

	// Retrieve new word
	underscores = [];
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
	var index = Math.floor(Math.random() * 7);
	console.log(index);
	var wordArr = words[index].split("");
	$("#description").html(descriptions[index]);
	return wordArr;
};

// Generate the word to be displayed with underscores
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


