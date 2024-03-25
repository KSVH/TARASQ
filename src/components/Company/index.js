import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Company() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-medium text-paragraph text-center pt-20">I have work for them</h2>
      <div className="flex justify-center">
        <hr className="w-[250px] pb-20 mt-5" />
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-5">
        <div>
          <h3 className="text-3xl font-bold text-paragraph">Agrivitech</h3>
          <h4 className="text-secondary text-sm italic pb-5">2021 - 2023</h4>
          <p className="text-paragraph italic">
            The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol
            yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the
            high seas, arg!
          </p>
        </div>
        <div className="w-full h-[350px]">
          <StaticImage
            src="../../images/test/card2.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            class="rounded"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full h-[350px]">
          <StaticImage
            src="../../images/test/card1.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            class="rounded"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-paragraph">Bazam</h3>
          <h4 className="text-secondary text-sm italic pb-5">2020-2021</h4>
          <p className="text-paragraph italic">
            The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol
            yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the
            high seas, arg!
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-paragraph">CESI</h3>
          <h4 className="text-secondary text-sm italic pb-5">2019</h4>
          <p className="text-paragraph italic">
            The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol
            yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the
            high seas, arg!
          </p>
        </div>
        <div className="w-full h-[350px]">
          <StaticImage
            src="../../images/test/card2.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            class="rounded"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
