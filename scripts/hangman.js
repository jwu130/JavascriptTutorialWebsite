// Variables
var array = [];
var word = ["a", "b", "c", "d"];
var underscores = [];

$(document).ready(
	function(){
		alert("Hello");	
		generateDashes();
		
	$("#text").keydown(function(){
        $("#text").css("background-color", "yellow");
    });
    $("#text").keyup(function(){
        $("#text").css("background-color", "pink");
    });	
});

function keypress(e){
	console.log(e.key);
	// if(/\d/.exec(e.key))
	//console.log(word.length);
	for(i=0; i<word.length; i++){
		if(word[i] == e.key){
           underscores[i] = "                    "+e.key+"                    ";
		   console.log("aqui " + e.key + " array: " + underscores[i]);
			$("#"+12).html(underscores);
        }
	}
	
	if(/^[a-zA-Z]$/.exec(e.key))
		if(!array.includes(e.key)){
			$("#keypress").append(e.key +" ");
			array.push(e.key);
			$("#status").hide();
		} else {
			$("#status").show();
			$("#status").html("You already tried this letter: " + e.key);
		}
};

function generateDashes(){
	
	//word = "abcd123456";
	var wordLength = word.length;
	var dashes = $("#word-container");
	
	console.log(word);
	//underscores = word.replace(/.{1}/g, "___ ");// this only work if word is a string
	
	for(i=0; i<wordLength; i++) {
    underscores[i] = "__ ";
	}
	
	var letterLoc = document.createElement("div");
	    letterLoc.setAttribute("id", 12);
	    letterLoc.setAttribute("name", 12);
	    letterLoc.className = "individualletter";
		dashes.append(letterLoc);
		$("#"+12).html(underscores);
};


