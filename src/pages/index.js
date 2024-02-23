import * as React from "react";
import "../styles/global.css"
import NavbarCustom from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Caroussel";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Faq from "../components/Faq";

export default function Accueil() {
  return (
    <>
      <Banner />
      <NavbarCustom />
      <Carousel />
      <Card />
      <Faq />
      <Footer />
    </>
  )
}