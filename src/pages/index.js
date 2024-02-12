import * as React from "react";
import "../styles/global.css"
import NavbarCustom from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Caroussel";

export default function Accueil() {
  return (
    <>
      <NavbarCustom />
      <Carousel />
      <Footer />
    </>
  )
}