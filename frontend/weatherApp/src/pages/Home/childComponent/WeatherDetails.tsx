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
        {/* First Section*/}
        <div className={classes.WeatherContainerMainSection}>
          <SecondContainer />
        </div>

        {/* Second Section */}
        <div className={classes.WeatherContainerMainSection}>
          <WeatherInfoContainer />
        </div>
      </div>
    </div>
  );
}
