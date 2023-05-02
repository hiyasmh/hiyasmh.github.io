d3.json('data.geojson').then(function(bb) {
    2  let width = 200, height = 200;
    3  let projection = d3.geoEqualEarth();
    4  projection.fitSize([width, height], bb);
    5  let geoGenerator = d3.geoPath()
    6  .projection(projection);
    7
    8  let svg = d3.select("body").append('svg')
    9  .style("width", width).style("height", height);
   10
   11  svg.append('g').selectAll('path')
   12  .data(bb.features)
   13  .join('path')
   14  .attr('d', geoGenerator)
   15  .attr('fill', '#088')
   16  .attr('stroke', '#000');
   17});