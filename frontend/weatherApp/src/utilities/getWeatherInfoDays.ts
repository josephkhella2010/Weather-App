import axios from "axios";
import { toast } from "react-toastify";
export const getWeatherInfoDays = async (cityName: string) => {
  try {
    if (!cityName) {
      toast.error("Please enter A city name");
      return;
    }
    /*   const response = await axios.get(
      `http://localhost:3700/api/get-weather-days?city=${cityName}`
    ); */
    const response = await axios.get(
      `https://weather-app-backend-1j65.onrender.com/api/get-weather-days?city=${cityName}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error);

    if (error.response) {
      toast.error(error.response.data?.error?.message || "City not found");
    } else {
      toast.error("Server error");
    }

    return null;
  }
};
