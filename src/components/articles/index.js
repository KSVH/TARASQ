import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Company() {
  return (
    <div className="container mx-auto px-4 mt-[200px]">
      <div className="md:flex justify-center hidden">
        <div className="h-[150px] w-[1px] bg-secondary opacity-50" />
      </div>

      <h2 className="text-7xl font-medium text-secondary text-center py-20">I have work for them</h2>

      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-5 py-10">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-bold text-paragraph font-mono">Agrivitech</h3>
          <h4 className="text-secondary text-md italic pb-5 font-serif">2021 - 2023</h4>
          <p className="text-paragraph italic font-mono">
            J'ai pu travailler avec la start-up Agrivitech qui propose des solutions digitales pour les coopératives et négoces agricoles.
            J'ai pu au cours de mon expérience exprimée ma vision en tant que cheffe de projet, ainsi que consolidés mon expérience en tant que développeuse front-end et UX/UI designer.
          </p>
        </div>
        <div className="w-full bg-gradient-to-tr from-[#D5BCFF] to-[#FF8EAF] h-[250px] rounded-xl flex justify-center items-center">
          <div className="w-[230px] h-[64px]">
            <StaticImage
              src="../../images/logo/agrivitech.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-5 py-10">
        {/* MOBILE TEXT */}
        <div className="md:hidden flex justify-center flex-col">
          <h3 className="text-3xl font-bold text-paragraph font-mono">Bazam</h3>
          <h4 className="text-secondary text-md italic pb-5 font-serif">2020-2021</h4>
          <p className="text-paragraph italic font-mono">
            Bazam est une start-up pour laquel j'ai travailler pendant 1an pour obtenir ma licence, Bazam propose différentes marketplaces que ce soit pour les viticulteurs ou les jardiniers. Pendant cette année j'ai pu enrichir mon expérience en tant que développeuse front-end.
          </p>
        </div>

        <div className="w-full bg-gradient-to-t from-[#FF9AB7] to-[#E7D9FF] h-[250px] rounded-xl flex justify-center items-center">
          <div className="w-[155px] h-[140px]">
            <StaticImage
              src="../../images/logo/bazam.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex justify-center flex-col items-end sm:hidden md:flex">
          <h3 className="text-3xl font-bold text-paragraph font-mono">Bazam</h3>
          <h4 className="text-secondary text-md italic pb-5 font-serif">2020-2021</h4>
          <p className="text-paragraph italic font-mono text-right">
            Bazam est une start-up pour laquel j'ai travailler pendant 1an pour obtenir ma licence, Bazam propose différentes marketplaces que ce soit pour les viticulteurs ou les jardiniers. Pendant cette année j'ai pu enrichir mon expérience en tant que développeuse front-end.
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-5 py-10">
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-bold text-paragraph font-mono">CESI</h3>
          <h4 className="text-secondary text-md italic pb-5 font-serif">2019</h4>
          <p className="text-paragraph italic font-mono">
            Pour valider mon diplôme de développeuse web, j'ai eu la chance de pouvoir réaliser un site web pour l'université de Reims. J'ai au cours de cette expérience pu être bien encadrée par plusieurs formateurs pour mener à bien ma mission.
          </p>
        </div>
        <div className="w-full bg-gradient-to-br from-[#FF8EAF] to-[#D5BCFF] h-[250px] rounded-xl flex justify-center items-center">
          <div className="w-[220px] h-[140px]">
            <StaticImage
              src="../../images/logo/cesi.png"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="py-10" />
    </div >
  );
}
