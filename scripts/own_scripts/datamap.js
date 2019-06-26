const format = d3.format(',');

// Set tooltips
const tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(d => `<strong>Province: </strong><span class='details'>${d.properties.name}<br></span><strong>Amount of people with immigrant background: </strong><span class='details'>${format(d.total_immi)}</span>`);

// Global variables
const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 550 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;
var year;
var name;

// Need to change the color scaling
const colorscale = d3.scaleLinear()
  .domain([40000, 800000])
  .range(["#EFEFFF","#02386F"]);

// Creates the svg
const svg = d3.select('#datamap')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('class', 'map');

// These numbers show the Netherlands out of the entire and complete worldmap
const projection = d3.geoRobinson()
  .scale(7300)
  .center([0.5, 52])
  .rotate([-4.8, 0])
  .translate( [width / 2, height / 2]);

// Creates paths to the several provinces
const path = d3.geoPath().projection(projection);

// Calls the tip function for the hoover
svg.call(tip);

// Loads all the data simultaniously
var requests = [d3.json('data/ned.json'), d3.json('data/immi.json'), d3.json('data/safe.json'), d3.json('data/crime.json')];
window.onload = function(){
  Promise.all(requests).then(function(response) {
    ready(null, response[0], response[1], response[2], response[3]);  
  }).catch(function(e){
    throw(e);
  });

}

// Main function for all the visualisations
function ready(error, data, immigrants, safe, crime) {

  // Links 'g's to all creates paths
  var svg_map = svg.append('g')
    .attr('class', 'countries')
    .selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', path)

    .attr("class", function(d, i) {
        return d.properties.name;
    })
    .style('stroke', 'white')
    .style('opacity', 0.8)
    .style('stroke-width', 0.3)
    
    // Mousehover function
    .on('mouseover',function(d){
        tip.show(d);
        d3.select(this)
          .style('opacity', 1)
          .style('stroke-width', 3);
    })
    .on('mouseout', function(d){
        tip.hide(d);
        d3.select(this)
          .style('opacity', 0.8)
          .style('stroke-width',0.3);
      })

    // Once clicked on a province, all visualisations change according with the 
    //new data so it shows data for the selected province  
    .on("click", function(d){
      name = d.properties.name
      radio = getRadio()
      updateBar(immigrants[year][name], radio)
      updateLine(crime[name], name)
      console.log(safe[year][name]["Grade for safety (neighbourhood)"])
      document.getElementById('label').innerHTML = name
      gaugeset();
    })


  svg.append('path')
    .attr('class', 'names')
    .attr('d', path);

// Update function that updates the hoover function for the datamap and the colour of the datamap
function update(year){
  data.features.forEach(d =>  { 
    if (d.properties.type == "Provincie") {
      d.total_immi = immigrants[year][d.properties.name]["Total number with MB"];
    }  
  })
  
  svg_map.style('fill', function(d){
    if (d.properties.type == "Provincie"){
      return colorscale(immigrants[year][d.properties.name]["Total number with MB"]);
    }
  })
};

// Update function for the dropdown menu, selects and shows different data for different years
var clickEventMap = function() {
    $("#dropdown").on("change", function() {
      year = $(this).val()
      update(year)
      radio = getRadio()
      updateBar((immigrants[year][name]), radio)
      gaugeset();
    });
}

// Update function that changes the visualisations when clicked on the Netherlands button
//to show information about the Netherlands as a whole
var clickNed = function(){
  $("#nedbut").on("click", function() {
    console.log("LIEF")
    name = 'Nederland'
    radio = getRadio()
    updateBar((immigrants[year][name]), radio)
    document.getElementById('label').innerHTML = name
    updateLine(crime[name], name);
  });

}

// Gets the current state of the radio button
function getRadio(){
  var radios = document.getElementsByName('radio');
  for (var i = 0, length = radios.length; i < length; i++)
  {
   if (radios[i].checked)
   {
    // do whatever you want with the checked radio
    return radios[i].value
  
    // only one radio can be logically checked, don't check the rest
    break;
   }
  } 
}

// Function that updates the gauges to new values
var gaugeset = function(){
  d3.select("#fillgauge").on("valueChanged")((safe[year][name]["Grade for safety (neighbourhood)"]))
  d3.select("#fillgauge2").on("valueChanged")((safe[year][name]["Crime increased (neighbourhood)"]))
  d3.select("#fillgauge3").on("valueChanged")((safe[year][name]["Feels Unsafe (general)"]))
  d3.select("#fillgauge4").on("valueChanged")((safe[year][name]["Belief a lot of crime (neighbourhood)"]))
};

// Changes the bar chart when the radio is changed
var barchanger = function() {
  $("input[type=radio][name=radio]").on("change", function() {
    input = $(this).val()
    updateBar((immigrants[year][name]), input)

  });
}

// Start function that shows values for Netherlands in 2017
function start(){
  year = "2017"
  name = "Nederland"
  update(year)
  radio = getRadio()
  updateBar((immigrants['2016'][name]), radio)
  updateBar((immigrants[year][name]), radio)
  updateLine(crime[name], name)
  gaugeset()
}

start();
clickEventMap();
barchanger();
clickNed();

}
