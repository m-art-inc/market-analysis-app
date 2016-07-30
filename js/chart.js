var chart;


function drawChart() {
	var fruitInfo = [
		{label: imageOptions[0].name, y: imageOptions[0].upVotes},
		{label: imageOptions[1].name, y: imageOptions[1].upVotes},
		{label: imageOptions[2].name, y: imageOptions[2].upVotes},
		{label: imageOptions[3].name, y: imageOptions[3].upVotes},
		{label: imageOptions[4].name, y: imageOptions[4].upVotes},
		{label: imageOptions[5].name, y: imageOptions[5].upVotes},
	];
	var chartProperties = {
		title: {
			text: "Voting Results"
		},
		animationEnabled: false, // change to true
		data: [{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "bar",
			color: "#67c09d",
			dataPoints: fruitInfo
		}]
	};
	chart = new CanvasJS.Chart("chartDisplay", chartProperties);
	chart.render();
}

// window.addEventListener("load", drawChart);


/*var SampleConstructor = function(){
this.name = "hello";
this.y = 0;

this.incrementVotes = function(){
  this.y++;
  }

}
*/