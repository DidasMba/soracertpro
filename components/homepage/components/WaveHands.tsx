/** @format */

"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedWavingHand() {
    const wavingRef = useRef<HTMLSpanElement>(null);
    const animationInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        function startWaving() {
            if (wavingRef.current) {
                wavingRef.current.classList.add("animate-wave");
                setTimeout(() => {
                    wavingRef.current?.classList.remove("animate-wave");
                }, 3000); // Wave for 1 second
            }
        }

        animationInterval.current = setInterval(startWaving, 3000); // Start waving every 3 seconds

        return () => {
            if (animationInterval.current) {
                clearInterval(animationInterval.current);
            }
        };
    }, []);

    return (
        <span ref={wavingRef} className='text-8xl' aria-label='Waving hand'>
            👋🏽
        </span>
    );
}
