import "./TempGraph.css";

function TempGraph({ graphData }) {
  const mockData = [-5, +4, -10, -6, +8, -1.4, +3.2, -2.5, +7, 5];

  const normaliseBarHeight = (data) => {
    const maxHeight = Math.max(...data.map((d) => Math.abs(d)));
    // Determine each bar height by finding how tall it is compared with highest, then multiplying with max number of px
    const normalisedData = data.map((d) => (d / maxHeight) * 200);
    return normalisedData;
  };
  console.log(
    "normaliseBarHeight ",
    normaliseBarHeight([-5, +4, -10, -6, +8, -1.4, +3.2, -2.5, +7, 5])
  );

  return (
    <div className="overall-container">
      <div>0</div>
      <div className="graph-container">
        <p className="x-description">Hot</p>
        <div className="x-container">
          <div className="x-axis"></div>
          <div className="graph-areas-container">
            <div className="positive"></div>
            <div className="y-axis"></div>
            <div className="negative"></div>
          </div>
        </div>
        <p className="x-description">Cold</p>
      </div>
    </div>
  );
}

export default TempGraph;
