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
/* import { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wordContainer: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    backgroundColor: "orangered",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Exo 2', sans-serif",
    fontWeight: "700",
    fontSize: "30px",
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      fontSize: "20px",
    },
  },
  word: {
    display: "inline-block",
    animation: "$slideUp 2s ease-in-out forwards",
    fontSize: "30px",
    whiteSpace: "nowrap",
    position: "relative",
    color: "yellow",
    marginLeft: "5px",
    textAlign: "left",
    backgroundColor: "blue",
    "@media (max-width: 768px)": {
      textAlign: "center",
      display: "block",
    },
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
  const spanRef = useRef<HTMLDivElement | null>(null);
  const [spanWidth, setSpanWidth] = useState<number>(0);

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
  /*   useEffect(() => {
    const handleResize = () => {
      if (spanRef.current) {
        const width = spanRef.current.offsetWidth;
        setSpanWidth(width);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentWord]); 
  

  return (
    <li className={classes.wordContainer}>
      Weather Forecast{" "}
      <span
        key={currentWord}
        className={classes.word}
        ref={spanRef}
        style={{
          width: spanWidth ? `${spanWidth}px` : "auto",
        }}
      >
        {formatted}
      </span>
    </li>
  );
}
 */
/* 
import { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wordMainContainer: {
    backgroundColor: "ButtonBorder",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wordContainer: {
    width: "fit-content",
    position: "relative",
    display: "flex",
    overflow: "hidden",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Exo 2', sans-serif",
    fontWeight: "700",
    fontSize: "30px",
    gap: "10px",
    background: "red",
    "& p": {
      background: "green",
    },
    "@media (max-width: 768px)": {
      display: "flex",
      fontSize: "15px",
    },
  },
  word: {
    display: "inline-block",
    animation: "$slideUp 2s ease-in-out forwards",
    fontSize: "30px",
    position: "relative",
    color: "yellow",
    "@media (max-width: 768px)": {
      fontSize: "15px",
    },
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
  const spanRef = useRef<HTMLDivElement | null>(null);
  const [headerWidth, setHeaderWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) =>
        prev < weatherConditions.length - 1 ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  console.log(headerWidth);

  const word = weatherConditions[currentWord];
  const formatted = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  useEffect(() => {
    if (spanRef.current) {
      setHeaderWidth(spanRef.current.offsetWidth);
    }
  });
  return (
    <div className={classes.wordMainContainer}>
      <li className={classes.wordContainer}>
        <p ref={spanRef} style={{ width: `${headerWidth}` }}>
          Weather Forecast{" "}
        </p>
        <span key={currentWord} className={classes.word}>
          {formatted}
        </span>
      </li>
    </div>
  );
}
 */
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    right: "30px",
  },

  container: {
    position: "relative",
    fontFamily: "'Exo 2', sans-serif",
    fontWeight: 700,
    fontSize: "30px",
    padding: "10px 0",
    "@media (max-width: 768px)": {
      fontSize: "15px",
    },
  },
  header: {
    color: "#ffffff",
  },
  wordWrapper: {
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "1em",
  },
  word: {
    display: "inline-block",
    whiteSpace: "nowrap",
    color: "yellow",
    marginLeft: "10px",
    animation: "$slideUp 2s ease-in-out forwards",
    position: "absolute",
    "@media (max-width: 768px)": {
      fontSize: "15px",
    },
  },
  "@keyframes slideUp": {
    "0%": { transform: "translateY(100%)", opacity: 0 },
    "20%": { transform: "translateY(0%)", opacity: 1 },
    "60%": { transform: "translateY(0%)", opacity: 1 },
    "80%": { transform: "translateY(0%)", opacity: 1 },
    "100%": { transform: "translateY(-100%)", opacity: 0 },
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
  const formatted = word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <span className={classes.header}>Weather Forecast</span>
        <div className={classes.wordWrapper}>
          <span key={currentWord} className={classes.word}>
            {formatted}
          </span>
        </div>
      </div>
    </div>
  );
}
