import React, { useRef, useEffect } from 'react';
const d3 = require('d3');
const hex = require('d3-hexbin');

export const Map = () => {
  const svgRef = useRef(null);
  const hexRadius = 20;
  const hexWidth = hexRadius * Math.sqrt(3);
  const hexHeight = hexRadius * 2;
  const circleRadius = 200;
  const hexPerRow = Math.ceil(circleRadius / hexWidth * 2);
  const hexRows = Math.ceil(circleRadius / hexHeight * 2);

  const hexData = [];

  for (let i = -hexRows; i <= hexRows; i++) {
    const rowOffset = i % 2 === 0 ? hexRadius : 0;

    for (let j = -hexPerRow; j <= hexPerRow; j++) {
      hexData.push({
        x: circleRadius + hexWidth * j + rowOffset,
        y: circleRadius + hexHeight * i,
      });
    }
  }

  useEffect(() => {
    const svg = d3.select(svgRef.current),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var randomX = d3.randomNormal(width / 2, 80),
    randomY = d3.randomNormal(height / 2, 80),
    points = d3.range(2000).map(function() { return [randomX(), randomY()]; });

var color = d3.scaleSequential(d3.interpolateLab("white", "steelblue"))
    .domain([0, 20]);

var hexbin = hex.hexbin()
    .radius(20)
    .extent([[0, 0], [width, height]]);

g.append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

g.append("g")
    .attr("class", "hexagon")
    .attr("clip-path", "url(#clip)")
  .selectAll("path")
  .data(hexbin(points))
  .enter().append("path")
    .attr("d", hexbin.hexagon())
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .attr("fill", function(d) { return color(d.length); });

g.append("g")
    .attr("class", "axis axis--y")

g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

