import { useRef, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

const ScrollLayout = ({ children }: { children?: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const container = containerRef.current;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (container && location) {
      scrollToTop();
    }
  }, [location]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollLayout;
