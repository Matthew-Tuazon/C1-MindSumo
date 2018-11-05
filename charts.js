window.onload = function () {
var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Most Popular Bike Per Season"
    },
    axisY: {
        title: "Number of Bike Usage",
        //suffix: "",
        includeZero: false
    },
    axisX: {
        title: "Seasons"
    },
    data: [{
        type: "column",
        yValueFormatString: "#,##0#\" Total Trips\"",
        dataPoints: [
            { label: "Fall", y: 134, indexLabel: "Bike 6527" },	
            { label: "Summer", y: 97, indexLabel: "Bike 6487" },
            { label: "Winter", y: 94, indexLabel: "Bike 4727" },
            { label: "Spring", y: 54, indexLabel: "Bike 5755" }	
        ]
    }]
});


var chart2 = new CanvasJS.Chart("chartContainer2", {
    theme: "dark1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Bike Market Shares by Season"
    },
    data: [{
        type: "doughnut",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}% Out of ~132427 Rides",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
            { y: 39.61, label: "Fall" },
            { y: 26.86, label: "Summer" },
            { y: 23.02, label: "Winter" },
            { y: 10.51, label: "Spring" }
        ]
    }]
});

var chart3 = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	
	title:{
		text:"Number of Trips For Each Day of the Week"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: ""
	},
	data: [{
		type: "bar",
		name: "Statistics",
		axisYType: "secondary",
		color: "#014D65",
        yValueFormatString: "###0#\" Total Trips\"",
		dataPoints: [
			{ y: 17303, label: "Sunday" },
			{ y: 18530, label: "Saturday" },
			{ y: 20043, label: "Friday" },
			{ y: 20345, label: "Thursday" },
			{ y: 19819, label: "Wednesday" },
          	{ y: 19136, label: "Tuesday" },
			{ y: 17251, label: "Monday" }
          

		]
	}]
});

chart1.render();
chart2.render();
chart3.render();
}

