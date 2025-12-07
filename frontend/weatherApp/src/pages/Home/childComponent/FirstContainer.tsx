import { CiSearch } from "react-icons/ci";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import RunnerWordSpan from "./RunnerWordSpan";

const useStyles = createUseStyles({
  firstContainerMainContainer: {
    padding: "130px 30px 100px 30px",
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
    cursor: "pointer",
  },
  cityInput: {
    width: "90%",
    height: "40px",
    border: "1px solid transparent",
    outline: "none",
    cursor: "pointer",
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
    JSON.parse(sessionStorage.getItem("cityName") || '""')
  );

  // search handler
  const handleSearch = () => {
    const cityName = inputCity.trim();
    if (cityName) {
      getWeaterData(cityName);
    } else {
      sessionStorage.removeItem("cityName");
      localStorage.setItem("isCity", JSON.stringify(false));
      getWeaterData("");
    }
  };

  return (
    <div className={classes.firstContainerMainContainer}>
      <RunnerWordSpan />

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
