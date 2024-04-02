import { useState, useEffect } from "react";
import store from "store";

type StorageKey = string;
type InitialState<T> = T | (() => T);

// Define a custom hook with TypeScript
export default function usePersistentState<T>(
  storageKey: StorageKey,
  initialState: InitialState<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setInternalState] = useState<T>(() => {
    const storedValue = store.get(storageKey);
    return storedValue !== undefined
      ? storedValue
      : initialState instanceof Function
      ? initialState()
      : initialState;
  });

  useEffect(() => {
    const storageInBrowser = store.get(storageKey);

    if (storageInBrowser !== undefined) {
      setInternalState(storageInBrowser);
    }
  }, [storageKey]);

  const setState: React.Dispatch<React.SetStateAction<T>> = (
    newState: React.SetStateAction<T>
  ) => {
    setInternalState(newState);

    store.set(storageKey, newState);
  };

  return [state, setState];
}
