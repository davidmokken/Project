// Constant values
var margin_line = {top: 20, right: 100, bottom: 30, left: 50};
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

var z = d3.scaleOrdinal(d3.schemeCategory10);

var xScale_line = d3.scaleTime()
            .range([0, width_line]);

var yScale_line = d3.scaleLinear()
            .range([height_line, 0]);

// define the line
var Bedreiging = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Bedreiging); });

// define the line
var Diefstalfietsen = d3.line()
    .x(function(d) {
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.DiefstalFiets); });

// // define the line
var Moord = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Moord); });

// // define the line
var OpenlijkGeweld = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.OpenlijkGeweld); });

// // define the line
var Straatroof = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Straatroof); });

// // define the line
var Vernieling = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Vernieling); });

//     // define the line
var WinkdelDiefstal = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.WinkdelDiefstal); });

// // define the line
var Zakkenrollerij = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Zakkenrollerij); });

//     // define the line
var Zedenmisdrijf = d3.line()
    .x(function(d) { 
        return xScale_line(d.year); })
    .y(function(d) { 
        return yScale_line(d.Zedenmisdrijf); });


var xAxis_line = g => g
    .attr('transform', "translate(0," + height_line + ")")
    .call(d3.axisBottom(xScale_line).ticks(5));

var yAxis_line = g => g
    .call(d3.axisLeft(yScale_line).ticks(20));

svg_line.append("g")
.attr("class", "x-axis")

svg_line.append("g")
.attr("class", "y-axis")

id_list = ["Bedreiging", "DiefstalFiets", "MoordDoodslag", "OpenlijkGeweld", "Straatroof",
"Vernieling", "WinkelDiefstal", "Zakkenrollerij", "Zedenmisdrijf"]

svg_line.selectAll("path")
        .data(id_list)
        .enter()
        .append("path")
        .attr("id", function(d){
            return d
        })
        .style("stroke", function(d) { return z(d); })
        .attr("class", "line")

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
    
    // Scale the range of the data
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
    
    // Add the valueline path.
    svg_line.select("#Bedreiging")
            .datum(data_list)
            .transition()
            .duration(transSpeed)
            // .style("stroke", "blue")
            .attr("d", Bedreiging);

    // Add the valueline path.
    svg_line.select("#DiefstalFiets")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Diefstalfietsen);

    // Add the valueline path.
    svg_line.select("#MoordDoodslag")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Moord);

    // Add the valueline path.
    svg_line.select("#OpenlijkGeweld")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", OpenlijkGeweld);

    // Add the valueline path.
    svg_line.select("#OpenlijkGeweld")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Straatroof);

    // Add the valueline path.
    svg_line.select("#Vernieling")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Vernieling);

    // Add the valueline path.
    svg_line.select("#WinkelDiefstal")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", WinkdelDiefstal);

    // Add the valueline path.
    svg_line.select("#Zakkenrollerij")
        .datum(data_list)
        .transition()
        .duration(transSpeed)
        .attr("d", Zakkenrollerij);

    // Add the valueline path.
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
  
        


    // // Appends a title to the linechart
    // svg_line.append('text')
    // .attr('x', 0)
    // .attr('y', -200)
    // .attr('text-anchor', 'middle')
    // .style('font-size', '20px')
    // .style('font-family', 'Times New Roman')
    // .text('At start: Division of religion in The Netherlands as a whole.');
                 