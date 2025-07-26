import React, { useState } from "react";
import "./App.css";

function App() {
  const [submittedTemperatures, setSubmittedTemperatures] = useState("");
  const [graphData, setGraphData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.text())
  //     .then((data) => setMessage(data))
  //     .catch((err) => console.log('Fetch error:', err));
  // }, []);

  const handleSubmit = async () => {
    setErrorMessage(null);

    const response = await fetch("/api/temperatures", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        submittedTemperatures: submittedTemperatures.trim(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error Data", errorData);

      setErrorMessage(
        errorData.errorMessage || "Something went wrong, please try again."
      );
      setGraphData([]);
      return;
    }

    const data = await response.json();
    console.log("DATA", data);

    setErrorMessage(null);
    setGraphData(data.temperaturesArray);
  };

  const handleInputChange = (value) => {
    setErrorMessage(null);
    setSubmittedTemperatures(value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Temperature Recorder</h1>
      </header>
      <div className="app-content">
        <div className="temperature-input-container">
          <h2 className="description-text">Enter temperatures</h2>
          <p className="description-text">
            Each temperature must include a <strong>+</strong> or a{" "}
            <strong>-</strong> sign and be separated by <strong>a space</strong>{" "}
            (e.g. +21 -5.3 -19 +2.7).
          </p>
          <input
            type="text"
            id="tempInput"
            name="temperature input"
            className="temperatures-input"
            placeholder="Type here..."
            value={submittedTemperatures}
            onChange={(e) => handleInputChange(e.target.value)}
          />

          {submittedTemperatures &&
          submittedTemperatures.trim().length > 0 &&
          errorMessage ? (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          ) : (
            <div>
              {submittedTemperatures.trim().length > 0 ? (
                <p className="info-text">
                  You have entered: {submittedTemperatures}
                </p>
              ) : (
                <p className="info-text">
                  Please enter temperatures to display them.
                </p>
              )}

              {submittedTemperatures && (
                <button className="primary-button" onClick={handleSubmit}>
                  Display on Graph
                </button>
              )}
            </div>
          )}
        </div>
        <div className="temperature-graph-container">
          <h2 className="description-text">Temperature Graph</h2>

          {graphData && graphData.length > 0 ? (
            <div className="temperature-graph-placeholder">
              <p>Graph goes here</p>
            </div>
          ) : (
            <p className="description-text">
              The graph will be displayed here once the temperatures are
              submitted.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
