import React, { useState, useEffect, useImperativeHandle } from "react";
import {
  calculate24HourDiff,
  calculateProgressPercentage,
  formatCountdownTime,
} from "../../utils";
import { TWENTY_FOUR_HOURS_IN_SECONDS } from "../../constants";
import { Status, StatusColor } from "../../types";

type CountdownProps = {
  durationInSeconds: number;
  label: string;
  status: Status;
  setTimerStatus: React.Dispatch<React.SetStateAction<Status>>;
};

const Countdown = React.forwardRef(
  (
    { durationInSeconds, label, status, setTimerStatus }: CountdownProps,
    ref
  ) => {
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
            setTimerStatus(Status.COMPLETED);
          }
        }, 1000);
      }

      return () => clearInterval(intervalId);
    }, [isRunning, startTime, durationInSeconds, setTimerStatus]);

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

    const radius = 130;
    const circumference = 2 * Math.PI * radius;
    const progress = (elapsedTime / durationInSeconds) * circumference;

    const readyCircleStyle = {
      strokeDasharray: `${circumference}px`,
      strokeDashoffset:
        (circumference * calculate24HourDiff(durationInSeconds)) /
        TWENTY_FOUR_HOURS_IN_SECONDS,
    };

    const onGoingAndCompletedCircleStyle = {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: progress - circumference,
    };

    const generateCircle = (
      stroke: string,
      style: {
        strokeDasharray: string;
        strokeDashoffset: number;
      }
    ) => {
      return (
        <circle
          stroke={stroke}
          strokeWidth="24"
          fill="transparent"
          r={radius}
          cx="160"
          cy="160"
          style={style}
        />
      );
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
          {status === Status.READY &&
            generateCircle(StatusColor.READY, readyCircleStyle)}
          {status === Status.ONGOING &&
            generateCircle(StatusColor.ONGOING, onGoingAndCompletedCircleStyle)}
          {(status === Status.COMPLETED || !isRunning) &&
            generateCircle(
              StatusColor.COMPLETED,
              onGoingAndCompletedCircleStyle
            )}
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
