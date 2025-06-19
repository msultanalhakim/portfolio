// hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

export function useDarkMode(initialState = true): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [darkMode, setDarkMode] = useState(initialState);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}