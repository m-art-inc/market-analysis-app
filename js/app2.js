var totalVotes = 0;
var imageTracker = function (name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
}

var imageOptions = [
  new imageTracker("Banana", "images/banana.jpg"),
  new imageTracker("Bag", "images/bag.jpg"),
  new imageTracker("Boots", "images/boots.jpg"),
  new imageTracker("Chair", "images/chair.jpg"),
  new imageTracker("Cthulhu", "images/cthulhu.jpg"),
  new imageTracker("Dragon", "images/dragon.jpg"),
  /*new imageTracker("Pen", "images/pen.jpg"),
  new imageTracker("Scissor", "images/scissors.jpg"),
  new imageTracker("Shark", "images/shark.jpg"),
  new imageTracker("Sweep", "images/sweep.jpg"),
  new imageTracker("Unicorn", "images/unicorn.jpg"),
  new imageTracker("Usb", "images/usb.jpg"),
  new imageTracker("Water_Can", "images/water_can.jpg"),
  new imageTracker("Wine_Glass", "images/wine_glass.jpg"),
  */
];
document.getElementById("image-container").addEventListener("click", recordClick);

function getThreeImages() {
  pickedImages = [];
  for (var imageID = 1; imageID <= 3; imageID++) {
    do { // Get a random index value for our image
      var index = Math.floor(Math.random() * 6);
    } while (pickedImages.indexOf(index) >= 0);
    var source = imageOptions[index].imageSource;
    document.getElementById("image"+imageID).src = source;
    pickedImages.push(index); 
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
    if (totalVotes == 6) {
        var el = document.createElement('div');
        var elH1 = document.createElement('h1');
        el.className = "totalVotes";
        el.innerText = "You have reached 6 votes. This are your results:";
        var parentEl = document.getElementById('voteDisplay');
        console.log("Votes reached 6");

        parentEl.appendChild(elH1).appendChild(el);

        var votesList = document.createElement('ul');
        votesList.className = "votesList";
        for (var i = 0; i < imageOptions.length; i++) {
            if(imageOptions[i].upVotes != 0) {
                var voteLi = document.createElement('li');
                voteLi.innerText = imageOptions[i].name + ": " + imageOptions[i].upVotes;
                votesList.appendChild(voteLi);
            }
        }

        parentEl.appendChild(votesList);
        document.getElementById('image-container').removeEventListener("click", recordClick);
    }
}

getThreeImages();
