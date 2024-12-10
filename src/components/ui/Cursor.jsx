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

    // Continuous glow animation
    const glowTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    glowTimeline.to(cursor, {
      boxShadow: "0 0 15px 3px white",
      borderColor: "white",
      backgroundColor: "rgba(0,0,0,0.3)",
      duration: 2,
      ease: "power2.inOut"
    }).to(cursor, {
      boxShadow: "0 0 15px 3px black",
      borderColor: "black",
      backgroundColor: "transparent",
      duration: 2,
      ease: "power2.inOut"
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      glowTimeline.kill();
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="h-[30px] w-[30px] border-2 border-black rounded-full z-20 fixed top-0 left-0 backdrop-blur-sm pointer-events-none" 
    />
  );
}

export default Cursor;