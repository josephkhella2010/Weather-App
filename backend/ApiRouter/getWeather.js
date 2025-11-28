const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { city } = req.query;
  try {
    if (!city) {
      return res.status(400).json({ sms: "Please enter city name" });
    }
    // 2. Build URL for OpenWeatherMap
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // 3. Fetch weather from OpenWeather
    const response = await axios.get(url);
    return res.json({
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
