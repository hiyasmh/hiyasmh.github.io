import {select} from './path/to/d3.js';

const svg = d3.select('svg');

const circle = svg.append('circle');

const height = 500;

circle.attr('r',height/2);
circle.attr('cx',960/2);
circle.attr('cy',500/2);