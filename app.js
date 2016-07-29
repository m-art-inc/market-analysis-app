window.onload = chooseImage;

var myPix = new Array("images/wine_glass.jpg","images/boots.jpg","images/water_can.jpg");

function chooseImage() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("imageHolder").src = myPix[randomNum];
}
