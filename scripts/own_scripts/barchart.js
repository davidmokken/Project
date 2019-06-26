
// Constant variables
var margin_bar = {top: 50, right: 100, bottom: 30, left: 50};
const width_bar = 600 - margin_bar.left - margin_bar.right;
const height_bar = 600 - margin_bar.top - margin_bar.bottom;
var speed = 1000;
const bar_spacing = 2;
var spacing_xaxis = 100;

// Append svg object to the div "line_chart"
var svg_bar = d3.select("#bar")
            .append("svg")
            .attr("width", width_bar + margin_bar.left + margin_bar.right)
            .attr("height", height_bar + margin_bar.top + margin_bar.bottom);

// Tip function for the bar chart
const tip_bar = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(d => `<strong>Background: </strong><span class='details'>${d.name}<br></span><strong>Amount: </strong><span class='details'>${d.value}</span>`);
          
svg_bar.call(tip_bar);

// const color_bar = d3.scaleLinear()
//                     .domain()
//                     .range();

// Creates scale for x-axis
var xScale = d3.scaleBand()
                .range([0, width_bar]);

// Creates scale for y-axis
var yScale = d3.scaleLinear()
                .range([height_bar, 0]);

// Creates x and y axis
var xAxis = g => g
    .attr('transform', "translate(" + spacing_xaxis + "," + (margin_bar.top + height_bar) + ")")
    .call(d3.axisBottom(xScale));

var yAxis = g => g
    .attr('transform', "translate(" + spacing_xaxis + "," + margin_bar.top + ")")
    .call(d3.axisLeft(yScale));

svg_bar.append("g")
.attr("class", "x-axis")

svg_bar.append("g")
.attr("class", "y-axis")

// Creates title for the y axis
svg_bar.append("text")
.attr("transform", "rotate(-90)")
.attr("x", -(margin_bar.bottom))
.attr("y", margin_bar.bottom)
.style("text-anchor", "end")
.attr("font-size", "13px")
.attr("font-family", "sans-serif")
.text("Amount of people with immigrant descent");

// Creates title for the graph
svg_bar.append("text")
.attr("x", 100)
.attr("y", margin_bar.bottom)
.style("text-anchor", "center")
.attr("font-size", "25px")
.text("Distribution of different immigrant descents");

// Function that creates/updates the bar chart for a given province and year
function updateBar(data, radio){
    
    // List for the hardcopy
    data_list = []
    
    // Creates an hardcopy of the acquired data
    // Hardcopy for the barchart that shows the total numbers
    function iterationCopyTotal(src) {
        let target = {};
        for (let prop in src) {
          if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
          }
        }
        return target;
    }
    const sourceTotal = data;
    const dataTotal = iterationCopyTotal(sourceTotal);

    // Deletes the unused data from the hardcopy for the total chart
    delete dataTotal['Dutch (relative)']
    delete dataTotal['Non-Western (relative)']
    delete dataTotal['Total Migration Background (relative)']
    delete dataTotal['Total number with MB']
    delete dataTotal['Western (relative)']


    // Hardcopy for the barchart that shows the relative numbers
    function iterationCopyRelative(src) {
        let target = {};
        for (let prop in src) {
          if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
          }
        }
        return target;
    }
    const sourceRelative = data;
    const dataRelative = iterationCopyRelative(sourceRelative);

    // Deletes the unused data from the hardcopy for the relative chart
    // Renames the values
    delete dataRelative['Marrocan']
    delete dataRelative['Dutch Antillies']
    delete dataRelative['Surinam']
    delete dataRelative['Total number with MB']
    delete dataRelative['Turkey']
    delete dataRelative['Western']
    delete dataRelative['Other']

    dataRelative['Dutch'] = dataRelative['Dutch (relative)']
    dataRelative['Total Migration Background'] = dataRelative['Total Migration Background (relative)']
    dataRelative['Non-Western'] = dataRelative['Non-Western (relative)']
    dataRelative['Western'] = dataRelative['Western (relative)']

    delete dataRelative['Dutch (relative)']
    delete dataRelative['Non-Western (relative)']
    delete dataRelative['Total Migration Background (relative)']
    delete dataRelative['Western (relative)']

    // Determines which data to use dependent on the state of the radio button
    if (radio === "total"){
        used_data = dataTotal;
    }
    else {
        used_data = dataRelative;
    }

    // Formats the data so it can be easily used in a barchart
    for (key in used_data){
        data_list.push({name: key, value: used_data[key]})
    };

    // Scales the ranges of the data and calls the axis
    xScale.domain(Object.keys(used_data))

    svg_bar.selectAll(".x-axis").transition().duration(speed)
    .call(xAxis)

    yScale.domain([0, d3.max(data_list, function(d) {
        return d['value']})])

    svg_bar.selectAll(".y-axis").transition().duration(speed)
			.call(yAxis);
    
    // Deletes previously used (before updating) bars
    var bar = svg_bar.selectAll(".bar")
                    .data(data_list)    

    bar.exit().remove();

    // Draws the bars with the acquired data and creates the hoover function
    bar.enter()
        .append("rect")
        .on('mouseover',function(d){
            tip_bar.show(d);
            d3.select(this)
              .style('opacity', 1)
              .style('stroke-width', 3);
        })
        .on('mouseout', function(d){
            tip_bar.hide(d);
            d3.select(this)
              .style('opacity', 0.8)
              .style('stroke-width',0.3);
        })
        .attr("class", "bar")
        .attr("fill", function(d) {
            return "rgb(" + (height_bar - yScale(d['value'])) + ", 0, 0)";
        })
        .attr("width", width_bar / data_list.length - bar_spacing)
        .merge(bar)
        .transition().duration(speed)
        .attr("x", function(d, i) {
        return spacing_xaxis + (i * width_bar / data_list.length);
        })
        .attr("y", function(d) {
                value = d['value']
            return margin_bar.top + yScale(value);
        })
        .attr("height", function(d){
            return height_bar - yScale(d['value']);
        })
        .attr('id', function(d){
            return d['name']
        });
        


        // .attr("fill", "steelblue")
        // .remove()
        // .exit();     
        

}

