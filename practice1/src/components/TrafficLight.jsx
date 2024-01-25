import React, { useEffect, useState } from 'react';
import './trafficlight.css';

function TrafficLight() {
  const [activeLight, setActiveLight] = useState('green');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => {
        switch (prev) {
          case 'green':
            return 'yellow';
          case 'yellow':
            return 'red';
          case 'red':
            return 'green';
          default:
            return 'green';
        }
      });
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trafficlight">
      <div className={`light ${activeLight === 'green' ? 'active' : ''}`}></div>
      <div className={`light ${activeLight === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light ${activeLight === 'red' ? 'active' : ''}`}></div>
    </div>
  );
}

export default TrafficLight;
