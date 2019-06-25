const format = d3.format(',');

// Set tooltips
const tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(d => `<strong>Province: </strong><span class='details'>${d.properties.name}<br></span><strong>Amount of people with immigrant background: </strong><span class='details'>${format(d.total_immi)}</span>`);

const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 550 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;
var year;
var name;

// Need to change the color scaling
const colorscale = d3.scaleLinear()
  .domain([40000, 800000])
  .range(["#EFEFFF","#02386F"]);

const svg = d3.select('#datamap')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('class', 'map');

  svg.append('text')
  .attr('x', (width / 2))
  .attr('y',  (margin.top/2))
  .attr('text-anchor', 'middle')
  .text('The Netherlands')

// These numbers show the Netherlands out of the entire and complete worldmap
const projection = d3.geoRobinson()
  .scale(7300)
  .center([0.5, 52])
  .rotate([-4.8, 0])
  .translate( [width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

svg.call(tip);

var requests = [d3.json('data/ned.json'), d3.json('data/immi.json'), d3.json('data/safe.json'), d3.json('data/crime.json')];

Promise.all(requests).then(function(response) {
  ready(null, response[0], response[1], response[2], response[3]);  
}).catch(function(e){
  throw(e);
});

function ready(error, data, immigrants, safe, crime) {

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
    
    // Mousehover
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

      .on("click", function(d){
        name = d.properties.name
        radio = getRadio()
        updateBar(immigrants[year][name], radio)
        updateLine(crime[name], name)
        console.log(safe[year][name])
        d3.select("#fillgauge").call(d3.liquidfillgauge, (safe[year][name]["Grade for safety (neighbourhood)"]));
        // d3.select("#fillgauge2").call(d3.liquidfillgauge2, (safe[year][name]["Crime increased (neighbourhood)"]));
        // d3.select("#fillgauge3").call(d3.liquidfillgauge3, (safe[year][name]["Feels Unsafe (general)"]));
        d3.select("#fillgauge").on("valueChanged")((safe[year][name]["Grade for safety (neighbourhood)"]))// d3.select("#fillgauge4").call(d3.liquidfillgauge4, (safe[year][name]["Belief a lot of crime (neighbourhood)"]));
      })


  svg.append('path')
    .attr('class', 'names')
    .attr('d', path);


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


var clickEventMap = function() {
    $("#dropdown").on("change", function() {
      year = $(this).val()
      update(year)
      radio = getRadio()
      updateBar((immigrants[year][name]), radio);
      // barchanger()
      d3.select("#fillgauge").call(d3.liquidfillgauge, (safe[year][name]["Grade for safety (neighbourhood)"]));
    });
}

var clickNed = function(){
  $("#nedbut").on("click", function() {
    name = 'Nederland'
    radio = getRadio()
    updateBar((immigrants[year][name]), radio)
    updateLine(crime[name], name);
  });

}

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

var barchanger = function() {
  $("input[type=radio][name=radio]").on("change", function() {
    input = $(this).val()
    updateBar((immigrants[year][name]), input)

  });
}

function start(){
  year = "2017"
  name = "Nederland"
  update(year)
  radio = getRadio()
  updateBar((immigrants['2016'][name]), radio)
  updateBar((immigrants[year][name]), radio)
  updateLine(crime[name], name)
}

start();
clickEventMap();
barchanger();
clickNed();

}