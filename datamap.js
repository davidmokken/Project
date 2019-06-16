const format = d3.format(',');

// Set tooltips
const tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(d => `<strong>Province: </strong><span class='details'>${d.properties.name}<br></span><strong>Amount of people with immigrant background: </strong><span class='details'>${format(d.total_immi)}</span>`);

const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 600 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
var year;
var name;


// Need to change the color scaling
const colorscale = d3.scaleLinear()
  .domain([4, 80])
  .range(["#EFEFFF","#02386F"]);

const svg = d3.select('#datamap')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('class', 'map');

// These numbers show the Netherlands out of the entire and complete worldmap
const projection = d3.geoRobinson()
  .scale(8200)
  .center([0, 52])
  .rotate([-4.8, 0])
  .translate( [width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

svg.call(tip);

var requests = [d3.json('data/ned.json'), d3.json('data/immi.json')];

Promise.all(requests).then(function(response) {
  ready(null, response[0], response[1]);  
}).catch(function(e){
  throw(e);
});

const Total_Immi_Prov = {};
const ColorList = {};

function ready(error, data, immigrants) {
//   // Starts shows a bar chart of the verdeling van geloof in the Netherlands as a whole
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
        updateBar(immigrants[year][name])
      })

  svg.append('text')
      .attr('x', (width / 2))
      .attr('y',  (margin.top/2))
      .attr('text-anchor', 'middle')
      .text('The Netherlands')


  svg.append('path')
    // .datum(topojson.mesh(data.features, (a, b) => a.id !== b.id))
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
      return colorscale((immigrants[year][d.properties.name]["Total number with MB"])/10000);
    }
  })


};


var clickEventMap = function() {
    $("#dropdown").on("click", function() {
      year = $(this).val()
      update(year)
      updateBar(immigrants[year][name]);
    });
}
  
  //   $("#2014").on("click", function() {
  //     update("2014");
  //     updateBar(immigrants, "2014");
  //   });
  
  //   $("#2015").on("click", function() {
  //     update("2015");
  //     updateBar(immigrants, "2015")
  //   });
  
  //   $("#2016").on("click", function() {
  //     update("2016");
  //     updateBar(immigrants, "2016")
  //   });
  
  //   $("#2017").on("click", function() {
  //     update("2017");
  //     updateBar(immigrants, "2017")
  //   });
  // };

function start(){
  update("2017")
  year = "2017"
}

// update("2017");
start();
clickEventMap();

}