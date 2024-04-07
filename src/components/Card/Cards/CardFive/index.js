import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Cardfive({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  // FUNCTION FOR CUTTING THE TEXT
  function couperTexte(texte, longueurMax) {
    if (texte.length <= longueurMax) {
      return texte;
    }

    const texteCoupe = texte.substring(0, longueurMax) + "...";
    return texteCoupe;
  }

  // CONST FOR TAKING THE DATA TO CUT
  const texteCoupe = couperTexte(data.description.description, 120);

  const image = getImage(data.media);

  return (
    <div
      className={`relative rounded-[65px] overflow-hidden shadow-lg bg-white animate__animated_slow animate__flipInY animate__infinite_slow`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full cursor-pointer h-[450px]">
        <GatsbyImage
          image={image}
          alt="toto"
          placeholder="blurred"
          layout="constrained"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <p className="text-white text-center">Bientôt disponible</p>
        </div>
      )}
    </div>
  );
}
