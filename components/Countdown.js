import { useEffect, useRef, useState } from "react";

function getTimeRemaining(date) {
  const total = Date.parse(date) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default function Countdown({ date }) {
  const [{ days, hours, minutes, seconds }, setTimeRemaining] = useState(
    getTimeRemaining(date)
  );

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(date));
  }, 1000);

  return (
    <div className="flex">
      <div className="p-2">
        <span className="text-4xl">{days}</span> <br /> days
      </div>
      <div className="p-2">
        <span className="text-4xl">{hours}</span> <br /> hours
      </div>
      <div className="p-2">
        <span className="text-4xl">{minutes}</span> <br />
        minutes
      </div>
      <div className="p-2">
        <span className="text-4xl">{seconds}</span> <br /> seconds
      </div>
    </div>
  );
}
