// Variables
var array = [];

$(document).ready(
	function(){
		generateDashes(6);
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
		console.log("Hi");
	}
);

function keypress(e){
	console.log(e.key );
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	console.log(String.fromCharCode(key));
	key = String.fromCharCode(key);
	// if(/\d/.exec(e.key))
	// 	console.log(e.key)
	if(/^[a-zA-Z]$/.exec(key))
		if(!array.includes(key)){
			$("#keypress").append(key +" ");
			array.push(key);
		} else {
			$("#status").html("You already tried this letter: " + key);
		}
};

function generateDashes(wordSize){
	var i = 0;
	var dashes = $("#word-container");
	while(i<wordSize){
		// Add object in request
	    var letterLoc = document.createElement("div");
	    letterLoc.setAttribute("id", i);
	    letterLoc.setAttribute("name", i);
	    letterLoc.className = "individualletter";
	    dashes.append(letterLoc);
	    $("#"+i).html("__  ");
	    $("#"+i).addClass("individualletter");
	    i++;
	    console.log(i.toString());
	}
};

