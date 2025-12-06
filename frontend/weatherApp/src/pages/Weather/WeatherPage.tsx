import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterWeatherInfo,
  setCity,
  setFullForecast,
  setIsLoading,
} from "../../store/ReduxSlices/WeatherSlice";
import CheckboxContainer from "./childComponent/CheckboxContainer";
import FirstContainer from "./childComponent/FirstContainer";
import { getWeatherInfoDays } from "../../utilities/getWeatherInfoDays";
import { toast, ToastContainer } from "react-toastify";
import type { RootState } from "../../store/StoreSlices/store";
import WeatherInfoPage from "./childComponent/WeatherInfoPage";
import LoadingContainer from "../Home/childComponent/LoadingContainer";

const useStyles = createUseStyles({
  homePageWrapper: {
    width: "100%",
    backgroundImage: `url("/Foto/homeBackground.jpg")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100dvh",
    fontFamily: "'Exo 2', sans-serif",
  },
  mainContainer: {
    backgroundColor: "blue",
    padding: "10px",
  },
});

export default function WeatherPage() {
  const classes = useStyles();
  const { weatherInfo, isLoading } = useSelector(
    (state: RootState) => state.WeatherStore
  );
  const storagedName = sessionStorage.getItem("city")
    ? JSON.parse(sessionStorage.getItem("city")!)
    : "";

  const [inputVal, setInputVal] = useState<string>(storagedName);
  const [_writeInput, setWriteInput] = useState<string | null>(storagedName);
  const [checkVal, setCheckVal] = useState<string[]>([]);
  const dispatch = useDispatch();

  // Utility to get ISO date for a given day offset
  function getIsoDate(day: number) {
    const d = new Date();
    d.setDate(d.getDate() + day);
    return d.toISOString().split("T")[0];
  }

  // Convert date string to header name
  function getHeaderName(date: string) {
    switch (date) {
      case getIsoDate(0):
        return "Today";
      case getIsoDate(1):
        return "Tomorrow";
      case getIsoDate(2):
        return "In 2 Days after";
      case getIsoDate(3):
        return "In 3 Days after";
      case getIsoDate(4):
        return "In 4 Days after";
      default:
        return date;
    }
  }

  // Handle search button
  async function handleBtn() {
    /*  if (!inputVal) return;
    try {
      const weatherFunc = await getWeatherInfoDays(inputVal);
      const convertedDate = weatherFunc?.forecast.map((item: any) => ({
        ...item,
        dt_txt: item.dt_txt.split(" ")[0], // only date
      }));

      // Save full forecast and initially display everything
      dispatch(setFullForecast(convertedDate));
      dispatch(filterWeatherInfo(checkVal)); // filter if checkboxes selected
      dispatch(setCity(inputVal));
      setWriteInput(inputVal);
      setInputVal("");
    } catch (error) {
      console.log("error", error);
    } */
  }

  // Handle checkbox change
  /*   function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked, value } = e.target;
    let newVal: string[] = [...checkVal];
    if (checked) {
      newVal.push(value);
    } else {
      newVal = newVal.filter((i) => i !== value);
    }
    setCheckVal(newVal);
    dispatch(filterWeatherInfo(newVal));
  } */
  /* 
  async function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked, value } = e.target;
    let newVal: string[] = [...checkVal];

    if (checked) {
      newVal.push(value);

      if (!inputVal) {
        toast.error("Please enter a city first!");

        return;
      }
      dispatch(setIsLoading(true));
      try {
        const weatherFunc = await getWeatherInfoDays(inputVal);
        if (!weatherFunc || !weatherFunc.forecast) {
          return null;
        }
        const convertedDate = weatherFunc?.forecast.map((item: any) => ({
          ...item,
          dt_txt: item.dt_txt.split(" ")[0],
        }));

        dispatch(setFullForecast(convertedDate));
        dispatch(setCity(inputVal));
        setWriteInput(inputVal);
      } catch (error) {
        console.log("error", error);
      } finally {
        dispatch(setIsLoading(false));
      }
    } else {
      newVal = newVal.filter((i) => i !== value);
    }

    setCheckVal(newVal);
    dispatch(filterWeatherInfo(newVal));
  } */

  async function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked, value } = e.target;
    const newVal = checked
      ? [...checkVal, value]
      : checkVal.filter((v) => v !== value);

    setCheckVal(newVal);
    handleWeather(newVal);
  }
  async function handleWeather(newVal: any) {
    if (!inputVal) {
      toast.error("Please enter a city first!");
      return;
    }

    dispatch(setIsLoading(true));
    try {
      const weatherFunc = await getWeatherInfoDays(inputVal);

      if (!weatherFunc || !weatherFunc.forecast) {
        return;
      }

      const convertedDate = weatherFunc.forecast.map((item: any) => ({
        ...item,
        dt_txt: item.dt_txt.split(" ")[0],
      }));

      dispatch(setFullForecast(convertedDate));
      dispatch(setCity(inputVal));
    } catch (error) {
      toast.error("Failed to fetch weather data");
      console.log("error", error);
    } finally {
      dispatch(setIsLoading(false));
    }
    dispatch(filterWeatherInfo(newVal));
  }

  useEffect(() => {
    if (inputVal === "") {
      setCheckVal([]);
      dispatch(filterWeatherInfo([]));
    }
  }, [inputVal, dispatch]);

  /*  */
  function groupWeatherByDateSimple(weatherInfo: any[]) {
    const grouped: { weatherDate: string; weatherData: any[] }[] = [];

    weatherInfo.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      let existing = grouped.find((g) => g.weatherDate === date);
      if (existing) {
        existing.weatherData.push(item);
      } else {
        grouped.push({ weatherDate: date, weatherData: [item] });
      }
    });

    return grouped;
  }

  /* //////////////////////////////////////////////// */

  return (
    <div className={classes.homePageWrapper}>
      {isLoading ? <LoadingContainer /> : ""}
      <ToastContainer />
      <FirstContainer
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleBtn={handleBtn}
        setCheckVal={setCheckVal}
        setWriteInput={setWriteInput}
      />

      <CheckboxContainer
        checkVal={checkVal}
        handleCheckbox={handleCheckbox}
        getIsoDate={getIsoDate}
      />
      <WeatherInfoPage
        weatherInfo={weatherInfo}
        groupWeatherByDateSimple={groupWeatherByDateSimple}
        getHeaderName={getHeaderName}
      />
    </div>
  );
}

{
  /*
  return (
    <div className={classes.homePageWrapper}>
      <ToastContainer />
      <FirstContainer inputVal={inputVal} setInputVal={setInputVal} />
      <button onClick={handleBtn}>Search</button>
      <h1>{writeInput}</h1>

      <CheckboxContainer
        checkVal={checkVal}
        handleCheckbox={handleCheckbox}
        getIsoDate={getIsoDate}
      />

      <div className={classes.mainContainer}>
         {Object.keys(groupedByDate).length > 0 ? (
          Object.keys(groupedByDate).map((date) => (
            <div key={date}>
              <h1>{getHeaderName(date)}</h1>
              {groupedByDate[date].map((item: any, index: number) => {
                const temp = Math.ceil(Number(item.main?.temp.toFixed(1)));
                const tempMax = Math.ceil(
                  Number(item.main.temp_max.toFixed(1))
                );
                const tempMin = Math.ceil(
                  Number(item.main?.temp_min.toFixed(1))
                );
                const windSpeed = item.wind.speed.toFixed(1);

                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: "10px",
                      border: "1px solid white",
                      padding: "10px",
                    }}
                  >
                    <p>Date: {item.dt_txt}</p>
                    <p>Temperature: {temp}°C</p>
                    <p>Weather: {item.weather?.[0]?.description}</p>
                    <p>Status: {item.weather?.[0]?.main}</p>
                    <p>Temperature-max: {tempMax}°C</p>
                    <p>Temperature-min: {tempMin}°C</p>
                    <p>Wind Speed: {windSpeed} %</p>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <p>Please select a day to see the forecast.</p>
        )} 
        
      </div>
    </div>
  );
}
  */
}
