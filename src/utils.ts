import { TWENTY_FOUR_HOURS_IN_SECONDS } from "./constants";

export const calculateTimePickerDifference = (
  startTime: string,
  endTime: string
) => {
  const startParts = startTime.split(":");
  const endParts = endTime.split(":");

  const startMinutes =
    parseInt(startParts[0], 10) * 60 + parseInt(startParts[1], 10);
  const endMinutes = parseInt(endParts[0], 10) * 60 + parseInt(endParts[1], 10);

  let difference = endMinutes - startMinutes;

  if (difference < 0) {
    difference += 24 * 60;
  }

  return difference * 60;
};

export const formatCountdownTime = (seconds: number) => {
  if (seconds < 0) {
    return "00:00:00";
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const calculateProgressPercentage = (
  elapsedTime: number,
  totalDuration: number
) => {
  if (elapsedTime >= 0 && totalDuration > 0) {
    const percentage = (elapsedTime / totalDuration) * 100;
    return percentage.toFixed(0);
  } else {
    return 0;
  }
};

export const calculate24HourDiff = (givenSeconds: number) => {
  return TWENTY_FOUR_HOURS_IN_SECONDS - givenSeconds;
};

const calculateHoursAndMinutes = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return { hours, minutes };
};

export const getHoursFromSeconds = (seconds: number) => {
  const { hours } = calculateHoursAndMinutes(seconds);
  return hours;
};

export const getHoursAndMinutesFromSeconds = (seconds: number) => {
  const { hours, minutes } = calculateHoursAndMinutes(seconds);
  let hoursText = "hours";
  let minutesText = "minutes";

  if (hours > 1) {
    hoursText = "hours";
  } else {
    hoursText = "hour";
  }

  if (minutes > 1) {
    minutesText = "minutes";
  } else {
    minutesText = "minute";
  }

  return `${hours} ${hoursText} ${minutes} ${minutesText}`;
};
