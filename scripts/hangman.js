// Variables
var array = [];

$(document).ready(
	function(){
		generateDashes(6);
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

