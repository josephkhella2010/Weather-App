import { FaCheck } from "react-icons/fa";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  CheckboxContainer: {
    width: "100%",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    padding: "0px 30px 100px 30px",
  },
  checkBoxSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    fontWeight: "700",
  },
  CheckboxMainSection: {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    backgroundColor: "#00000094",
    padding: "20px 30px",
    borderRadius: "20px",
    width: "70%",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  CheckboxInput: {
    cursor: "pointer",
    display: "none",
    /*   "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
      border: "3px solid #333",
      backgroundColor: "white",
      borderRadius: "4px",
    }, */
  },

  visibleInput: {
    width: "20px",
    height: "20px",
    border: "2px solid #333",
    backgroundColor: "white",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  CheckboxInputChecked: {
    backgroundColor: "red",
    border: "2px solid transparent",
  },
  faIcon: {
    fontSize: "10px",
  },
});
/*  */

interface CheckboxContainerProps {
  checkVal: string[];
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getIsoDate: (day: number) => string;
}

/*  */
export default function CheckboxContainer({
  checkVal,
  handleCheckbox,
  getIsoDate,
}: CheckboxContainerProps) {
  const classes = useStyles();

  const checkBoxArr = [
    { name: "Today", value: getIsoDate(0) },
    { name: "Tomorrow", value: getIsoDate(1) },
    { name: "2 Days after", value: getIsoDate(2) },
    { name: "3 Days after", value: getIsoDate(3) },
    { name: "4 Days after", value: getIsoDate(4) },
  ];

  return (
    <div className={classes.CheckboxContainer}>
      <div className={classes.CheckboxMainSection}>
        {checkBoxArr &&
          checkBoxArr.map((item, ind) => {
            return (
              <label
                htmlFor={item.name}
                key={ind}
                className={classes.checkBoxSection}
              >
                <input
                  type="checkbox"
                  value={item.value}
                  checked={checkVal.includes(item.value)}
                  onChange={(e) => handleCheckbox(e)}
                  id={item.name}
                  aria-hidden="true"
                  className={`${classes.CheckboxInput}`}
                />
                <div
                  className={`${classes.visibleInput}
              ${
                checkVal.includes(item.value)
                  ? classes.CheckboxInputChecked
                  : ""
              }
              
              `}
                >
                  {checkVal.includes(item.value) ? (
                    <FaCheck className={classes.faIcon} />
                  ) : (
                    ""
                  )}
                </div>
                <p>{item.name}</p>
              </label>
            );
          })}
      </div>
    </div>
  );
}
