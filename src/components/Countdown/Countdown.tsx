import React, { useState, useEffect, useImperativeHandle } from "react";
import { calculateProgressPercentage, formatCountdownTime } from "../../utils";

type CountdownProps = {
  durationInSeconds: number;
  label: string;
};

const Countdown = React.forwardRef(
  ({ durationInSeconds, label }: CountdownProps, ref) => {
    const [startTime, setStartTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(durationInSeconds - 60);
    const [showOnlyElapsedTime, setShowOnlyElapsedTime] = useState(false);

    useEffect(() => {
      let intervalId: number;
      if (isRunning) {
        intervalId = setInterval(() => {
          const currentTime = Date.now();
          const newElapsedTime = (currentTime - startTime) / 1000;
          setElapsedTime(newElapsedTime);

          if (newElapsedTime >= durationInSeconds) {
            setIsRunning(false);
            clearInterval(intervalId);
          }
        }, 1000);
      }

      return () => clearInterval(intervalId);
    }, [isRunning, startTime, durationInSeconds]);

    useImperativeHandle(ref, () => ({
      startCountdown,
      pauseCountdown,
      stopCountdown,
    }));

    const startCountdown = () => {
      setShowOnlyElapsedTime(false);
      setStartTime(Date.now());
      setIsRunning(true);
    };

    const pauseCountdown = () => {
      setIsRunning(false);
      setShowOnlyElapsedTime(true);
    };

    const stopCountdown = () => {
      setShowOnlyElapsedTime(false);
      setIsRunning(false);
      setElapsedTime(0);
    };

    const radius = 140;
    const circumference = 2 * Math.PI * radius; // cevre
    const progress = (elapsedTime / durationInSeconds) * circumference;
    const circleStyle = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: circumference - progress,
    };

    return (
      <div>
        <svg width="320" height="320">
          <circle
            stroke="#C4C4C4"
            strokeWidth="24"
            fill="transparent"
            r={radius}
            cx="160"
            cy="160"
          />
          <circle
            stroke="#B4B5F9"
            strokeWidth="24"
            fill="transparent"
            r={radius}
            cx="160"
            cy="160"
            style={{
              ...circleStyle,
            }}
          />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="400"
            fill="#575757"
          >
            {isRunning
              ? `
      ${label} ${calculateProgressPercentage(elapsedTime, durationInSeconds)}%
						`
              : label}
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24"
            fontWeight="700"
            fill="#000000"
          >
            {showOnlyElapsedTime
              ? formatCountdownTime(elapsedTime)
              : formatCountdownTime(durationInSeconds - elapsedTime)}
          </text>
        </svg>
      </div>
    );
  }
);

export default Countdown;
