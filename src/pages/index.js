import * as React from "react";
import "../styles/global.css"
import NavbarCustom from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Caroussel";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Faq from "../components/Faq";

export default function Accueil({ data }) {
  console.log(data, "data accueil post")
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

export const query = graphql`
  query {
    allContentfulPost {
      nodes {
        id
        auteur
        description {
          description
        }
        titre
      }
    }
  }
`;