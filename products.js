var products= [
	["beachSelfie", "Getting that sand out of your bathing suit","$4","img/"],
	["skyScraper", "We'll catch you on the edge", "$6", "img/"],
	["groupSelfie", "Show off your better looking friends", "$.25", "img/"],
	["vacationSelfie", "Dont worry i'll find you", "$5 + airfare", "img/"],
	["concertSelfie", "We'll steal your spotlight", "$3 + ticket price", "img/"],
	["diySelfie", "supervised selfie BYOSS", "$27", "img/"],
	["vanSelfie", "free candy", "free", "img/"],
	["bathroomSelfie", "you'll never know", "$12", "img/"]
	];


var productLeft= document.getElementById("left")
var productRight= document.getElementById("right")
var productList=""
var productGroup=""


for (var i=0; i<products.length/2; i++) {
	productList+= "<section>"
	productGroup+= "<section>"

	productList += "<img src= '" + products[i][3] + "'>"
	productGroup += "<img src='" + products[i + 4][3] + "'>"
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

