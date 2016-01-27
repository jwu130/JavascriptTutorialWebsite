// Variables
var array = [];
var word = ["a", "b", "c", "d"];
var underscores = [];

$(document).ready(
	function(){
		$('.bottom').show()
		$(".pole").fadeIn(1000);
		$(".h-pole").fadeIn(2000);
		$('.rope').fadeIn(2500);
		$(".head").fadeIn(3000);
		$(".body").fadeIn(4000);
		$(".left-arm").fadeIn(5000);
		$(".right-arm").fadeIn(5000);
		$(".left-leg").fadeIn(6000);
		$(".right-leg").fadeIn(6000);
		generateDashes(word);
		
	$("#text").keydown(function(){
        $("#text").css("background-color", "yellow");
    });
    $("#text").keyup(function(){
        $("#text").css("background-color", "pink");
    });	
});

function keypress(e){
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	key = String.fromCharCode(key);

	console.log(key);
	// if(/\d/.exec(e.key))
	//console.log(word.length);
	for(i=0; i<word.length; i++){
<<<<<<< HEAD
		if(word[i] == e.key){
           underscores[i] = "_"+e.key;
		   console.log("aqui " + e.key + " array: " + underscores[i]);
			$("#"+12).html(underscores);
=======
		if(word[i] == key){
           underscores[i] = key;
		   console.log("aqui " + key + " array: " + underscores[i]);
			$("#word").html(underscores);
>>>>>>> daf6db78d06d848bf788e3f730fece895381446a
        }
	}
	
	if(/^[a-zA-Z]$/.exec(key))
		if(array.indexOf(key)<0){
			$("#keypress").append(key +" ");
			array.push(key);
			$("#status").html(" ");
		} else {
			$("#status").html("You already tried this letter: " + key);
		}
};

function generateDashes(word){
	
	//word = "abcd123456";
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


