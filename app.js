(function(){
  var svg,
      padding = 20,
      w = 960,
      h = 450,
      xScale,
      yScale,
      dataset = [29, 59, 19, 58, 89]

  function init () {
    createScales();
    createSvg();
    drawElements();
  }

  function createScales () {
    yScale = d3.scale.linear()
              .domain( [0, d3.max(dataset)] )
              .range( [0, h] );
    xScale = d3.scale.linear()
              .domain([0, dataset.length])
              .range([0, w])
  }
  function createSvg () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#13373a");
    svg = svg.append("g");
  }

  function drawElements () {
    svg.selectAll(".bar")
      .data(dataset)
      .enter().append("svg:rect")
        .attr("class", "bar bright")
        .attr("x", function(d,i) {return (xScale(i) + 2);} )
        .attr("y", function(d) {return 450 })
        .attr("width", function(d,i){ return (xScale( 1 ) - 5 )})
        .attr("height", function(d) {return 0} )
        .on("click", showIt)
        .transition()
          .delay( function(d,i){return i * 200})
          .duration( 300 )
          .ease("cubic-in-out")
          .attr("height", function(d){ return yScale(d)} )
          .attr("y", function(d){ return 450 - yScale(d)} )
  }

  function showIt (d,i) {
    console.log(d);
    console.log(i);
    console.log(this);
  }

  init();
})();
