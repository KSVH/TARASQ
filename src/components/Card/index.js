import React from "react";
import CardFour from "./Cards/CardFour";

export default function Card({ data }) {
  // Assurez-vous que data existe et qu'il a un champ nodes
  if (!data || !data.allContentfulPost || !data.allContentfulPost.nodes) {
    return <div>Aucune donnée trouvée.</div>;
  }

  const posts = data.allContentfulPost.nodes;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid sm:grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id}>
            <CardFour key={post.id} data={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
