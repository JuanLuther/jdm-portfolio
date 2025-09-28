import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Get the current location object, which changes on every navigation
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the window whenever the 'pathname' changes
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on 'pathname' so this effect runs on every route change
  return null;
};
