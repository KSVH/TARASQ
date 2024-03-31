import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./technlogy.css";

export default function Technology() {
  return (
    <div className="w-full">
      <div className="w-full h-[64px]">
        <StaticImage
          src="../../images/logo/agrivitech.png"
          alt="A dinosaur"
          placeholder="blurred"
          layout="constrained"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
