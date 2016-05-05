function Dress(name, size, price, image) {
	this.name = name;
	this.size = size;
	this.price = price;
	this.image = image;
}

var dressArray = []

var redBeltedDress = new Dress('Red Belted Dress', "S, M, L", "$52.00", "img/redbelted.jpg")
var littleBlackDress = new Dress('Little Black Dress', "S, M, L", "$48.00", "img/littleblack.jpg")
var greenEnvyDress = new Dress('Green Envy Dress', "S, M, L", "$43.00", "img/green.jpg")
var prettyPeachDress = new Dress('Pretty Peach Dress', "S, M, L", "$39.00", "img/peach.jpg")
var verticalStripedDress = new Dress('B&W Stripe Dress', "S, M, L", "$50.00", "img/striped.jpg")
var yellowSpottedDress = new Dress('Yellow Spot Dress', "S, M, L", "$40.00", "img/yellowblueprint.jpg")
var wovenPrintDress = new Dress('Woven Print Dress', "S, M, L", "48.00", "img/woven.jpg")
var highCollarDress = new Dress('High Collar Dress', "S, M, L", "$52.00", "img/collared.jpg")
var orangePrintDress = new Dress('Orange Print Dress', "S, M, L", "$42.00", "img/redprint.jpg")



dressArray.push(redBeltedDress)
dressArray.push(littleBlackDress)
dressArray.push(greenEnvyDress)
dressArray.push(prettyPeachDress)
dressArray.push(verticalStripedDress)
dressArray.push(yellowSpottedDress)
dressArray.push(wovenPrintDress)
dressArray.push(highCollarDress)
dressArray.push(orangePrintDress)


for(i = 0; i < dressArray.length; i++) {
	var dressName = document.createTextNode(dressArray[i].name)
	var dressSize = document.createTextNode("Available sizes: " + dressArray[i].size)
	var dressPrice = document.createTextNode(dressArray[i].price)
	var dressButton = document.createTextNode("Buy Now!")
	var dressImage = dressArray[i].image


	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var nameH1 = document.createElement("H1")
	var sizeH4 = document.createElement("H4")
	var priceH4 = document.createElement("H4")
	var buyNow = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	nameH1.appendChild(dressName)
	sizeH4.appendChild(dressSize)
	priceH4.appendChild(dressPrice)
	buyNow.appendChild(dressButton)
	buyNow.className = "btn btn-primary btn-lg"
	
	image.src = dressImage
	image.className = "img-responsive"
	
	
	newCol.className = "col-sm-4"
	newDiv.className = "dress dressName" + i + " thumbnail"
	
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("dress").appendChild(newCol)
}

