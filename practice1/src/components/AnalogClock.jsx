import React, { useState, useEffect } from 'react';
import './analogclock.css';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let hours = time.getHours() % 12;
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let secAngle = (sec / 60) * 360;
  const minuteDegree = ((min + sec / 60) / 60) * 360;
  const hourDegree = ((hours + min / 60) / 12) * 360;

  return (
    <div>
      <h1>Analog Clock</h1>
      <div className="analog-clock">
        <div className="hour-hand hand" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
        <div className="minute-hand hand" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
        <div className="second-hand hand" style={{ transform: `rotate(${secAngle}deg)` }}></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}

export default AnalogClock;
