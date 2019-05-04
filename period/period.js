//FILE NAME: period.js
//WRITTEN BY: Jackeline Lopez Ruiz 
//DATE: May 4th, 2019
//PURPOSE: Program for Period@Wellesley

function compareValues(){
	var padsNum = parseInt(document.getElementById("firstInput").value);
	var tampNum = parseInt(document.getElementById("secondInput").value);
	var pantNum = parseInt(document.getElementById("thirdInput").value);
	var days = parseInt(document.getElementById("fourthInput").value);
	var timesYear = parseInt(document.getElementById("fifthInput").value);
	
	var total = ((padsNum*.2) + (tampNum*.19) + (pantNum*.04))*days*timesYear*42;
	var padTotal = (padsNum*.2)*days*timesYear*42;
	var tampTotal = (tampNum*.2)*days*timesYear*42;
	var pantTotal = (pantNum*.2)*days*timesYear*42;
	
	document.getElementById("result").innerHTML = "You will spend $" + total + 
				" on menstrual products over your lifetime!\n" +
				"You will use " + padTotal.toFixed(0) + " pads, " + tampTotal.toFixed(0) 
				+ " tampons, and " + pantTotal.toFixed(0) + " pantiliners over your lifetime.";
}


