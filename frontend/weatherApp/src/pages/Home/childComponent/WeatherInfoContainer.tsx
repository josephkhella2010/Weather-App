import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/StoreSlices/store";
import ClockTime from "./ClockTime";

const useStyles = createUseStyles({
  "@global": {
    "@import": [
      'url("https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap")',
    ],
  },
  SecondContainerMainContainer: {
    padding: "100px 100px",
    "@media (max-width: 768px)": {
      padding: "100px 30px",
    },
  },
  SecondContainerSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  SecondContainerLeftContent: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    backgroundColor: "#00000088",
    padding: " 50px 30px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    "& h1": {
      color: "#ffffff",
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: "700x",
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  SecondContainerLeftContentMiddleContent: {
    display: "flex",
    gap: "50px",
    "& p": {
      color: "#ffffff",
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: "700x",
    },
  },
  SecondContainerLeftContentLowerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    backgroundColor: "#ffffffc0",
    /*     width: "fit-content",
     */ padding: "30px",
    borderRadius: "15px",
    width: "100%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  SecondContainerLeftContentLowerContentLeft: {
    width: "100%",
    /*     backgroundColor: "yellow",
     */ display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",

    "& img": {
      width: "50px",
      objectFit: "cover",
      aspectRatio: "1/1",
      objectPosition: "top",
    },
  },
  SecondContainerLeftContentLowerContentRight: {
    width: "100%",
    /*     backgroundColor: "yellow",
     */ display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& img": {
      width: "50px",
      height: "auto",
      objectFit: "cover",
      aspectRatio: "1/1",
      objectPosition: "top",
    },
  },
  SecondContainerRightContent: {
    fontFamily: "'Exo 2', sans-serif",
    width: "40%",
    height: "fit-content",
    padding: "25px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    background:
      "linear-gradient(135deg, rgba(76, 15, 101, 0.83), rgba(120, 40, 160, 0.83))",
    "& img": {
      width: "80%",
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  SecondContainerRightContentUpperContent: {
    backgroundColor: "rgba(40, 17, 49, 0.83)",
    padding: "10px 20px",
    borderRadius: "15px",
    width: "fit-content",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SecondContainerRightContentImgContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    "& h5": {
      fontSize: "20px",
      color: "#ffffff",
      fontWeight: "bolder",
    },
    "& img": {
      borderRadius: "10px",
      backgroundColor: "transparent",
      width: "100%",
      objectFit: "cover",
      aspectRadio: "auto 1920 / 1080",
      height: "auto",
      /*       mixBlendMode: "multiply",
       */ border: "none",
    },
  },
  SecondContainerRightContentSecondContent: {
    display: "flex",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "700",
    color: "#ffffff",
  },
  SecondContainerRightContentThirdContent: {
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
    gap: "30px",
  },
});
export default function WeatherInfoContainer() {
  const classes = useStyles();
  const { city, weatherInfo } = useSelector(
    (state: RootState) => state.CityStore
  );
  const tempC = Math.floor(weatherInfo?.main?.temp.toFixed(1));
  const tempMinC = Math.floor(weatherInfo?.main?.temp_min.toFixed(1));
  const tempMaxC = Math.floor(weatherInfo?.main?.temp_max.toFixed(1));

  //////
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  /////

  function getDate() {
    const date = new Date();

    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const fullDate = `${dayName}, ${dayNumber} ${month} ${year}`;
    return fullDate;
  }

  function getTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    /* 
    //const ampm = hours >= 12 ? "PM" : "AM";let displayHour = hours === 24 || hours === 0 ? 0 : hours;
        const Hours = hours > 12 ? hours - 12 : hours;
    const paddedHours = Hours < 10 ? `0${Hours}` : Hours; */
    let displayHour = hours === 24 || hours === 0 ? 0 : hours;
    const paddedHours = displayHour < 10 ? `0${displayHour}` : displayHour;
    const coverSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const covertMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const fullTime = `${paddedHours}: ${covertMinutes}: ${coverSeconds}  `;

    return fullTime;
  }

  const weatherConditions = weatherInfo?.weather[0]?.main;

  function getIcon() {
    let iconName = "";

    switch (weatherConditions) {
      case "Clear":
        iconName = "Foto/clear.png";
        break;

      case "Rain":
        iconName = "Foto/rain.jpg";
        break;

      case "Clouds":
        iconName = "Foto/cloudy.png";
        break;

      case "Snow":
        iconName = "Foto/snow.jpg";
        break;

      case "Mist":
      case "Fog":
      case "Haze":
      case "Smoke":
        iconName = "Foto/mist.jpg";
        break;

      default:
        iconName = "Foto/clear.png";
        break;
    }

    return iconName;
  }
  return (
    <div className={classes.SecondContainerMainContainer}>
      <div className={classes.SecondContainerSection}>
        <div className={classes.SecondContainerLeftContent}>
          <ClockTime />
          <h1>
            {city
              ? city.charAt(0).toLocaleUpperCase() +
                city.slice(1).toLocaleLowerCase()
              : ""}
          </h1>
          <div className={classes.SecondContainerLeftContentMiddleContent}>
            <p>{getDate()}</p>
            <p>Update As of {getTime()}</p>
          </div>
          <div className={classes.SecondContainerLeftContentLowerContent}>
            <div className={classes.SecondContainerLeftContentLowerContentLeft}>
              <img src="/Foto/wind.png" alt="not found" />
              <p>Wind {weatherInfo?.wind?.speed} km/h</p>
            </div>
            {weatherInfo?.rain?.["1h"] ? (
              <div
                className={classes.SecondContainerLeftContentLowerContentRight}
              >
                <img src="/Foto/rain.jpg" alt="not found" />
                <p> Rain {weatherInfo?.rain?.["1h"]} %</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={classes.SecondContainerRightContent}>
          <div className={classes.SecondContainerRightContentUpperContent}>
            <p>Today</p>
          </div>
          <div className={classes.SecondContainerRightContentImgContent}>
            <img src={getIcon()} alt="not found" />
            <h5>{weatherInfo?.weather[0]?.main}</h5>
          </div>
          <div className={classes.SecondContainerRightContentSecondContent}>
            <p>Temp:{tempC} °C</p>
          </div>
          <div className={classes.SecondContainerRightContentThirdContent}>
            <p> Min-temp: {tempMinC} °C</p>
            <p>Max-temp: {tempMaxC} °C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
