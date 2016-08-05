

$(document).ready(function() {


 

$("#calculatebtn").click(function () {

	var price = $("#amountdue").val();
	var myMoney = $("#amountgiven").val();

	//Change Recieved
	var change = myMoney - price;
	console.log(change);

	//Change in Dollars 
	var dollars = Math.floor(change);
	console.log(dollars)
	$("#dollarchange").text(+ dollars);

	//Quarters
	var remainder = Math.round(change % 1 * 100);
	
	var quarterAmount = Math.floor(remainder / 25);
	remainder = remainder % 25;
	console.log(quarterAmount);
	$("#quarterchange").text(+ quarterAmount);

	//dimes
	var dimes = Math.floor(remainder / 10);
	remainder = remainder % 10;
	console.log(dimes);
	$("#dimechange").text(+dimes);

	//nickles
	var nickels = Math.floor(remainder / 5);
	remainder = remainder % 5;
	console.log(nickels);
	$("#nickelchange").text(+ nickels);

	//Pennies
	var pennies = Math.floor(remainder / 1);
	remainder = remainder % 1;
	console.log(pennies);
	$("#pennychange").text(+ pennies);

	});
	

});