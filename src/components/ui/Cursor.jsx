import React, { useEffect } from "react";
import { gsap } from 'gsap'

function Cursor() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event
            gsap.to("#cursor", {
                x:clientX - 30 /2,
                y:clientY - 30 / 2,
                duration: 1,
                delay:0,
                ease:"power4.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        };
    }, []);

    return (
        <div id="cursor"
            className="h-[30px] w-[30px] border-2 border-black rounded-full z-20 fixed top-0 left-0" />
    )
}

export default Cursor;