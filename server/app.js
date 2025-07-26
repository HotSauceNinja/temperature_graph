import express from "express";
import { findClosestToZero } from "./utils/findClosestToZero.js";
import { validateTemperatures } from "./utils/validateTemperatures.js";

const app = express();
const PORT = 3001;
app.use(express.json());

app.post("/api/temperatures", async (req, res) => {
  try {
    const { submittedTemperatures } = req.body;
    const temperaturesValid = validateTemperatures(submittedTemperatures);
    if (!temperaturesValid) {
      return res.status(400).send({
        error: true,
        errorMessage: "Invalid temperatures format. Please check your input.",
      });
    }

    const temperatureClosestToZero = findClosestToZero(
      submittedTemperatures.split(" ")
    );
    console.log("Temperature closest to zero:", temperatureClosestToZero);
    res.send({ temperatureClosestToZero });
  } catch (error) {
    res.status(404).send({
      error: true,
      errorMessage: `Something went wrong: ${error.message}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
