import { useEffect, useState } from "react";

/**
 * This function is to check whether the app is being viewed in
 * mobile screen or not.
 * @returns {boolean}
 */

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(null);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

export default useCheckMobileScreen;
