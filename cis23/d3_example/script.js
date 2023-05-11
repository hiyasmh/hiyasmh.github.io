// Set up the map dimensions
const width = 800;
const height = 600;

// Create an SVG container for the map
const svg = d3.select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Load the map data (GeoJSON file for Manhattan)
d3.json("manhattan.geojson")
  .then(function(geojson) {
    // Create a projection for the map
    const projection = d3.geoIdentity()
      .fitSize([width, height], geojson);

    // Create a path generator
    const path = d3.geoPath()
      .projection(projection);

    // Draw the map
    svg.append("path")
      .datum(geojson)
      .attr("d", path)
      .attr("fill", "lightgray")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
  })
  .catch(function(error) {
    console.log("Error loading map data:", error);
  });
