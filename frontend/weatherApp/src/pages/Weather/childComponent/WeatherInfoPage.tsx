import { createUseStyles } from "react-jss";
import ClockTime from "../../Home/childComponent/ClockTime";

const useStyles = createUseStyles({
  SecondContainerWrapper: {
    padding: "100px 30px",
    /*     backgroundColor: "orangered",
     */ display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "70px",
    justifyContent: "center",
  },
  dateHeader: {
    color: "#ffffff",
    marginBottom: "30px",
    width: "90%",
  },
  SecondContainerMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 768px)": {},
  },
  SecondContainerSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    alignItems: "center",
    width: "90%",
    /*     backgroundColor: "rgba(255, 255, 255, 0.3)",
     */ padding: "20px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    marginBottom: "50px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  SecondContainerLeftContent: {
    width: "70%",
    /*  display: "flex",
    flexDirection: "column",
    gap: "50px", */
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    padding: " 50px 30px",
    borderRadius: "16px",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    color: "#ffffff",
    backdropFilter: "blur(10px)",
    backgroundColor: "#00000094",
    "& h1": {
      color: "#ffffff",
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: "700x",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      gridTemplateColumns: "repeat(1, 1fr)",
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
    width: "fit-content",
    padding: "30px",
    borderRadius: "15px",
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

interface WeatherInfoPageProps {
  weatherInfo: any;
  groupWeatherByDateSimple: (weatherInfo: any) => void;
  getHeaderName: (date: string) => string;
}
export default function WeatherInfoPage({
  weatherInfo,
  groupWeatherByDateSimple,
  getHeaderName,
}: WeatherInfoPageProps) {
  const classes = useStyles();
  const gropArray: any = groupWeatherByDateSimple(weatherInfo);
  const storagedName = sessionStorage.getItem("city")
    ? JSON.parse(sessionStorage.getItem("city")!)
    : "";
  const formattedName =
    storagedName.charAt(0).toUpperCase() + storagedName.slice(1).toLowerCase();

  function getIcon(condition: string) {
    let iconName = "";

    switch (condition) {
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
    <>
      <div className={classes.SecondContainerWrapper}>
        <ClockTime />
        {weatherInfo && weatherInfo.length > 0 ? (
          gropArray.map((group: any) => (
            <div
              key={group.weatherDate}
              className={classes.SecondContainerMainContainer}
            >
              {/* Day Header */}
              <h3 className={classes.dateHeader}>
                {getHeaderName(group.weatherDate)}
              </h3>

              {/* All 3-hour forecast slots for this day */}
              {group.weatherData.map((item: any, index: number) => {
                const temp = Math.ceil(Number(item.main?.temp.toFixed(1)));
                const tempMax = Math.ceil(
                  Number(item.main.temp_max.toFixed(1))
                );
                const tempMin = Math.ceil(
                  Number(item.main?.temp_min.toFixed(1))
                );
                const windSpeed = item.wind.speed.toFixed(1);
                console.log(item?.weather[0]?.main);

                return (
                  <div
                    key={`${group.weatherDate}-${index}`}
                    className={classes.SecondContainerSection} // could be styled as glass card
                  >
                    {/* Left Content */}
                    <div className={classes.SecondContainerLeftContent}>
                      <p>Date/Time: {item.dt_txt}</p>
                      <p>Temperature: {temp}°C</p>
                      <p>Weather: {item.weather?.[0]?.description}</p>
                      <p>Status: {item.weather?.[0]?.main}</p>
                      <p>Temp-Max: {tempMax}°C</p>
                      <p>Temp-Min: {tempMin}°C</p>
                      <p>Wind Speed: {windSpeed} km/h</p>
                      {item.rain?.["1h"] && <p>Rain: {item.rain["1h"]}%</p>}
                    </div>

                    {/* Right Content */}
                    <div className={classes.SecondContainerRightContent}>
                      <div
                        className={
                          classes.SecondContainerRightContentUpperContent
                        }
                      >
                        <p>Summary</p>
                      </div>
                      <div
                        className={
                          classes.SecondContainerRightContentImgContent
                        }
                      >
                        <img
                          src={getIcon(item?.weather[0]?.main)}
                          alt="not found"
                        />
                        <h5>{formattedName}</h5>
                        <h5>{item.weather?.[0]?.main}</h5>
                      </div>
                      <div
                        className={
                          classes.SecondContainerRightContentSecondContent
                        }
                      >
                        <p>Temp: {temp} °C</p>
                      </div>
                      <div
                        className={
                          classes.SecondContainerRightContentThirdContent
                        }
                      >
                        <p>Min: {tempMin} °C</p>
                        <p>Max: {tempMax} °C</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <p>Please select a day to see the forecast.</p>
        )}
      </div>
    </>
  );
}
