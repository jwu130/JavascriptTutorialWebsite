// Variables
var array = [];

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
		generateDashes();
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


