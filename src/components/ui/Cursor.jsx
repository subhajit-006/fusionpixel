import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Mouse movement tracking
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, {
        x: clientX - 15, 
        y: clientY - 15,
        delay: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="h-[30px] w-[30px] z-20 fixed top-0 left-0 pointer-events-none" 
    >
      <i className="fa-brands fa-cloudversify text-4xl text-sky-300"></i>
    </div>
  );
}

export default Cursor;