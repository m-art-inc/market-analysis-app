
var chart;
var fruitInfo = [
  { label: "Banana",  y: 10  },
  { label: "Bag", y: 15  },
  { label: "Boots", y: 25  },
  { label: "Chair",  y: 30  },
  { label: "Cthulhu",  y: 28  }
]
function drawChart() {
  var chartProperties = {
		title:{
			text: "Voting Results"
		},
		animationEnabled: false,   // change to true
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "bar",
      color: "#67c09d",
			dataPoints: fruitInfo
		}
		]
	};
  chart = new CanvasJS.Chart("chartDisplay", chartProperties);
	chart.render();
}

window.addEventListener("load", drawChart);


/*var SampleConstructor = function(){
this.name = "hello";
this.y = 0;

this.incrementVotes = function(){
  this.y++;
  }

}
*/
