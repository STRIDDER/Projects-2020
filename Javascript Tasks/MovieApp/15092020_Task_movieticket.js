//The Constructor
function Moviehouse(MovieChoice, No_seat, SeatType, Amount) {
	this.MovieChoice = MovieChoice;
	this.No_seat = No_seat;
	this.SeatType = SeatType;
	this.Amount = Amount;
}
//The Global varibales
var MovieNames = [
	"Ready Player One",
	"Dil Bechara",
	"Wonder Women",
	"Top Gun",
	"Rocky",
	"King Kong vs Godzilla",
];
var SeatCat = ["Economy", "Executive", "Luxary"];
var price = [300, 500, 800];

//The IIFE Function With delay displaying content
(function displayList() {
	setTimeout(function () {
		console.log("The Movies Currently to watch: ");
		MovieNames.map((x, i) => console.log(i + 1 + ". " + x));
	}, 1000);

	console.log(" ");
	setTimeout(function () {
		console.log(" ");
		console.log("The Available categories of seats are: ");
		SeatCat.map((x, i) => {
			console.log(i + 1 + ". " + price[i] + " INR for " + x);
		});
	}, 1500);
})();

//The Prototype Anonymous Constructor
Moviehouse.prototype.MovieInfo = function () {
	//tHE MOVIE NAME
	var status = false;
	let payment_status = false;
	var seat_index;
	let seats = [20, 20, 20];
	//The seat Avilibility Function
	//
	//
	//
	function seatAvailability(No_seat, SeatType) {
		setTimeout(function () {
			SeatCat.map((x, i) => {
				if (x === SeatType) {
					status = true;
					seat_index = i;
				}
			});
			console.log("");
			//console.log("The Seat Index" + seat_index);
			if (status === true) {
				var temp;
				temp = seats[seat_index];
				temp -= No_seat;
				seats[seat_index] = temp;
				//console.log("The array of seats: " + seats);

				//console.log("The reamining Seats" + seats[seat_index]);
				if (seats[seat_index] > 0) {
					console.log("Seat Booked");
					console.log("");
					//console.log(seats[seat_index]);
				} else {
					console.log("Seat Not Available");
					console.log("");
				}
			}
		}, 2000);
	}
	//
	//
	//
	//
	//
	//The Price calculation Function
	//
	//
	//
	function calcPrice(ticket_quantity, Amount) {
		setTimeout(function () {
			let temp;
			if (status === true) {
				temp = ticket_quantity * price[seat_index];
				console.log(
					"The Actual Fair for " +
						ticket_quantity +
						" number of persons is : " +
						temp
				);

				if (temp > Amount) {
					console.log("");
					console.log(
						"You have to pay more: " + (temp - Amount) + " INR."
					);
					console.log("");
				} else if (Amount > temp) {
					console.log("");
					console.log(
						"The Extra Returnd Amount is: " + (Amount - temp) + " INR."
					);
					payment_status = true;
					console.log("");
				} else {
					payment_status = true;
				}
			}
		}, 3000);
	}
	function transactionStatus() {
		setTimeout(function () {
			if (status === true && payment_status === true) {
				console.log("");
				console.log("The Ticket is Confirmed");
			} else console.log("The Ticket is Not confirmed");
			console.log("");
		}, 3000);
	}
	if (this.MovieChoice > 0 && this.MovieChoice < 8) {
		seatAvailability(this.No_seat, this.SeatType);
		calcPrice(this.No_seat, this.Amount);
		transactionStatus();
	} else {
		setTimeout(function () {
			console.log("");
			console.log("The movie is Not available");
			console.log("");
		}, 3000);
	}
};
//MovieChoice, No_seat, SeatType, Amount
var ankush = new Moviehouse(5, 4, "Executive", 2500);

ankush.MovieInfo();
