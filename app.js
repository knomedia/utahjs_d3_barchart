(function(){
  var svg,
      padding = 20,
      w = 960,
      h = 450;

  function init () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#13373a");
  }


  init();
})();
