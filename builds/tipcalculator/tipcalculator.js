//Calculate Tip
calculateTip = () => {
	let billAmt = document.getElementById('billamt').value;
	let serviceQual = document.getElementById('serviceQual').value;
	let numOfPeople = document.getElementById('peopleamt').value;

	//validate input
	if (billAmt === '' || serviceQual == 0) {
		alert('Please enter values');
		return;
	}
	//Check to see if this input is empty or less than or equal to 1
	if (numOfPeople === '' || numOfPeople <= 1) {
		numOfPeople = 1;
		document.getElementById('each').style.display = 'none';
	} else {
		document.getElementById('each').style.display = 'inline-block';
	}

	//Calculate tip
	let total = billAmt * serviceQual / numOfPeople;
	//round to two decimal places
	total = Math.round(total * 100) / 100;
	//two digits after decimal point
	total = total.toFixed(2);
	//Display the tip
	document.getElementById('totalTip').style.display = 'inline-block';
	document.getElementById('tip').innerHTML = total;

	let billTotal = +billAmt + +total;
	//round to two decimal places
	billTotal = Math.round(billTotal * 100) / 100;
	//next line allows us to always have two digits after decimal point
	billTotal = billTotal.toFixed(2);

	//Display the bill total
	document.getElementById('totalBill').style.display = 'inline-block';
	document.getElementById('tot').innerHTML = billTotal;
};

//Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

//Hide total bill on load
document.getElementById('totalBill').style.display = 'none';
//click to call function
document.getElementById('calculate').onclick = () => {
	calculateTip();
};
