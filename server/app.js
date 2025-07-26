const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/api/temperatures", async (req, res) => {
  try {
    const { submittedTemperatures } = req.body;
    const temperaturesArray = submittedTemperatures.split(" ");

    console.log("temperaturesArray to be returned", temperaturesArray);
    res.send({ temperaturesArray });
  } catch (error) {
    res.status(404).send(`Something went wrong: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
