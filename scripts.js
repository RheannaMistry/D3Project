//Data for White Teens
var data = [{
    "preg": "98.9",
    "year": "1990"
}, {
    "preg": "96.6",
    "year": "1991"
}, {
    "preg": "92.3",
    "year": "1992"
}, {
    "preg": "90.0",
    "year": "1993"
}, {
    "preg": "87.8",
    "year": "1994"
}, {
    "preg": "84.9",
    "year": "1995"
}, {
    "preg": "81.4",
    "year": "1996"
}, {
    "preg": "77.9",
    "year": "1997"
}, {
    "preg": "75.9",
    "year": "1998"
}, {
    "preg": "73.4",
    "year": "1999"
}, {
    "preg": "71.3",
    "year": "2000"
}, {
    "preg": "67.7",
    "year": "2001"
}, {
    "preg": "64.4",
    "year": "2002"
}, {
    "preg": "62.3",
    "year": "2003"
}, {
    "preg": "60.7",
    "year": "2004"
}, {
    "preg": "59.1",
    "year": "2005"
}, {
    "preg": "60.6",
    "year": "2006"
}, {
    "preg": "60.9",
    "year": "2007"
}, {
    "preg": "58.8",
    "year": "2008"
}, {
    "preg": "55.5",
    "year": "2009"
}, {
    "preg": "49.8",
    "year": "2010"
}];

//Data for Black Teens
var data2 = [{
    "preg": "223.8",
    "year": "1990"
}, {
    "preg": "222.3",
    "year": "1991"
}, {
    "preg": "216.6",
    "year": "1992"
}, {
    "preg": "209.9",
    "year": "1993"
}, {
    "preg": "198.7",
    "year": "1994"
}, {
    "preg": "181.4",
    "year": "1995"
}, {
    "preg": "175.1",
    "year": "1996"
}, {
    "preg": "168.1",
    "year": "1997"
}, {
    "preg": "162.0",
    "year": "1998"
}, {
    "preg": "156.1",
    "year": "1999"
}, {
    "preg": "152.9",
    "year": "2000"
}, {
    "preg": "141.2",
    "year": "2001"
}, {
    "preg": "131.6",
    "year": "2002"
}, {
    "preg": "125.3",
    "year": "2003"
}, {
    "preg": "122.5",
    "year": "2004"
}, {
    "preg": "118.9",
    "year": "2005"
}, {
    "preg": "121.6",
    "year": "2006"
}, {
    "preg": "119.1",
    "year": "2007"
}, {
    "preg": "117.0",
    "year": "2008"
}, {
    "preg": "110.2",
    "year": "2009"
}, {
    "preg": "99.5",
    "year": "2010"
}];

//Data for Hispanic Teens
var data3 = [{
    "preg": "162.2",
    "year": "1990"
}, {
    "preg": "169.1",
    "year": "1991"
}, {
    "preg": "169.7",
    "year": "1992"
}, {
    "preg": "165.8",
    "year": "1993"
}, {
    "preg": "164.4",
    "year": "1994"
}, {
    "preg": "158.5",
    "year": "1995"
}, {
    "preg": "152.8",
    "year": "1996"
}, {
    "preg": "143.5",
    "year": "1997"
}, {
    "preg": "142.5",
    "year": "1998"
}, {
    "preg": "139.4",
    "year": "1999"
}, {
    "preg": "137.1",
    "year": "2000"
}, {
    "preg": "132.1",
    "year": "2001"
}, {
    "preg": "126.5",
    "year": "2002"
}, {
    "preg": "122.3",
    "year": "2003"
}, {
    "preg": "121.9",
    "year": "2004"
}, {
    "preg": "116.9",
    "year": "2005"
}, {
    "preg": "118.1",
    "year": "2006"
}, {
    "preg": "114.6",
    "year": "2007"
}, {
    "preg": "106.6",
    "year": "2008"
}, {
    "preg": "96.1",
    "year": "2009"
}, {
    "preg": "83.5",
    "year": "2010"
}];

	
  var vis = d3.select("#visualisation"),
    	WIDTH = 1000,
    	HEIGHT = 500,
    	MARGINS = {
        	top: 20,
        	right: 20,
        	bottom: 20,
        	left: 60
    		},

   		xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1990,2010]),
    	yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,250]),


    	xAxis = d3.svg.axis()
        .scale(xScale).tickFormat(d3.format('0f'));
          

    	vis.append("svg:g")
    	.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    	.call(xAxis);
    	

    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    vis.append("svg:g")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

    var lineGen = d3.svg.line()
    .x(function(d) {
    return xScale(d.year);
    })
    .y(function(d) {
    return yScale(d.preg);
    });

    vis.append("text")
    .attr("x", 570)
    .attr("y", 10)
    .style("text-anchor", "middle")    
    .text("U.S. Teen Pregnancy Rates of Various Races");
 
    vis.append("text")
    .attr("x", 550)
    .attr("y", 470)
    .style("text-anchor", "middle")
    .text("Year Recorded");

    vis.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 65)
    .attr("x", -230)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Total Pregnancies per 1,000 Teens (Ages 15-19)"); 
 
    vis.append('svg:path')
    .attr('d', lineGen(data))
    .attr('stroke', '#04B431')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  
    vis.append('svg:path')
    .attr('d', lineGen(data2))
    .attr('stroke', '#8A0886')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  
    vis.append('svg:path')
    .attr('d', lineGen(data3))
    .attr('stroke', '#FF8000')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

    var lineGen = d3.svg.line()
    .x(function(d) {
        return xScale(d.year);
    })
    .y(function(d) {
        return yScale(d.preg);
    })
    .interpolate("basis");

    var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([60, 40])
    .html(function(d) {
        return "<strong>" + "Year: " + d.year + 
                "</strong><br>" +
        d.preg + " pregnancies (per 1000 teens)<br>";
    });

    vis.call(tip);

    vis.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return xScale(d.year); })
      .attr('cy', function(d) { return yScale(d.preg); })
      .attr('r', 6)
      .attr('fill', 'white')
      .attr('stroke', 'green')
      .attr('stroke-width', '3')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    vis.selectAll(".dot")
      .data(data2)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return xScale(d.year); })
      .attr('cy', function(d) { return yScale(d.preg); })
      .attr('r', 6)
      .attr('fill', 'white')
      .attr('stroke', 'purple')
      .attr('stroke-width', '3')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    vis.selectAll(".dot")
      .data(data3)
      .enter().append("circle")
      .attr('class', 'datapoint')
      .attr('cx', function(d) { return xScale(d.year); })
      .attr('cy', function(d) { return yScale(d.preg); })
      .attr('r', 6)
      .attr('fill', 'white')
      .attr('stroke', 'orange')
      .attr('stroke-width', '3')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    var div = d3.select("body")
    .append("div") 
    .attr("class", "tooltip")              
    .style("opacity", 0);    