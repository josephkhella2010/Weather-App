import { createUseStyles } from "react-jss";
import SecondContainer from "./SecondContainer";
import WeatherInfoContainer from "./WeatherInfoContainer";

const useStyles = createUseStyles({
  WeatherMainContainer: {
    overflowX: "hidden", // hide overflow for smooth slide
    width: "100%",
  },
  WeatherContainer: {
    display: "flex",
    width: "200%", // double width to hold both sections
  },
  WeatherContainerMainSection: {
    width: "50%", // each section full viewport width
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
        {/* First Section: invalid city */}
        <div className={classes.WeatherContainerMainSection}>
          <SecondContainer />
        </div>

        {/* Second Section: valid city */}
        <div className={classes.WeatherContainerMainSection}>
          <WeatherInfoContainer />
        </div>
      </div>
    </div>
  );
}
