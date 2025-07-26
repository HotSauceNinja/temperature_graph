import React, { useState } from "react";
import "./App.css";

function App() {
  const [submittedTemperatures, setSubmittedTemperatures] = useState([]);
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.text())
  //     .then((data) => setMessage(data))
  //     .catch((err) => console.log('Fetch error:', err));
  // }, []);

  function handleSubmit() {
    console.log("Submitted temperatures handle submit called");
  }

  console.log("submittedTemperatures", submittedTemperatures);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Temperature Recorder</h1>
      </header>
      <div className="app-content">
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
          onChange={(e) => setSubmittedTemperatures(e.target.value)}
        />
        {submittedTemperatures && submittedTemperatures.length > 0 && (
          <div>
            <p className="info-text">
              You have entered: {submittedTemperatures}
            </p>
            <button className="primary-button" onClick={handleSubmit}>
              Submit temperatures
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
