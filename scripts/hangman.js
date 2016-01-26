// Variables
var array = [];

$(document).ready(
	function(){
		alert("Hello");	
		generateDashes();
	}
);

function keypress(e){
	console.log(e.key );
	// if(/\d/.exec(e.key))
	// 	console.log(e.key)
	if(/^[a-zA-Z]$/.exec(e.key))
		if(!array.includes(e.key)){
			$("#keypress").append(e.key +" ");
			array.push(e.key);
		} else {
			$("#status").html("You already tried this letter: " + e.key);
		}
};

function generateDashes(){
	
	var word = "abcd123456";
	var wordLength = word.length;
	var dashes = $("#word-container");
	
	console.log(word);
	var userscores = word.replace(/.{1}/g, "___ ");
	
	var letterLoc = document.createElement("div");
	    letterLoc.setAttribute("id", 12);
	    letterLoc.setAttribute("name", 12);
	    letterLoc.className = "#individualletter";
		//document.querySelector("#individualletter");
		dashes.append(letterLoc);
		$("#"+12).html(userscores);
};


