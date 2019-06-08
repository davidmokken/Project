const format = d3.format(',');

// Set tooltips
// const tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(d => `<strong>Province: </strong><span class='details'>${d.properties.name}<br></span><strong>Percentage Gelovigen: </strong><span class='details'>${format(d.total_bel)}%</span>`);

const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 600 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const colorscale = d3.scaleLinear()
  .domain([0, 100])
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

// svg.call(tip);


Promise.all([d3.json('data/ned.json'), d3.json('data/immi.json')
]).then(
  d => ready(null, d[0], d[1])
);
const Total_Immi_Prov = {};
const ColorList = {};

function ready(error, data, immigrants) {
  for (key in immigrants) {
      console.log(key)
      Total_Immi_Prov = immigrants[key]['Total'];
      ColorList[key] = colorscale(immigrants[key]['Total']);  
  }



  // Creates new data in the console
  data.features.forEach(d =>  { d.total_bel = GelovigenProvincie[d.properties.name]});
 
//   // Starts shows a bar chart of the verdeling van geloof in the Netherlands as a whole
//   updateBar(population['Nederland'])

  svg.append('g')
    .attr('class', 'countries')
    .selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', function(d){
        return ColorList[d.properties.name]
    })
    .attr("class", function(d, i) {
        return d.properties.name;
    })
    .style('stroke', 'white')
    .style('opacity', 0.8)
    .style('stroke-width', 0.3)
    
    // // Mousehover
    // .on('mouseover',function(d){
    //     tip.show(d);
    //     d3.select(this)
    //       .style('opacity', 1)
    //       .style('stroke-width', 3);
    // })
    // .on('mouseout', function(d){
    //     tip.hide(d);
    //     d3.select(this)
    //       .style('opacity', 0.8)
    //       .style('stroke-width',0.3);
    //   })

    //   .on("click", function(d){
    //     updateBar(population[d.properties.name])
    //   })
  svg.append('text')
      .attr('x', (width / 2))
      .attr('y',  (margin.top/2))
      .attr('text-anchor', 'middle')
      .text('The Netherlands')


  svg.append('path')
    .datum(topojson.mesh(data.features, (a, b) => a.id !== b.id))
    .attr('class', 'names')
    .attr('d', path);
}

var clickEventMap = function() {
    $("#2013").on("click", function() {
      // var year = 2013;
      drawMap(2013);
    });
  
    $("#2014").on("click", function() {
      // var year = 2012;
      drawMap(2014);
    });
  
    $("#2015").on("click", function() {
      // var year = 2011;
      drawMap(2015);
    });
  
    $("#2016").on("click", function() {
      // var year = 2010;
      drawMap(2016);
    });
  
    $("#2017").on("click", function() {
      // var year = 2009;
      drawMap(2017);
    });
  };
  
  drawMap(2013);
  clickEventMap();