import { CiSearch } from "react-icons/ci";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
    padding: "100px 30px",
    "& h1": {
      color: "#ffffff",
    },
  },
  inputSection: {
    display: "flex",
    backgroundColor: "#ffffff",
    width: "70%",
    height: "50px",
    borderRadius: "25px",
    justifyContent: "space-between",
    cursor: "pointer",
    alignItems: "center",
    padding: "10px 15px",

    "& input": {
      width: "90%",
      outline: "none",
      border: "none",
      backgroundColor: "transparent",
    },
  },
});

interface FirstContainerProps {
  inputVal: string;
  setInputVal: (inputVal: string) => void;
  setCheckVal: React.Dispatch<React.SetStateAction<string[]>>;
  setWriteInput: (inputVal: string) => void;
}

export default function FirstContainer({
  inputVal,
  setInputVal,
  setWriteInput,
}: FirstContainerProps) {
  const classes = useStyles();
  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputVal(value);
    setWriteInput(value);
    if (value === "") {
      sessionStorage.removeItem("city");
    } else {
      sessionStorage.setItem("city", JSON.stringify(value));
    }
  }

  return (
    <div className={classes.inputContainer}>
      <h1>Weather App</h1>
      <div className={classes.inputSection}>
        <input
          type="text"
          value={inputVal}
          onChange={handlechange}
          placeholder=" please write a city"
        />
        <CiSearch />
      </div>
    </div>
  );
}
