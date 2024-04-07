import React from "react";
import { useInView } from "react-intersection-observer";
import { StaticImage } from "gatsby-plugin-image";
import "./technlogy.css";

const AnimatedElement = ({ children, animationClass }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La détection ne se fera qu'une seule fois
    threshold: 0.5, // Définir le seuil de visibilité
  });

  return (
    <div ref={ref} className={inView ? `animate__animated ${animationClass}` : ""}>
      {children}
    </div>
  );
};

export default function Technology() {
  return (
    <div className="w-full px-14 pb-20 md:py-20">
      <div className="md:flex justify-center hidden">
        <AnimatedElement animationClass="animate__fadeIn">
          <div className="h-[150px] w-[1px] bg-secondary opacity-50" />
        </AnimatedElement>
      </div>

      <AnimatedElement animationClass="animate__fadeIn">
        <h2 className="lg:text-7xl font-medium text-secondary text-center pt-10 md:py-20 md:text-5xl text-4xl">
          The tools I use
        </h2>
      </AnimatedElement>
      <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-32 lg:gap-16 md:gap-10 sm:gap:-10 lg:grid-cols-4">
        <div className="technology-column move-up-down-animation">
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/bootstrap.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/emotion.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="technology-column move-down-up-animation">
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/icon.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/react.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="technology-column move-up-down-animation">
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/tailwind.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[180px] h-[200px]">
              <StaticImage
                src="../../images/techno/styled.svg"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="technology-column move-down-up-animation">
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[200px] h-[200px]">
              <StaticImage
                src="../../images/techno/nextjs.svg"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="w-full h-[300px] rounded-[32px] bg-secondary flex justify-center flex-col items-center mt-10">
            <div className="w-[200px] md:w-[150px] lg:w-[190px] h-[200px]">
              <StaticImage
                src="../../images/techno/figma.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="constrained"
                class="rounded-t-xl"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
