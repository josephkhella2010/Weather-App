const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { city } = req.body;

  try {
    if (!city) {
      return res.status(401).json({ sms: "please enter city name" });
    }
    // 2. Build URL for OpenWeatherMap
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // 3. Fetch weather from OpenWeather
    const response = await axios.get(url);

    // 4. Send weather data to frontend
    return res.status(200).json({
      success: true,
      weather: response.data,
    });
  } catch (error) {
    console.log(error);

    // If OpenWeather returns an error (wrong city, etc)
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        error: error.response.data,
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});
module.exports = router;
