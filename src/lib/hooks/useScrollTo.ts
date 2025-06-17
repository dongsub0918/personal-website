import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 50; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;
      const targetScrollY = elementPosition + currentScrollY;

      const offsetPosition =
        elementPosition > 0 // Scrolling down
          ? targetScrollY // No need to subtract navbar height
          : targetScrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollTo;
};
