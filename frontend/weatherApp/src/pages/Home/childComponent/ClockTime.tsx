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
    const paddedHours = `0${Hours}`;
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
      <h1> TIME NOW Is {time}</h1>
    </div>
  );
}
