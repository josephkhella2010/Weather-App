/* import { CiSearch } from "react-icons/ci";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeatherInfo } from "../../../store/ReduxSlices/CitySlice";
import { useEffect, useState } from "react";
import type { RootState } from "../../../store/StoreSlices/store";
const useStyles = createUseStyles({
  firstContainerMainContainer: {
    padding: "100px 30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "60px",
    alignItems: "center",
    "& h1": {
      color: "#ffffff",
    },
  },
  cityInputContainer: {
    width: "70%",
    height: "50px",
    backgroundColor: "#ffffff",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    boxSizing: "border-box",
    alignItems: "center",
  },
  cityInput: {
    width: "90%",
    height: "40px",
    border: "1px solid transparent",
    outline: "none",
    "&::placeholder": {
      fontStyle: "italic",
      color: "grey",
    },
  },
});
interface FirstContainerProps {
  getWeaterData: (cityName: string) => any;
}
export default function FirstContainer({ getWeaterData }: FirstContainerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { city } = useSelector((state: RootState) => state.CityStore);
  const handleSearch = async () => {
    if (!inputCity) return;
    const data = await getWeaterData(inputCity);
    if (data) {
      dispatch(setCity(inputCity));
      dispatch(setWeatherInfo(data));
    }
  };
  const [inputCity, setInputCity] = useState<string>(city || "");
  useEffect(() => {
    if (city) {
      handleSearch();
    }
  }, [city]);

  return (
    <div className={classes.firstContainerMainContainer}>
      <h1> Weather Forecast</h1>
      <div className={classes.cityInputContainer}>
        <input
          type="text"
          className={classes.cityInput}
          placeholder="Write a city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <CiSearch onClick={handleSearch} />
      </div>
    </div>
  );
}
 */
/* |||||||||||||||||||||||||||| */
/* 

import { CiSearch } from "react-icons/ci";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import {
  setCity,
  setIsCityCorrect,
  setWeatherInfo,
} from "../../../store/ReduxSlices/CitySlice";
import { useEffect, useState } from "react";
import type { RootState } from "../../../store/StoreSlices/store";
import { useSelector } from "react-redux";
import { getWeatherInfo } from "../../../utilities/getWeatherInfo";

const useStyles = createUseStyles({
  firstContainerMainContainer: {
    padding: "100px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    justifyContent: "center",
    "& h1": { color: "#fff" },
  },
  cityInputContainer: {
    width: "70%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "25px",
  },
  cityInput: {
    width: "90%",
    height: "40px",
    border: "1px solid transparent",
    outline: "none",
    "&::placeholder": { fontStyle: "italic", color: "grey" },
  },
});

interface FirstContainerProps {
  getWeaterData: (cityName: string) => any;
}

export default function FirstContainer({ getWeaterData }: FirstContainerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // read stored city
  const storedCity = localStorage.getItem("city") || "";
  const reduxCity = useSelector((state: RootState) => state.CityStore.city);
  const [inputCity, setInputCity] = useState(storedCity);


  // Fetch stored city on mount
  useEffect(() => {
    async function fetchStoredCity() {
      const cityToFetch = reduxCity || storedCity;
      if (!cityToFetch) return;

      const data = await getWeatherInfo(cityToFetch); // ✅ correct function
      if (!data) {
        dispatch(setCity(null));
        dispatch(setWeatherInfo(null));
        dispatch(setIsCityCorrect(false));
        localStorage.setItem("isCity", JSON.stringify(false));
        localStorage.removeItem("city");
        localStorage.removeItem("isCity");
        setInputCity("");
        return;
      }
      const dataInfo = data?.weather;

      dispatch(setWeatherInfo(dataInfo));
      dispatch(setCity(cityToFetch));
      dispatch(setIsCityCorrect(true));
      localStorage.setItem("isCity", JSON.stringify(true));
    }

    fetchStoredCity();
  }, [reduxCity, storedCity, dispatch]);

  // Async search with error handling
  async function handleSearch() {
    const cityName = inputCity.trim();
    if (!cityName) {
      dispatch(setCity(null));
      dispatch(setWeatherInfo(null));
      localStorage.removeItem("city");
      return;
    }

    const data = await getWeatherInfo(cityName); // ✅ correct function
    console.log("data", data);

    if (!data) {
      dispatch(setCity(null));
      dispatch(setWeatherInfo(null));
      dispatch(setIsCityCorrect(false));
      localStorage.setItem("isCity", JSON.stringify(false));
      setInputCity("");
      localStorage.removeItem("city");
      localStorage.removeItem("isCity");

      return;
    }
    const dataInfo = data?.weather;
    dispatch(setWeatherInfo(dataInfo));
    dispatch(setCity(cityName));
    dispatch(setIsCityCorrect(true));
    localStorage.setItem("isCity", JSON.stringify(true));
  }

  return (
    <div className={classes.firstContainerMainContainer}>
      <h1>Weather Forecast</h1>
      <div className={classes.cityInputContainer}>
        <input
          type="text"
          className={classes.cityInput}
          placeholder="Write a city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <CiSearch onClick={() => handleSearch()} />
      </div>
    </div>
  );
}
 */
import { CiSearch } from "react-icons/ci";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import RunnerWordSpan from "./RunnerWordSpan";

const useStyles = createUseStyles({
  firstContainerMainContainer: {
    padding: "100px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    justifyContent: "center",
  },
  cityInputContainer: {
    width: "70%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderRadius: "25px",
  },
  cityInput: {
    width: "90%",
    height: "40px",
    border: "1px solid transparent",
    outline: "none",
    "&::placeholder": { fontStyle: "italic", color: "grey" },
  },
  firstContainerMainContainerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      color: "#fff",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Exo 2', sans-serif",
    },
  },
});

interface FirstContainerProps {
  getWeaterData: (cityName: string) => any;
}

export default function FirstContainer({ getWeaterData }: FirstContainerProps) {
  const classes = useStyles();

  const [inputCity, setInputCity] = useState(
    JSON.parse(localStorage.getItem("city") || '""')
  );

  // search handler
  const handleSearch = () => {
    const cityName = inputCity.trim();
    if (cityName) {
      getWeaterData(cityName);
    } else {
      localStorage.removeItem("city");
      localStorage.setItem("isCity", JSON.stringify(false));
      getWeaterData("");
    }
  };

  return (
    <div className={classes.firstContainerMainContainer}>
      <div className={classes.firstContainerMainContainerHeader}>
        <h1>
          Weather Forecast <RunnerWordSpan />
        </h1>
      </div>

      <div className={classes.cityInputContainer}>
        <input
          type="text"
          className={classes.cityInput}
          placeholder="Write a city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <CiSearch onClick={handleSearch} />
      </div>
    </div>
  );
}
