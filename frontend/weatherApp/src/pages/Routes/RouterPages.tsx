import { Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import WeatherPage from "../Weather/WeatherPage";
import NavigationPage from "../navigation/NavigationPage";

export default function RouterPages() {
  return (
    <div>
      <NavigationPage />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </div>
  );
}
