/* import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  word: {
    position: "absolute",
    animation: "$slideUp 3s ease-in-out forwards",
  },

  "@keyframes slideUp": {
    "0%": {
      transform: "translateY(100%)",
      opacity: 0,
    },
    "20%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "60%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "80%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(-100%)",
      opacity: 0,
    },
  },
});

export default function RunnerWordSpan() {
  const classes = useStyles();

  const weatherConditions = [
    "sunny",
    "clear",
    "cloudy",
    "overcast",
    "rain",
    "showers",
    "storm",
    "thunderstorm",
    "snow",
    "sleet",
    "fog",
    "mist",
    "windy",
    "hail",
    "drizzle",
    "partly cloudy",
  ];
  const [currentWord, setCurrentWord] = useState<number>(0);
  function getArrRunner() {
    if (currentWord < weatherConditions.length - 1) {
      setCurrentWord((prev) => prev + 1);
    } else {
      setCurrentWord(0);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getArrRunner();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <span className={classes.word}>
      {weatherConditions[currentWord].charAt(0).toLocaleUpperCase() +
        weatherConditions[currentWord].slice(1).toLowerCase()}
    </span>
  );
}
 */
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wordContainer: {
    position: "relative",
    overflow: "hidden",
    display: "inline-block",
    minWidth: "200px",
  },
  word: {
    display: "inline-block",
    animation: "$slideUp 2s ease-in-out forwards",
    fontSize: "25px",
    whiteSpace: "nowrap",
    position: "relative",
    marginLeft: "10px",
    color: "yellow",
  },
  "@keyframes slideUp": {
    "0%": {
      transform: "translateY(100%)",
      opacity: 0,
    },
    "20%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "60%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "80%": {
      transform: "translateY(0%)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(-100%)",
      opacity: 0,
    },
  },
});

export default function RunnerWordSpan() {
  const classes = useStyles();

  const weatherConditions = [
    "sunny",
    "clear",
    "cloudy",
    "overcast",
    "rain",
    "showers",
    "storm",
    "thunderstorm",
    "snow",
    "sleet",
    "fog",
    "mist",
    "windy",
    "hail",
    "drizzle",
    "partly cloudy",
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) =>
        prev < weatherConditions.length - 1 ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const word = weatherConditions[currentWord];
  const formatted = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return (
    <li className={classes.wordContainer}>
      {"    "}
      <span key={currentWord} className={classes.word}>
        {formatted}
      </span>
    </li>
  );
}
