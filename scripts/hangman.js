// Variables
var array = [];

$(document).ready(
	function(){
		alert("Hello");	
	}
);


function keypress(e){
	console.log(e.key );
	// if(/\d/.exec(e.key))
	// 	console.log(e.key)
	if(/[a-zA-Z]/.exec(e.key))
		if(!array.includes(e.key)){
			$("#keypress").append(e.key +" ");
			array.push(e.key);
		} else {
			$("#status").html("You already tried this letter: " + e.key);
		}
}

