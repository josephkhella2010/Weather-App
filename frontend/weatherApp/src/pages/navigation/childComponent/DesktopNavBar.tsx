import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  desktopNavBarContainer: {
    width: "100%",
    height: "60px",
    position: "fixed",
    zIndex: "500",
    backdropFilter: "blur(10px)",
    backgroundColor: "#95959580",
    fontFamily: "'Exo 2', sans-serif",
  },
  desktopNavBarSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap: "50px",
    padding: "10px",
    justifyContent: "center",
  },
  desktopNavBarMainLink: {
    listStyle: "none",
    cursor: "pointer",
  },
  desktopNavBarLink: {
    textDecoration: "none",
    color: "#ffffff",
    padding: "10px",
    "&:hover": {
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      backgroundColor: " #00000094",
    },
  },
});

export default function DesktopNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.desktopNavBarContainer}>
      <ul className={classes.desktopNavBarSection}>
        <li className={classes.desktopNavBarMainLink}>
          <Link to="/" className={classes.desktopNavBarLink}>
            {" "}
            Weather for Now
          </Link>
        </li>
        <li className={classes.desktopNavBarMainLink}>
          <Link to="/weather" className={classes.desktopNavBarLink}>
            {" "}
            Weather every 3 hour for 5 day
          </Link>
        </li>{" "}
      </ul>
    </div>
  );
}
