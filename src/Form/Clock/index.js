import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

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

  return <StyledClock>Dzisiaj jest {formatDate(myDate)}</StyledClock>;
};

export default Clock;
