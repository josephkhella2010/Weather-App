/* import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  LoadingMainContainer: {
    backgroundColor: "black",
    width: "100%",
    position: "fixed",
    height: "100%",
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
  },

  dotsContainer: {
    position: "relative",
    width: "120px",
    height: "120px",
    animation: "$spin 1s linear infinite",
  },

  dots: {
    display: "block",
    width: "8px",
    height: "22px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    opacity: 0.2,
  },

  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});
export default function LoadingContainer() {
  const classes = useStyles();
  const dotsArr = Array(12)
    .fill(0)
    .map((_, i) => i + 1);
  console.log(dotsArr);

  return (
    <div className={classes.LoadingMainContainer}>
      <div>
        <p>loading</p>
        <div className={classes.dotsContainer}>
          {dotsArr &&
            dotsArr.map((_, i) => {
              return (
                <span
                  className={`${classes.dots}`}
                  key={i}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${i * 30}deg) translate(40px)`,
                  }}
                ></span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
 */
import { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/StoreSlices/store";

const useStyles = createUseStyles({
  LoadingMainContainer: {
    backgroundColor: "#000000a6",
    width: "100%",
    position: "fixed",
    height: "100%",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    top: 0,
    left: 0,
    flexDirection: "column",
    gap: "10px",
    "& p": {
      fontSize: "30px",
      fontFamily: "",
    },
  },

  spinnerWrap: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },

  ring: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  bar: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transformOrigin: "center",
    width: 10,
    height: 28,
    borderRadius: 10,
    backgroundColor: "#edededff",
    marginTop: -14,
    marginLeft: -5,
    animationName: "$fade",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },

  "@keyframes fade": {
    "0%": { opacity: 1 },
    "40%": { opacity: 0.15 },
    "100%": { opacity: 0.15 },
  },
});

export default function LoadingSpinner() {
  const { isLoading } = useSelector((state: RootState) => state.CityStore);
  const classes = useStyles();

  const count = 12;
  const bars = Array.from({ length: count });

  const duration = 1.2;
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className={classes.LoadingMainContainer}>
      <p>loading</p>
      <div className={classes.spinnerWrap} aria-hidden>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "transparent",
            zIndex: 2,
          }}
        />
        <div className={classes.ring}>
          {bars.map((_, i) => {
            const angle = (360 / count) * i;
            const radius = 30;
            const delay = -(duration / count) * i;
            return (
              <div
                key={i}
                className={classes.bar}
                style={{
                  transform: `rotate(${angle}deg) translate(0, -${radius}px)`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
