/* const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
//###### API
app.use("/api/post/get-weather", require("./ApiRouter/PostWeather"));
app.use("/api/get/get-weather", require("./ApiRouter/getWeather"));
app.use("/api/get-weather-days", require("./ApiRouter/getWeatherDays"));
//############
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 */
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ######## API ROUTES ########
app.use("/api/post/get-weather", require("./ApiRouter/PostWeather"));
app.use("/api/get/get-weather", require("./ApiRouter/getWeather"));
app.use("/api/get-weather-days", require("./ApiRouter/getWeatherDays"));

// ######## Serve React Frontend ########
const buildPath = path.join(__dirname, "../frontend/weather-app/build");
app.use(express.static(buildPath));

// ######## SPA fallback ########
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ######## Start Server ########
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
