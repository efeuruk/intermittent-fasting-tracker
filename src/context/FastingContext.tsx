import React, { createContext, useState } from "react";
import { getHoursFromSeconds } from "../utils";

type FastingItem = {
  duration: number;
  date: Date;
  startTime: string;
  endTime: string;
};

type FastingContextType = {
  fastingList: FastingItem[];
  addToFastingList: ({
    duration,
    startTime,
    endTime,
  }: {
    duration: number;
    startTime: string;
    endTime: string;
  }) => void;
  removeFromFastingList: (date: Date) => void;
  getTotalFastingHours: () => number;
  getTotalCompletedFasting: () => number;
};

export const FastingContext = createContext<FastingContextType>(
  {} as FastingContextType
);

export const FastingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fastingList, setFastingList] = useState<FastingItem[]>([]);

  const addToFastingList = ({
    duration,
    startTime,
    endTime,
  }: {
    duration: number;
    startTime: string;
    endTime: string;
  }) => {
    const date = new Date();
    setFastingList(prev => [...prev, { duration, date, startTime, endTime }]);
  };

  const removeFromFastingList = (date: Date) => {
    setFastingList(prev => prev.filter(fasting => fasting.date !== date));
  };

  const getTotalFastingHours = () => {
    const totalDurationInSeconds = fastingList.reduce(
      (acc, curr) => acc + curr.duration,
      0
    );
    return getHoursFromSeconds(totalDurationInSeconds);
  };

  const getTotalCompletedFasting = () => {
    return fastingList.length;
  };

  return (
    <FastingContext.Provider
      value={{
        fastingList,
        addToFastingList,
        removeFromFastingList,
        getTotalFastingHours,
        getTotalCompletedFasting,
      }}
    >
      {children}
    </FastingContext.Provider>
  );
};
