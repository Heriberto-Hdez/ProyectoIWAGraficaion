function dona(){

// margen y radio
var margin = {top: 20, right: 20, bottom: 30, left: 10},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/2;

// color range
var color = d3.scaleOrdinal()
    .range(["#46BFBD", "#299BFF", "#00FF00", "#0657FA", "#00ff00", "#0000ff", "#FF6666"]);

// crear arco antes de generar el grafico
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

// generar arco
var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

// generar pie chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.cantidad; });

// definir svg
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// importar datos
d3.json("static/datos/data.json", function(error, data) {
  if (error) throw error;
    
    // analizar datos
    data.forEach(function(d) {
        d.cantidad = +d.cantidad;
        d.ciudad = d.ciudad;
    })

  // "El elemento g es un contenedor utilizado para agrupar elementos SVG"
  var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  // anexar el arco
  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.ciudad); })
    
    // transicion 
    .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attrTween("d", tweenPie);
        
  // anexar text
  g.append("text")
    .transition()
      .ease(d3.easeLinear)
      .duration(1000)
    .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data.ciudad; });
});

// animacion de la grafica
function tweenPie(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc(i(t)); };
}

};


