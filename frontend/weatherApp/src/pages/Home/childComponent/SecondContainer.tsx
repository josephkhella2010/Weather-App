import { createUseStyles } from "react-jss";

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
    width: "30%",
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
  },
});
export default function SecondContainer() {
  const classes = useStyles();

  return (
    <div className={classes.SecondContainerMainContainer}>
      <div className={classes.SecondContainerSection}>
        <div className={classes.SecondContainerLeftContent}>
          <h1>San Francisco</h1>
          <div className={classes.SecondContainerLeftContentMiddleContent}>
            <p>Monday,May 23</p>
            <p>Update As of 02:45 PM</p>
          </div>
          <div className={classes.SecondContainerLeftContentLowerContent}>
            <div className={classes.SecondContainerLeftContentLowerContentLeft}>
              <img src="/Foto/wind.png" alt="not found" />
              <p> Wind 23 km/h</p>
            </div>
            <div
              className={classes.SecondContainerLeftContentLowerContentRight}
            >
              <img src="/Foto/rain.jpg" alt="not found" />
              <p> Rain 78%</p>
            </div>
          </div>
        </div>
        <div className={classes.SecondContainerRightContent}>
          <div className={classes.SecondContainerRightContentUpperContent}>
            <p>Today</p>
          </div>
          <div className={classes.SecondContainerRightContentImgContent}>
            <img src="/Foto/cloudy.png" alt="not found" />
          </div>
          <div className={classes.SecondContainerRightContentSecondContent}>
            <p>23 c</p>
          </div>
          <div className={classes.SecondContainerRightContentThirdContent}>
            <p> 23 c - 31 c</p>
          </div>
        </div>
      </div>
    </div>
  );
}
