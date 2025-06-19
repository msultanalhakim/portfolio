// hooks/useAutoHidingNavbar.ts
import { useState, useEffect, useCallback } from 'react';

export function useAutoHidingNavbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const throttledControlNavbar = () => {
        requestAnimationFrame(controlNavbar);
      };
      window.addEventListener("scroll", throttledControlNavbar, { passive: true });
      return () => window.removeEventListener("scroll", throttledControlNavbar);
    }
  }, [controlNavbar]);

  return navbarVisible;
}