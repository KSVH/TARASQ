import * as React from "react";
import { graphql } from "gatsby"; // Import de graphql
import "../styles/global.css";
import Carousel from "../components/Caroussel";
import HeaderOne from "../components/Header/Headers/headerOne";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Layout from "../components/layout";
import Logo from "../components/Logo";
import About from "../components/About";
import Company from "../components/Company";
import Technology from "../components/Technology/technology";

export default function Accueil({ data }) {
  // Utilisation des données récupérées
  const posts = data.allContentfulPost.nodes;

  console.log(posts);

  return (
    <>
      <Layout>
        <Banner />
        <HeaderOne />
        {/* <Carousel /> */}
        <Card data={data} />
        <Technology />
        <About />
        <Company />
      </Layout>
    </>
  );
}

// Définition de la requête GraphQL
export const query = graphql`
  query {
    allContentfulPost {
      nodes {
        auteur
        description {
          description
        }
        titre
        media {
          description
          gatsbyImageData(width: 200)
        }
      }
    }
  }
`;
