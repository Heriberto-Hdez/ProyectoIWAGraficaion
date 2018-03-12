
function doble(){
	
	// dimensiones y margenes del grafico
	var margin = {top: 20, right: 20, bottom: 30, left: 50},  //left da espacio en el lado izquierdo, bottom da espacio de abajo, right da espacio de lado derecho y top de arriba
		width = 700 - margin.left - margin.right,   //hace pequeño el eje x
		height = 400 - margin.top - margin.bottom;  //hace pequeño el eje y

	// establecer fecha
	var parseTime = d3.timeParse("%Y");

	// establecer rango
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	// definir linea de crimen no violento
	var valueline = d3.line()
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.noviolento); });
	
        // definir linea de crimen violento
	var valueline2 = d3.line()
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.violento); });
	
	// margen superior izquierdo
	var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
                .append("g")
		.attr("transform",
			  "translate(" + margin.left + "," + margin.top + ")");

	function draw(data, country) {
	  
	  var data = data[country];
	  
	  // analizar datos
	  data.forEach(function(d) {
		  d.Date = parseTime(d.Date);
		  d.noviolento = +d.noviolento;
		  d.violento = +d.violento;
	  });
	  
	  // ordenar años ascendentes
	  data.sort(function(a, b){
		return a["Date"]-b["Date"];
		})
	 
	  // rango de los datos
	  x.domain(d3.extent(data, function(d) { return d.Date; }));
	  y.domain([0, d3.max(data, function(d) {
		  return Math.max(d.noviolento, d.violento); })]);
	  
	  // añade los valores a la linea de crimen no violento
	  svg.append("path")
		  .data([data])
		  .attr("class", "line")
		  .style('stroke', "blue")
		  .attr("d", valueline);
          
	  // añade los valores a la linea de crimen violento
	  svg.append("path")
		  .data([data])
		  .attr("class", "line")
		  .style('stroke', "red")
		  .attr("d", valueline2);  
	  
            //agregar el eje x
	  svg.append("g")
		  .attr("transform", "translate(0," + height + ")")
		  .call(d3.axisBottom(x));

	  // agregar el eje y
	  svg.append("g")
		  .call(d3.axisLeft(y));
	  }
	  
          //titulo de la grafica
	var title = svg.append("text")
            .attr("class", "title")
            .attr("dy", ".71em")
            .text("Crimen violento (Rojo)   Crimen no violento (azul) por 100.000 habitantes en Toronto, Canadá.");
	
	// obtener los datos
	d3.json("static/datos/crimenviolento.json", function(error, data) {
	  if (error) throw error;
	  
	  // dibujar grafica
	  draw(data, "crimen");
	});

};

