import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [myDate]);

  return (
    <p className="date">
      Dzisiaj jest{" "}
      {myDate.toLocaleString("pl-pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </p>
  );
};

export default Clock;
