import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedElement = ({ children, animationClass }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La détection ne se fera qu'une seule fois
    threshold: 0.1, // Définir le seuil de visibilité
  });

  return (
    <div ref={ref} className={inView ? `animate__animated ${animationClass}` : ""}>
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="bg-gradient-to-b from-[rgba(254,199,215,0.5)] to-[rgba(159,103,255,0.5)]">
      <div className="container mx-auto px-4 ">
        <AnimatedElement animationClass="animate__fadeIn">
          <h2 className="text-7xl font-medium text-secondary text-center py-10 md:py-20">Who i am ?</h2>
          <div class="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5">
            <div>
              <h2 className="text-white text-3xl">About</h2>
              <hr className="mb-5" />
              <p className="mb-10 text-white text-xl">
                The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and
                cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate
                ipsum...own the high seas, arg!
              </p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="w-full h-[450px]">
                <StaticImage
                  src="../../images/self/self.jpg"
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  class="rounded-t-xl"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-end mt-10 md:mt-0">Passions</h2>
              <hr className="mb-5" />
              <p className="text-white text-xl md:text-end">Developpement web</p>
              <p className="text-white text-xl md:text-end">UX / UI</p>
              <p className="text-white text-xl md:text-end mb-10 md:mb-0">Cosplay</p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
