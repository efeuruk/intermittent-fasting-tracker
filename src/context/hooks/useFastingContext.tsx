import { useContext } from "react";
import { FastingContext } from "../FastingContext";

export const useFastingContext = () => {
  const context = useContext(FastingContext);

  if (!context) {
    throw new Error("useFastingContext must be used within a FastingProvider");
  }

  return context;
};
