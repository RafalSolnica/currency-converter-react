import "./style.css";
import { useState, useEffect } from "react";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="clock">Dzisiaj jest {formatDate(myDate)}</div>;
};

export default Clock;