

import { select, csv } from 'd3'

const svg = select('svg');
svg.style('background-color', pink);

csv('data.csv').then(data => {
  console.log(data);
})






















