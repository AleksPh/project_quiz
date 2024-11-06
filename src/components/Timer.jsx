import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(600); 

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <span className="countdown-timer">
      {formatTime(timeLeft)}
    </span>
  );
};

export default Timer;
