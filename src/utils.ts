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
