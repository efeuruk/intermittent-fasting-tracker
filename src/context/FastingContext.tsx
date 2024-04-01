import React, { createContext, useState } from "react";
import { getHoursFromSeconds } from "../utils";
import { FastingItem } from "../types";

type FastingContextType = {
  // state
  fastingList: FastingItem[];

  // actions
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

  // getters
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

  const sortFastingListByDate = () => {
    fastingList.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
  };

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
    const durationInHours = getHoursFromSeconds(duration);
    setFastingList(prev => [
      ...prev,
      { durationInHours, duration, date, startTime, endTime },
    ]);
    sortFastingListByDate();
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
