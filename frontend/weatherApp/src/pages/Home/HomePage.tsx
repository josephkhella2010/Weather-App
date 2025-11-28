import { createUseStyles } from "react-jss";
import FirstContainer from "./childComponent/FirstContainer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/StoreSlices/store";
import { ToastContainer } from "react-toastify";
import {
  setWeatherInfo,
  setIsCityCorrect,
  setCity,
} from "../../store/ReduxSlices/CitySlice";
import { useEffect } from "react";
import { getWeatherInfo } from "../../utilities/getWeatherInfo";
import WeatherDetails from "./childComponent/WeatherDetails";

const useStyles = createUseStyles({
  homePageWrapper: {
    width: "100%",
    backgroundImage: `url("/Foto/homeBackground.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isCityCorrect } = useSelector((state: RootState) => state.CityStore);

  const storedCity = localStorage.getItem("city") || null;
  const storedCityCorrect = JSON.parse(
    localStorage.getItem("isCity") || "false"
  );

  const getWeaterData = async (cityName: string) => {
    const data = await getWeatherInfo(cityName);

    if (!data) {
      dispatch(setCity(null));
      dispatch(setWeatherInfo(null));
      dispatch(setIsCityCorrect(false));
      localStorage.removeItem("city");
      localStorage.setItem("isCity", JSON.stringify(false));
      return null;
    }

    dispatch(setCity(cityName));
    dispatch(setWeatherInfo(data.weather));
    dispatch(setIsCityCorrect(true));
    localStorage.setItem("city", JSON.stringify(cityName));
    localStorage.setItem("isCity", JSON.stringify(true));
    return data.weather;
  };

  useEffect(() => {
    if (storedCity) {
      const cityName = JSON.parse(storedCity);
      getWeaterData(cityName);
    }
  }, []);

  return (
    <div className={classes.homePageWrapper}>
      <ToastContainer />

      <FirstContainer getWeaterData={getWeaterData} />

      <WeatherDetails
        isCityCorrect={isCityCorrect}
        storedCityCorrect={storedCityCorrect}
      />
    </div>
  );
}
