
// Constant variables
const width_svg = 500;
const height_svg = 700;
const width_bar = 400;
const height_bar = 600;
const bar_spacing = 2;
var spacing_xaxis = 52;

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
    .attr('transform', "translate(50, 600)")
    .call(d3.axisBottom(xScale));

var yAxis = g => g
    .attr('transform', 'translate(50, 10)')
    .call(d3.axisLeft(yScale));


svg_bar.append("g")
.attr("class", "x-axis")

svg_bar.append("g")
.attr("class", "y-axis")

svg_bar.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 25)
.style("text-anchor", "end")
.attr("font-size", "13px")
.attr("font-family", "sans-serif")
.text("Amount of people with immigrant descent");

// id_list = [""]

// svg_bar.selectAll("rect")
//         .data()

function updateBar(data, radio){
    
    // Creates an hardcopy of the acquired data
    data_list = []
    speed = 1000;

    // Hardcopy for the total chart
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


    // Hardcopy for the relative chart
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
    delete dataRelative['Marrocan']
    delete dataRelative['Dutch Antillies']
    delete dataRelative['Surinam']
    delete dataRelative['Total number with MB']
    delete dataRelative['Turkey']
    delete dataRelative['Western']
    delete dataRelative['Other']

    if (radio === "total"){
        used_data = dataTotal;
    }
    else {
        used_data = dataRelative;
    }

    for (key in used_data){
        data_list.push({name: key, value: used_data[key]})
    };

    // console.log(used_data)
    // console.log(data_list)
    xScale.domain(Object.keys(used_data))

    svg_bar.selectAll(".x-axis").transition().duration(speed)
    .call(xAxis)

    yScale.domain([0, d3.max(data_list, function(d) {
        return d['value']})])

    svg_bar.selectAll(".y-axis").transition().duration(speed)
			.call(yAxis);
    
    var bar = svg_bar.selectAll(".bar")
                    .data(data_list)  
    // Hoort de laatste stap te zijn
    // moet zijn
    // select + data
    // enter + append
    // exit + remove
    

    bar.exit().remove();

    // Draws the bars with the acquired data
    bar.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", function(d) {
            return "rgb(" + (height_bar - yScale(d['value'])) + ", 0, 0)";
        })
        .attr("width", width_bar / data_list.length - bar_spacing)
        .merge(bar)
        .transition().duration(speed)


    bar.attr("x", function(d, i) {
        return spacing_xaxis + (i * width_bar / data_list.length);
        })
        .attr("y", function(d) {
                value = d['value']
            return yScale(value);
        })
        .attr("height", function(d){
            return height_bar - yScale(d['value']);
        })


        // .attr("fill", "steelblue")
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

