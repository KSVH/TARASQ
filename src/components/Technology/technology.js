import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./technlogy.css";

export default function Technology() {
  return (
    <div className="bg-background-pink">
      <div className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-1 gap-32 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-headline">Les technologies que je maitrise</h2>
            <p className="text-paragraph italic mt-5">
              Retrouvez dans cette section les différentes techonlogies que j'ai appris à maitriser au fur et à mesure
              des années.
            </p>
          </div>
          <div className="w-full">
            <div className="bg-white px-5 py-5 rounded-xl">
              <div className="flex justify-center">
                <div className="w-[128px] h-[128px] rotate-10s">
                  <StaticImage
                    src="../../images/logo/logo.svg"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h4 className="text-headline text-2xl text-center mt-5 font-medium">React</h4>
              <p className="text-secondary italic text-center">Framework Javascript</p>
            </div>

            <div className="bg-white px-5 py-5 rounded-xl mt-10">
              <div className="flex justify-center">
                <div className="w-[128px] h-[128px] rotate-10s">
                  <StaticImage
                    src="../../images/logo/next.svg"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h4 className="text-headline text-2xl text-center mt-5 font-medium">NextJS</h4>
              <p className="text-secondary italic text-center">Framework React</p>
            </div>

            <div className="bg-white px-5 py-5 rounded-xl mt-10">
              <div className="flex justify-center">
                <div className="w-[128px] h-[128px] rotate-10s">
                  <StaticImage
                    src="../../images/logo/gatsby.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h4 className="text-headline text-2xl text-center mt-5 font-medium">Gatsby</h4>
              <p className="text-secondary italic text-center">Framework React</p>
            </div>

            <div className="bg-white px-5 py-5 rounded-xl mt-10">
              <div className="flex justify-center">
                <div className="w-[128px] h-[128px] rotate-10s">
                  <StaticImage
                    src="../../images/logo/logo.svg"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h4 className="text-headline text-2xl text-center mt-5 font-medium">React Native</h4>
              <p className="text-secondary italic text-center">Framework javascript mobile</p>
            </div>
          </div>

          <div className="w-full h-[350px]">
            <StaticImage
              src="../../images/illustrations/camping.svg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              objectFit="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full h-[350px]">
            <StaticImage
              src="../../images/illustrations/test.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              objectFit="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <div className="bg-white px-5 py-5 rounded-xl mt-10">
              <div className="flex justify-center">
                <div className="w-[125px] h-[128px]">
                  <StaticImage
                    src="../../images/logo/bootstrap.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h4 className="text-headline text-2xl text-center mt-5 font-medium">Bootstrap</h4>
              <p className="text-secondary italic text-center">Blibiothèque CSS</p>
            </div>
          </div>

          <div className="bg-white px-5 py-5 rounded-xl mt-10">
            <div className="flex justify-center">
              <div className="w-[128px] h-[128px] rotate-10s">
                <StaticImage
                  src="../../images/logo/logo.svg"
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <h4 className="text-headline text-2xl text-center mt-5 font-medium">Tailwind</h4>
            <p className="text-secondary italic text-center">Blibiothèque CSS</p>
          </div>

          <div className="bg-white px-5 py-5 rounded-xl mt-10">
            <div className="flex justify-center">
              <div className="w-[128px] h-[128px] rotate-10s">
                <StaticImage
                  src="../../images/logo/logo.svg"
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <h4 className="text-headline text-2xl text-center mt-5 font-medium">Styled components</h4>
            <p className="text-secondary italic text-center">Framework CSS in JS</p>
          </div>

          <div className="bg-white px-5 py-5 rounded-xl mt-10">
            <div className="flex justify-center">
              <div className="w-[128px] h-[128px] rotate-10s">
                <StaticImage
                  src="../../images/logo/logo.svg"
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <h4 className="text-headline text-2xl text-center mt-5 font-medium">Emotion</h4>
            <p className="text-secondary italic text-center">Framework CSS in JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
