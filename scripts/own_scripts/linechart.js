// Constant values
var margin_line = {top: 50, right: 100, bottom: 30, left: 50};
const width_line = 600 - margin_line.left - margin_line.right;
const height_line = 600 - margin_line.top - margin_line.bottom;
const legendRectSize = 25;
const legendSpacing = 6;
const transSpeed = 2000;

// Append svg object to the div "line_chart"
const svg_line = d3.select("#linechart")
            .append("svg")
            .attr("width", width_line + margin_line.left + margin_line.right)
            .attr("height", height_line + margin_line.top + margin_line.bottom)
            .append("g")
            .attr("transform", "translate(" + margin_line.left + "," + margin_line.top + ")");

var parseTime = d3.timeParse("%Y");

// Creates a color scale
var z = d3.scaleOrdinal(d3.schemeCategory10);

// Creates scale for x-axis
var xScale_line = d3.scaleTime()
            .range([0, width_line]);

// Creates scale for y-axis
var yScale_line = d3.scaleLinear()
            .range([height_line, 0]);

// Define the Bedreiging line
var Bedreiging = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Bedreiging); });

// Define the DiefstalFiets line
var Diefstalfietsen = d3.line()
    .x(function(d) {
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.DiefstalFiets); });

// Define the Moord line
var Moord = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Moord); });

// Define the OpenlijkGeweld line
var OpenlijkGeweld = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.OpenlijkGeweld); });

// Define the Straatroof line
var Straatroof = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Straatroof); });

// Define the Vernieling line
var Vernieling = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Vernieling); });

// Define the WinkdelDiefstal line
var WinkdelDiefstal = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.WinkdelDiefstal); });

// Define the Zakkenrollerij line
var Zakkenrollerij = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Zakkenrollerij); });

// Define the Zedenmisdrijf line
var Zedenmisdrijf = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Zedenmisdrijf); });

// Creates x and y axis
var xAxis_line = g => g
    .attr('transform', "translate(0," + height_line + ")")
    .call(d3.axisBottom(xScale_line).ticks(5));

var yAxis_line = g => g
    .call(d3.axisLeft(yScale_line).ticks(20));

svg_line.append("g")
.attr("class", "x-axis")

svg_line.append("g")
.attr("class", "y-axis")

// Creates title for the chart
svg_line.append("text")
.attr("x", 40)
.attr("y", -10)
.style("text-anchor", "center")
.attr("font-size", "30px")
.text("Registerd amount of crimes");

// Creates and ID list of all the crimes
id_list = ["Bedreiging", "DiefstalFiets", "MoordDoodslag", "OpenlijkGeweld", "Straatroof",
"Vernieling", "WinkelDiefstal", "Zakkenrollerij", "Zedenmisdrijf"]

// Creates paths for the different crimes
svg_line.selectAll("path")
        .data(id_list)
        .enter()
        .append("path")
        .attr("id", function(d){
            return d
        })
        .style("stroke", function(d) { return z(d); })
        .attr("class", "line")

// Creates legend with color rects and text
var legend = svg_line.append("g")
    .attr("transform", "translate(" + 0 + "," + margin_line.top + ")")
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(id_list)
    .enter().append("g")
    .attr("transform", function(d, i) { 
        return "translate(0," + i * 20 + ")"; });

legend.append("rect")
    .attr("x", width - 17)
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2);
    // .on("click",function(d) { update(d) });

legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) { return d; });


// A function that creates/updates the plot for a given province
function updateLine(data, province) {
    
    data_list = []
    
    // Formats the data so it can be easily used in a linechart
    for (key in data){
        data_list.push({year: parseTime(key), 
        Bedreiging: data[key]['Bedreiging'],
        DiefstalFiets: data[key]['Diefstal van brom-, snor-, fietsen'],
        Moord: data[key]['Moord, doodslag'],
        OpenlijkGeweld: data[key]['Openlijk geweld (persoon)'],
        Straatroof: data[key]['Straatroof'],
        Vernieling: data[key]['Vernieling cq. zaakbeschadiging'],
        WinkdelDiefstal: data[key]['Winkeldiefstal'],
        Zakkenrollerij: data[key]['Zakkenrollerij'],
        Zedenmisdrijf: data[key]['Zedenmisdrijf']})
    };
    
    // Scales the ranges of the data and calls the axis
    xScale_line.domain(d3.extent(data_list, function(d){
        return d.year;
    }))
    svg_line.selectAll(".x-axis").transition().duration(speed)
    .call(xAxis_line)

    yScale_line.domain([0, d3.max(data_list, function(d){
        return Math.max(d.Bedreiging, d.DiefstalFiets, d.Moord, d.OpenlijkGeweld,
            d.Straatroof, d.Vernieling, d.WinkdelDiefstal, d.Zakkenrollerij, d.Zedenmisdrijf);
    })]);

    svg_line.selectAll(".y-axis").transition().duration(speed)
            .call(yAxis_line);
    
    // Links the data to the different paths and so creates the lines
    svg_line.select("#Bedreiging")
            .datum(data_list)
            .transition()
            .duration(transSpeed)
            .attr("d", Bedreiging);

    svg_line.select("#DiefstalFiets")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Diefstalfietsen);

    svg_line.select("#MoordDoodslag")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Moord);

    svg_line.select("#OpenlijkGeweld")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", OpenlijkGeweld);

    svg_line.select("#Straatroof")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Straatroof);

    svg_line.select("#Vernieling")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Vernieling);

    svg_line.select("#WinkelDiefstal")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", WinkdelDiefstal);

    svg_line.select("#Zakkenrollerij")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Zakkenrollerij);

    svg_line.select("#Zedenmisdrijf")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Zedenmisdrijf);
      
}




 
// // Set tooltips
// const tip_line = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(d => `<strong>Religion: </strong><span class='details'>${d.data.key}<br></span><strong>Percentage: </strong><span class='details'>${format(d.value)}%</span>`);

// svg_line.call(tip_line);

    // // Sets the color scale
    // const color = d3.scaleOrdinal()
    //                 .domain(['Athiest', 'Dutch Reformed', 'Islam', 'Other', 'Protestant', 'Reformed', 'Roman Catholic'])
    //                 .range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f", "#0f60e2"]);
  