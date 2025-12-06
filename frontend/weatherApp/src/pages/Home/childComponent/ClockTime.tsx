import { useEffect, useState } from "react";

export default function ClockTime() {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const date = new Date(); // always fresh
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const Hours = hours % 12 === 0 ? 12 : hours % 12; // 12-hour format
    const paddedHours = Hours < 10 ? `0${Hours}` : Hours;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds} ${ampm}`;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1
        style={{
          color: "#ffffff",
          textAlign: "center",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          marginBottom: "20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {" "}
        TIME NOW is {time}
      </h1>
    </div>
  );
}
