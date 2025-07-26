function TempGraph({ graphData }) {
  return graphData && graphData.length > 0 ? (
    <div className="temperature-graph-placeholder">
      <p>Graph goes here</p>
    </div>
  ) : (
    <p className="description-text">
      The graph will be displayed here once the temperatures are submitted.
    </p>
  );
}

export default TempGraph;
