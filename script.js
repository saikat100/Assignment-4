const bookedBtn = document.getElementById("booked");
bookedBtn.addEventListener("click", function () {
	const bookedArea = document.getElementById("booked-area");
	bookedArea.style.display = "none";
	const SuccessMessage = document.getElementById("success-message");
	SuccessMessage.style.display = "block";
});

function handleTicketChange(ticket, isIncrease) {
	const ticketCount = getInputValue(ticket);
	let ticketNewCount = ticketCount;
	if (isIncrease == true) {
		ticketNewCount = ticketCount + 1;
	}
	if (isIncrease == false && ticketCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	document.getElementById(ticket + "-count").value = ticketNewCount;
	let ticketTotal = 0;
	if (ticket == "FirstClassTicket") {
		ticketTotal = ticketNewCount * 150;
		document.getElementById(ticket + "-total").innerText = "First Class ($" + ticketTotal + ")";
	}
	if (ticket == "EconomyClassTicket") {
		ticketTotal = ticketNewCount * 100;
		document.getElementById(ticket + "-total").innerText = "Economy ($" + ticketTotal + ")";
	}
	calculateTotal();
}

function calculateTotal() {
	const FirstClassTicketCount = getInputValue("FirstClassTicket");
	const EconomyClassTicketCount = getInputValue("EconomyClassTicket");

	const totalPrice =
		FirstClassTicketCount * 150 + EconomyClassTicketCount * 100;
	document.getElementById("total-price").innerText = "$" + totalPrice;

	const vat = Math.round(totalPrice * 0.1);
	document.getElementById("vat-amount").innerText = "$" + vat;

	const grandTotal = totalPrice + vat;
	document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(ticket) {
	console.log(ticket);
	const ticketInput = document.getElementById(ticket + "-count");
	const ticketCount = parseInt(ticketInput.value);
	return ticketCount;
}
