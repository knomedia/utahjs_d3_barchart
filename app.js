(function(){
  var svg,
      margin = {top: 20, right: 30, bottom: 20, left: 30},
      w = 960 - margin.left - margin.right,
      h = 450 - margin.top - margin.bottom,
      xScale,
      yScale,
      yAxis,
      dataset = [29, 59, 19, 58, 89]

  function init () {
    createScales();
    createSvg();
    drawElements();
    createAxis();
  }

  function createScales () {
    yScale = d3.scale.linear()
              .domain( [0, d3.max(dataset)] )
              .range( [h, 0] );
    xScale = d3.scale.linear()
              .domain([0, dataset.length])
              .range([0, w])
  }

  function createAxis () {
    yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .tickSize(0);

    svg.append("g")
      .attr("class", "axis")
      .call(yAxis);
  }
  function createSvg () {
    svg = d3.select("#chart").append("svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
    svg.append("g").append("svg:rect")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .attr("fill", "#0d2628");
    svg = svg.append("g")
      .attr("width", w)
      .attr("height", h)
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
  }

  function drawElements () {
    svg.selectAll(".bar")
      .data(dataset)
      .enter().append("svg:rect")
        .attr("class", "bar bright")
        .attr("x", function(d,i) {return (xScale(i) + 2);} )
        .attr("y", function(d) { return h })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", function(d,i){ return (xScale( 1 ) - 5 )})
        .attr("height", function(d) {return 0;} )
        .attr("y", function(d,i){return h -( h - yScale(d) )})
        .attr("height", function(d) { return h -  yScale(d) ; } )
        .on("click", showIt)
        .transition()
          .delay( function(d,i){return i * 200})
          .duration( 300 )
          .ease("cubic-in-out")
          //.attr("y", function(d) { return h - yScale(d) })
          //.attr("height", function(d) { return  yScale( d ) } )
  }

  function showIt (d,i) {
    console.log(d);
    console.log(i);
    console.log(this);
  }

  init();
})();
