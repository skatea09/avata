import React from "react";
import PropTypes from "prop-types";
import { BarChart, PieChart } from "react-easy-chart";

const propTypes = {
  filteredAvgScore: PropTypes.number.isRequired,
  filteredLength: PropTypes.number.isRequired,
  totalLength: PropTypes.number.isRequired,
  avgScore: PropTypes.number.isRequired,
  filteredResults: PropTypes.array.isRequired
};

const Charts = ({
  filteredAvgScore,
  avgScore,
  filteredResults,
  totalLength,
  filteredLength
}) => {
  console.log();
  return (
    <div className="flex-col">
      <PieChart
        labels
        data={[
          { key: "Total Books", value: totalLength, color: "#aaac84" },
          { key: "Selected Books", value: filteredLength, color: "#dce7c5" }
        ]}
        styles={{
          ".chart_text": {
            fontSize: "1em",
            padding: "8px",
            fill: "#fff"
          }
        }}
      />
      <BarChart
        axes
        height={400}
        width={400}
        yDomainRange={[75, 100]}
        colorBars
        data={[
          { x: "Overall Average", y: avgScore },
          { x: "Selected Average", y: filteredAvgScore }
        ]}
      />
    </div>
  );
};

Charts.propTypes = propTypes;

export default Charts;
