import React from "react";
import GaugeChart from "react-gauge-chart";

function GetBatteryData() {
  return (
    <GaugeChart
      id="gauge-chart5"
      nrOfLevels={100}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={["#5BE12C", "#F5CD19", "#EA4228"]}
      percent={0.37}
      arcPadding={0.05}
    />
  );
}
export default GetBatteryData;
