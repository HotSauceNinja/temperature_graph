import "./TempGraph.css";

function TempGraph({ graphData, tempClosestToZero }) {
  const maxHeight = Math.max(...graphData.map((d) => Math.abs(d)));

  const normaliseBarHeight = (barHeight) => {
    // Determine bar height by finding how tall it is compared with highest, then multiplying with max number of px
    return (Math.abs(barHeight) / maxHeight) * 200;
  };

  const isClosestToZero = (value) => {
    return Number(tempClosestToZero) === Number(value);
  };

  return (
    <div className="overall-container">
      <div>0</div>
      <div className="graph-container">
        <p className="x-description positive">Hot</p>
        <div className="x-container">
          <div className="x-axis"></div>
          <div className="graph-areas-container">
            <div className="y-axis"></div>
            {graphData.map((value, index) => (
              <div key={index} className="bar-wrapper">
                <div
                  key={index}
                  className={`bar ${
                    value >= 0 ? "positive-bar" : "negative-bar"
                  }`}
                  style={{
                    height: `${normaliseBarHeight(value)}px`,
                  }}
                >
                  <p
                    className={
                      isClosestToZero(value) ? "highlighted" : "regular"
                    }
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="x-description negative">Cold</p>
      </div>
    </div>
  );
}

export default TempGraph;
