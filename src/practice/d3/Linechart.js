import "./Linechart.css";
import { useRef, useEffect, useState } from "react";
import { select } from "d3";

const Linechart = () => {
  const [data, setData] = useState([5, 10, 15, 20, 27, 33]);
  const svgRef = useRef();

  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current);
    console.log(svg.selectAll("circles").data(data));
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", val => val)  
      .attr("cx", val => val * 2)
      .attr("cy", val => val * 2)
      .attr("stroke", "red")
      .attr("fill", "none")
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <br />
      <br />
      <br />
      <button onClick={() => setData(data.map(elem => elem + 2))}>
        Size Double
      </button>
      <button onClick={() => setData(data.filter(elem => elem < 30))}>
        Filter Cirles
      </button>
    </>
  );
};

export default Linechart;
