import { useEffect, useRef, useState } from "react";

const Chronometer = () => {
  const [chronometerOn, setChronometerOn] = useState(false);
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (chronometerOn) {
      ref.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (ref.current) {
      clearInterval(ref.current);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [chronometerOn]);

  return (
    <div className="card">
      <input disabled value={time} />
      <div className="card">
        {!chronometerOn && (
          <button onClick={() => setChronometerOn((status) => !status)}>
            {time > 0 ? "Continue" : "Start"}
          </button>
        )}
        {chronometerOn && (
          <button onClick={() => setChronometerOn((status) => !status)}>
            Stop
          </button>
        )}
        <button
          onClick={() => {
            setTime(0);
            setChronometerOn(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Chronometer;
