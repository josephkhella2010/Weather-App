import { createUseStyles } from "react-jss";
import DesktopNavBar from "./childComponent/DesktopNavBar";
import MobileNavBar from "./childComponent/MobileNavBar";
import { useEffect, useState } from "react";

const useStyles = createUseStyles({
  navbarWrapper: {
    width: "100%",
  },
});
export default function NavigationPage() {
  const classes = useStyles();
  const [isWidth, setIsWidth] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setIsWidth(true);
      } else {
        setIsWidth(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={classes.navbarWrapper}>
      {isWidth ? <MobileNavBar /> : <DesktopNavBar />}
    </div>
  );
}
