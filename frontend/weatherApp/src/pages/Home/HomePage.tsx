import { createUseStyles } from "react-jss";
import FirstContainer from "./childComponent/FirstContainer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/StoreSlices/store";
import { ToastContainer } from "react-toastify";
import {
  setWeatherInfo,
  setIsCityCorrect,
  setCity,
  setIsLoading,
} from "../../store/ReduxSlices/CitySlice";
import { useEffect } from "react";
import { getWeatherInfo } from "../../utilities/getWeatherInfo";
import WeatherDetails from "./childComponent/WeatherDetails";
import LoadingContainer from "./childComponent/LoadingContainer";

const useStyles = createUseStyles({
  homePageWrapper: {
    width: "100%",
    backgroundImage: `url("/Foto/weatherOne.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, isCityCorrect } = useSelector(
    (state: RootState) => state.CityStore
  );

  const storedCity = sessionStorage.getItem("cityName") || null;
  const storedCityCorrect = JSON.parse(
    localStorage.getItem("isCity") || "false"
  );

  const getWeaterData = async (cityName: string) => {
    dispatch(setIsLoading(true));

    try {
      const data = await getWeatherInfo(cityName);

      if (!data) {
        dispatch(setCity(null));
        dispatch(setWeatherInfo(null));
        dispatch(setIsCityCorrect(false));
        sessionStorage.removeItem("cityName");
        localStorage.setItem("isCity", JSON.stringify(false));
        return null;
      }
      if (!cityName) {
        sessionStorage.removeItem("cityName");
      }

      dispatch(setCity(cityName));
      dispatch(setWeatherInfo(data.weather));
      dispatch(setIsCityCorrect(true));
      sessionStorage.setItem("cityName", JSON.stringify(cityName));
      localStorage.setItem("isCity", JSON.stringify(true));

      return data.weather;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (storedCity) {
      const cityName = JSON.parse(storedCity);
      getWeaterData(cityName);
    }
  }, []);

  return (
    <div className={classes.homePageWrapper}>
      {isLoading ? <LoadingContainer /> : ""}
      <ToastContainer />

      <FirstContainer getWeaterData={getWeaterData} />

      <WeatherDetails
        isCityCorrect={isCityCorrect}
        storedCityCorrect={storedCityCorrect}
      />
    </div>
  );
}
