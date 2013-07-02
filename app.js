(function(){
  var svg,
      padding = 20,
      w = 960,
      h = 450,
      dataset = [29, 59, 19, 58, 89]

  function init () {
    createSvg();
    drawElements();
  }

  function createSvg () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#13373a");
  }

  function drawElements () {
    svg.selectAll(".bar")
      .data(dataset)
      .enter().append("svg:rect")
        .attr("class", "bar bright")
        .attr("x", function(d,i) {return i * 105;} )
        .attr("width", "100")
        .attr("y", function(d) {return 450 })
        .attr("height", function(d) {return 0} )
        .transition()
          .delay( function(d,i){ return i * 200} )
          .duration( 300 )
          .ease( "cubic-in-out" )
          .attr("height", function(d){ return d} )
          .attr("y", function(d){ return 450 - d} );
  }

  init();
})();
