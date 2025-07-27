import "./TempGraph.css";

function TempGraph({ graphData }) {
  const maxHeight = Math.max(...graphData.map((d) => Math.abs(d)));

  const normaliseBarHeight = (barHeight) => {
    // Determine bar height by finding how tall it is compared with highest, then multiplying with max number of px
    return (Math.abs(barHeight) / maxHeight) * 200;
  };

  return (
    <div className="overall-container">
      <div>0</div>
      <div className="graph-container">
        <p className="x-description">Hot</p>
        <div className="x-container">
          <div className="x-axis"></div>
          <div className="graph-areas-container">
            <div className="y-axis"></div>
            {graphData.map((value, index) => (
              <div key={index} className="bar-wrapper">
                <div
                  key={index}
                  className={`bar ${value >= 0 ? "positive" : "negative"}`}
                  style={{
                    height: `${normaliseBarHeight(value)}px`,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="x-description">Cold</p>
      </div>
    </div>
  );
}

export default TempGraph;
