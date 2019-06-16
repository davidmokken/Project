
// Constant variables
const width_svg = 700;
const height_svg = 700;
const width_bar = 600;
const height_bar = 600;
const bar_spacing = 2;
const max_domain = 100000;
var spacing_xaxis = 50;

var svg_bar = d3.select("#bar")
            .append("svg")
            .attr("width", width_svg)
            .attr("height", height_svg);

// const tip_bar = d3.tip()
//                 .attr('class', 'd3-tip')
//                 .offset([-10, 0])
//                 .html(d => `<strong>Religion: </strong><span class='details'>${d.data.key}<br></span><strong>Amount: </strong><span class='details'>${format(d.value)}%</span>`);
          
// svg_bar.call(tip_bar);

// const color_bar = d3.scaleLinear()
//                     .domain()
//                     .range();

var xScale = d3.scaleBand()
                .range([0, width_bar]);

var yScale = d3.scaleLinear()
                .range([height_bar, 0]);

var xAxis = g => g
    .attr('transform', "translate(50, 610)");


d3.axisBottom(xScale);

var yAxis = d3.axisLeft(yScale);

svg_bar.append("g")
.call(xAxis)
.attr('transform', "translate(50, 610)");

svg_bar.append("g")
.call(yAxis)
.attr('transform', 'translate(50, 10)');

svg_bar.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 25)
.style("text-anchor", "end")
.attr("font-size", "13px")
.attr("font-family", "sans-serif")
.text("Amount of people with immigrant descent");

function updateBar(data){
    
    // Fix hardcopy
    data_list = []
    data1 = data 
    
    delete data1['Dutch (relative)']
    delete data1['Non-Western (relative)']
    delete data1['Total Migration Background (relative)']
    delete data1['Total number with MB']
    delete data1['Dutch (relative)']
    delete data1['Western (relative)']


    for (key in data1){
        data_list.push({name: key, value: data1[key]})
        
    }

    xScale.domain(Object.keys(data1))
    yScale.domain([0, d3.max(data_list, function(d) {
        console.log(d)
        return d['value']})])
    
          
    // Draws the bars with the acquired data
    var bars = svg_bar.selectAll("rect")
                .data(data_list)
                .enter()
                .append("rect");
    console.log(data_list)

    bars.attr("x", function(d, i) {
        return spacing_xaxis + (i * width_bar / data_list.length);
        })
        .attr("y", function(d) {
                value = d['value']
                console.log(value)
            return yScale(value);
        })
        .attr("width", width_bar / data_list.length - bar_spacing)
        .attr("height", function(d){
            return height_bar - yScale(d['value']);
        })
        .attr("fill", "steelblue")
        // .remove()
        // .exit();

        // Mouse move function
        // .on('mouseover', function(d){
        // hover.style("left", d3.event.pageX - spacing_xaxis + "px")
        //         .style("top", d3.event.pageY - spacing_xaxis + "px")
        //         .style("display", "inline-block")
        //         .html((d.LOCATION) + ": " + (d.Value));
        // })
        // .on('mouseout', function(d) {
        //     hover.style("display", "none")
        // });        
        


}

