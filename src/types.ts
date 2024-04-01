export enum Status {
  READY = "ready",
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

export enum StatusColor {
  READY = "#B4B5F9",
  ONGOING = "#FFCB8D",
  COMPLETED = "#89C36D",
}

export type FastingItem = {
  duration: number;
  date: Date;
  startTime: string;
  endTime: string;
};
