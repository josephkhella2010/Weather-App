const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { city } = req.query;
  try {
    if (!city) {
      return res.status(404).json("Please EnterCity");
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);
    return res.status(200).json({
      success: true,
      forecast: response.data.list,
      city: response.data.city,
    });
  } catch (error) {
    console.error(error.response?.data || error.message || error);

    return res.status(error.response?.status || 500).json({
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Internal server error",
    });
  }
});

module.exports = router;
