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

const calculateHoursAndMinutes = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return { hours, minutes };
};

export const formatCountdownTime = (seconds: number) => {
  if (seconds < 0) {
    return "00:00:00";
  }
  const { hours, minutes } = calculateHoursAndMinutes(seconds);
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

  return `${hours} ${hoursText} ${
    minutes > 0 ? `${minutes} ${minutesText}` : ""
  }`;
};

export const getTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.valueOf() - date.valueOf()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    if (days === 1) {
      return "yesterday";
    } else {
      return `${days} days ago`;
    }
  }
};

export const calculateEndTimeFromDurationAndStartTime = (
  startTime: string,
  duration: number
) => {
  const [hours, minutes] = startTime.split(":").map(Number);

  const startTimeInSeconds = hours * 3600 + minutes * 60;

  const totalSeconds = startTimeInSeconds + duration;
  const endHours = Math.floor(totalSeconds / 3600) % 24;
  const endMinutes = Math.floor((totalSeconds % 3600) / 60);

  const formattedHours = ("0" + endHours).slice(-2);
  const formattedMinutes = ("0" + endMinutes).slice(-2);

  return `${formattedHours}:${formattedMinutes}`;
};
