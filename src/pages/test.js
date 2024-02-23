import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/Card';

export default function Test({ data }) {
  console.log(data, "ici test.js")

  // Vérifier si les données existent avant d'essayer d'y accéder
  if (!data || !data.allContentfulPost || !data.allContentfulPost.nodes) {
    return <div>Aucune donnée trouvée.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card data={data} />
      </div>
    </div>
  );
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