import "./Linechart.css";
import { useRef, useEffect, useState } from "react";
import { select, line, axisBottom, scaleLinear, axisRight } from "d3";

const Linechart = () => {
  const [data, setData] = useState([50, 10, 150, 200, 27, 250, 100, 150]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    

    const xScale = scaleLinear().domain([0, data.length-1]).range([0, 600])
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(300px)").call(xAxis)

    const yScale = scaleLinear().domain([0, Math.max(250)]).range([300, 0]);
    const yAxis = axisRight(yScale)
    svg.select(".y-axis").style("transform", "translatex(600px)").call(yAxis)

    

    const myLine = line()
                    .x((value, index)=> xScale(index))
                    .y(value => yScale(value))

    svg
    .selectAll("path")
    .data([data])
    .join("path")
    .attr("d", value => myLine(value))
    .attr("stroke", "blue")
    .attr("fill", "none")
    .style("transform", "translateY(-300px)")
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        <g className="x-axis"/>
        <g className="y-axis"/>
      </svg>
    </>
  );
};

export default Linechart;
