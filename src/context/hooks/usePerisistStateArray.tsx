import { useState, useEffect } from "react";
import store from "store";

type StorageKey = string;
type InitialState<T> = T | (() => T);

export default function usePersistentState<T>(
  storageKey: StorageKey,
  initialState: InitialState<T[]>
): [T[], React.Dispatch<React.SetStateAction<T[]>>] {
  const [state, setState] = useState<T[]>(() => {
    const storedValue = store.get(storageKey);
    return storedValue && Array.isArray(storedValue)
      ? storedValue
      : initialState instanceof Function
      ? initialState()
      : initialState;
  });

  useEffect(() => {
    store.set(storageKey, state);
  }, [state, storageKey]);

  return [state, setState];
}
