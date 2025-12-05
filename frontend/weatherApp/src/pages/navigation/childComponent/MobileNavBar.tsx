import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  mobileNavBarContainer: {
    width: "100%",
    height: "60px",
    position: "fixed",
    zIndex: "500",
    backdropFilter: "blur(10px)",
    backgroundColor: "#95959580",
    fontFamily: "'Exo 2', sans-serif",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 10px",
  },
  mobileNavBarHamContainer: {
    width: "60px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    cursor: "pointer",
    "& > div": {
      background: "white",
      width: "100%",
      height: "4px",
      borderRadius: "1px",
      transition: "transform 0.3s ease, opacity 0.3s ease",
    },
  },
  translateDown: {
    transform: "translateY(15px) rotate(45deg)",
  },

  translateUp: {
    transform: "translateY(-15px) rotate(-45deg)",
  },
  mobileNavBarSection: {
    position: "absolute",
    backdropFilter: "blur(10px)",
    backgroundColor: "#000000e3",
    width: "100%",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    transition: "left 0.3s ease, opacity 0.3s ease",
    top: "0px",
  },
  showMenu: { left: "100%" },
  hideMenu: {
    left: "0%",
  },
  mobileNavBarBackSection: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    cursor: "pointer",
  },
  mobileNavBarBackIcon: {
    fontSize: "30px",
    color: "#ffffff",
    fontWeight: "900",
  },
  mobileNavBarSectionUl: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  mobileNavBarMainLink: {
    listStyle: "none",
    display: "flex",
  },
  mobileNavBarLink: {
    textDecoration: "none",
    color: "#ffffff",
    padding: "20px",
    width: "100%",
    "&:hover": {
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      backgroundColor: " #a9a9a948",
    },
  },
});

export default function MobileNavBar() {
  const classes = useStyles();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeFunc = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <div className={classes.mobileNavBarContainer}>
      <div
        className={classes.mobileNavBarHamContainer}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className={showMenu ? classes.translateDown : ""}></div>
        <div className={showMenu ? classes.translateUp : ""}></div>
      </div>
      <div
        className={`${classes.mobileNavBarSection}
      
      ${!showMenu ? classes.showMenu : classes.hideMenu}`}
      >
        <div className={classes.mobileNavBarBackSection}>
          <IoIosArrowRoundBack
            className={classes.mobileNavBarBackIcon}
            onClick={closeFunc}
          />
        </div>

        <div className={classes.mobileNavBarSectionUl}>
          <ul>
            <li className={classes.mobileNavBarMainLink}>
              <Link
                to="/"
                className={classes.mobileNavBarLink}
                onClick={closeFunc}
              >
                {" "}
                Weather for Now
              </Link>
            </li>
            <li className={classes.mobileNavBarMainLink}>
              <Link
                to="/weather"
                className={classes.mobileNavBarLink}
                onClick={closeFunc}
              >
                {" "}
                Weather every 3 hour for 5 day
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
