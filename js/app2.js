var totalVotes = 0;
var imageTracker = function (name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
};

var imageOptions = [
  new imageTracker("Banana", "images/banana.jpg"),
  new imageTracker("Bag", "images/bag.jpg"),
  new imageTracker("Boots", "images/boots.jpg"),
  new imageTracker("Chair", "images/chair.jpg"),
  new imageTracker("Cthulhu", "images/cthulhu.jpg"),
  new imageTracker("Dragon", "images/dragon.jpg"),
  new imageTracker("Pen", "images/pen.jpg"),
  new imageTracker("Scissor", "images/scissors.jpg"),
  new imageTracker("Shark", "images/shark.jpg"),
  new imageTracker("Sweep", "images/sweep.jpg"),
  new imageTracker("Unicorn", "images/unicorn.jpg"),
  new imageTracker("Usb", "images/usb.jpg"),
  new imageTracker("Water_Can", "images/water_can.jpg"),
  new imageTracker("Wine_Glass", "images/wine_glass.jpg"),

];

document.getElementById("image-container").addEventListener("click", recordClick);

// var pickedImages = []; // This is our memory - tracks which images we have shown
// document.getElementById("image1").addEventListener("click", recordClick);
// document.getElementById("image2").addEventListener("click", recordClick);
// document.getElementById("image3").addEventListener("click", recordClick);


function getThreeImages() {
  pickedImages = []; // Empty this so that we can track 3 new images
  for (var imageID = 1; imageID <= 3; imageID++) {
    do { // Get a random index value for our image
      var index = Math.floor(Math.random() * 14);
    } while (pickedImages.indexOf(index) >= 0); // keep trying until it's unique
    var source = imageOptions[index].imageSource; // Get the source for the image
    document.getElementById("image"+imageID).src = source; // update the image with the new source
    pickedImages.push(index); // add the image location to our memory for later use
  }
}

function recordClick(event) {
    var imageSource = event.target.src;
    for (var index = 0; index < imageOptions.length; index++) {
        if (imageSource.indexOf(imageOptions[index].imageSource) >= 0) {
            imageOptions[index].upVotes++;
            console.log('Image Clicked: ' + imageOptions[index].name);
        }
    }
    getThreeImages();
    checkVotes();
}

function checkVotes() {
    totalVotes++;
    if (totalVotes == 15) {
        var el = document.createElement('div');
        var elH1 = document.createElement('h1');
        el.className = "totalVotes";
        el.innerText = "You have reached 15 votes. This are your results:";
        var parentEl = document.getElementById('voteDisplay');
        console.log("Votes reached 15");

        parentEl.appendChild(elH1).appendChild(el);

        var votesList = document.createElement('ul');
        votesList.className = "votesList";
        for (var i = 0; i < imageOptions.length; i++) {
                var voteLi = document.createElement('li');
                voteLi.innerText = imageOptions[i].name + ": " + imageOptions[i].upVotes;
                votesList.appendChild(voteLi);
        }

        parentEl.appendChild(votesList);
        document.getElementById('image-container').removeEventListener("click", recordClick);
        drawChart();
    }
}

getThreeImages();
