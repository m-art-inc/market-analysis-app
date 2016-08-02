var chart;



function drawChart() {
	var fruitInfo = [];

	for (var i = 0; i < imageOptions.length; i++) {
		var tempObj =	{label: imageOptions[i].name, y: imageOptions[i].upVotes};

		fruitInfo.push(tempObj);

	}
	console.log(fruitInfo);

		// {label: imageOptions[0].name, y: imageOptions[0].upVotes},
		// {label: imageOptions[1].name, y: imageOptions[1].upVotes},
		// {label: imageOptions[2].name, y: imageOptions[2].upVotes},
		// {label: imageOptions[3].name, y: imageOptions[3].upVotes},
		// {label: imageOptions[4].name, y: imageOptions[4].upVotes},
		// {label: imageOptions[5].name, y: imageOptions[5].upVotes},
	var chartProperties = {
		axisX: {
			interval: 1,
			intervalType: "number"
		},
		title: {
			text: "Voting Results"
		},
		animationEnabled: false, // change to true
		data: [{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
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
