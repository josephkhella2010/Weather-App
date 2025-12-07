/* import { createUseStyles } from "react-jss";
import SecondContainer from "./SecondContainer";
import WeatherInfoContainer from "./WeatherInfoContainer";

const useStyles = createUseStyles({
  WeatherMainContainer: {
    overflowX: "hidden",
    width: "100%",
  },
  WeatherContainer: {
    display: "flex",
    width: "200%",
  },
  WeatherContainerMainSection: {
    width: "50%",
    flexShrink: 0,
  },
});
interface WeatherDetailsProps {
  isCityCorrect: boolean;
  storedCityCorrect: boolean;
}
export default function WeatherDetails({
  isCityCorrect,
  storedCityCorrect,
}: WeatherDetailsProps) {
  const classes = useStyles();

  return (
    <div className={classes.WeatherMainContainer}>
      <div
        className={classes.WeatherContainer}
        style={{
          transform:
            isCityCorrect || storedCityCorrect
              ? "translateX(-50%)"
              : "translateX(0%)",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className={classes.WeatherContainerMainSection}>
          <SecondContainer />
        </div>

        <div className={classes.WeatherContainerMainSection}>
          <WeatherInfoContainer />
        </div>
      </div>
    </div>
  );
}
 */
import { createUseStyles } from "react-jss";
import SecondContainer from "./SecondContainer";
import WeatherInfoContainer from "./WeatherInfoContainer";

const useStyles = createUseStyles({
  WeatherMainContainer: {
    overflowX: "hidden",
    width: "100%",
  },
  WeatherContainer: {
    display: "flex",
    width: "200%",
  },
  WeatherContainerMainSection: {
    width: "50%",
    flexShrink: 0,
  },
});

interface WeatherDetailsProps {
  isCityCorrect: boolean;
  storedCityCorrect: boolean;
}

export default function WeatherDetails({
  isCityCorrect,
  storedCityCorrect,
}: WeatherDetailsProps) {
  const classes = useStyles();

  const storedCity = sessionStorage.getItem("cityName");
  const hasStoredCity = Boolean(storedCity);

  // MAIN SWITCHING LOGIC
  const showSecond = !hasStoredCity || !isCityCorrect || !storedCityCorrect;

  return (
    <div className={classes.WeatherMainContainer}>
      <div
        className={classes.WeatherContainer}
        style={{
          transform: showSecond ? "translateX(0%)" : "translateX(-50%)",
          transition: "transform 0.7s ease",
        }}
      >
        {/* empty section*/}
        <div className={classes.WeatherContainerMainSection}>
          <SecondContainer />
        </div>

        {/* info section*/}
        <div className={classes.WeatherContainerMainSection}>
          <WeatherInfoContainer />
        </div>
      </div>
    </div>
  );
}
