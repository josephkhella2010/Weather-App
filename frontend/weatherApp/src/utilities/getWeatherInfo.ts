import axios from "axios";
import { toast } from "react-toastify";

export const getWeatherInfo = async (cityName: string) => {
  if (!cityName) {
    toast.error("please enter a city name");
    return null;
  }
  try {
    const response = await axios.get(
      `https://weather-app-backend-1j65.onrender.com/api/get/get-weather?city=${cityName}`
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
