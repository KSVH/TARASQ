import * as React from "react";
import { graphql } from "gatsby"; // Import de graphql
import "../styles/global.css";
import Card from "../components/Card";
import Layout from "../components/layout";
import About from "../components/About";
import Articles from "../components/articles";
import Technology from "../components/Technology/technology";
import HeaderTwo from "../components/Header/Headers/HeaderTwo";
import '../styles/animate.css';

export default function Accueil({ data }) {
  // Utilisation des données récupérées
  const posts = data.allContentfulPost.nodes;

  console.log(posts);

  return (
    <>
      <Layout>
        {/* <Banner /> */}
        <HeaderTwo />
        {/* <Carousel /> */}
        <Card data={data} />
        <Articles />
        <Technology />
        <About />
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
