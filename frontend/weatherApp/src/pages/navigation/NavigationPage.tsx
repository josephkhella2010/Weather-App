import { createUseStyles } from "react-jss";
import DesktopNavBar from "./childComponent/DesktopNavBar";
import MobileNavBar from "./childComponent/MobileNavBar";

const useStyles = createUseStyles({});
export default function NavigationPage() {
  const classes = useStyles();

  return (
    <div>
      {/*       <DesktopNavBar />
       */}{" "}
      <MobileNavBar />
    </div>
  );
}
