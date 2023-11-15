import React, { useRef, useEffect } from "react";
import { hero } from "../constant";
import { Button } from "./Button";
import { Navbar } from "./Navbar"; // Import Navbar component

const Hero = ({ singleItem }) => {
  const heroContent = singleItem ? [singleItem] : hero;
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.height = `${window.innerHeight}px`;
    }
  }, []);

  return (
    <>
      <Navbar /> {/* Navbar outside and above snap-container */}
      <section ref={heroRef} className="snap-container scrollbar-hide">
        {
          heroContent.map(({ id, img, title, desc, button }) => (
            <div key={id} className="snap-section relative flex flex-col items-center justify-between h-screen m-0 p-0">
              <img src={img} alt={title} className="absolute h-full w-full object-cover md:object-cover sm:object-contain m-0 p-0 top-0 left-0"/>
              <div className="z-10 font-medium text-4xl flex flex-col items-center mt-20">
                <h1>{title}</h1>
                <p className="text-xl">{desc}</p>
              </div>
              <div className="z-10 mb-12 flex flex-col gap-y-6 sm:flex ">
                <Button button={button} />
              </div>
            </div>
          ))
        }
      </section>
    </>
  );
};

export default Hero;