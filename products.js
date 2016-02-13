var products= [
	["beachSelfie", "Show off that beach bod","$4","img/beachSelfie.jpg"],
	["skyScraper", "We'll catch you on the edge", "$6", "img/skyScraper.jpg"],
	["groupSelfie", "Show off your hot friends", "$.25", "img/groupSelfie.jpg"],
	["vacationSelfie", "Dont worry i'll find you", "$5 + airfare", "img/vacation.jpg"],
	["concertSelfie", "We'll steal your spotlight", "$3 + ticket price", "img/concert.jpg"],
	["diySelfie", "supervised selfie BYOSS", "$27", "img/diySelfie.jpg"],
	["vanSelfie", "free candy", "free", "img/vanSelfie.jpg"],
	["bathroomSelfie", "you'll never know", "$12", "img/restroomSelfie.jpg"]
	];


var productLeft= document.getElementById("left")
var productRight= document.getElementById("right")
var productList=""
var productGroup=""


for (var i=0; i<products.length/2; i++) {
	productList+= "<section>"
	productGroup+= "<section>"

	productList += "<img src= '" + products[i][3] + "' class='productImage'>"
	productGroup += "<img src='" + products[i + 4][3] + "' class='productImage'>"
	for (var j=0; j<3; j++) {
		productList += "<p>" + products[i][j] + "</p>"
		productGroup += "<p>" + products[i + 4][j] + "</p>"
	}
	productList += "</section>"
	productGroup += "</section>"
}
console.log(productList)
console.log(productGroup)


productLeft.innerHTML = productList
productRight.innerHTML = productGroup

