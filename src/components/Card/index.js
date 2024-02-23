import React from 'react';
import CardTwo from './Cards/CardTwo';

export default function Card({ data }) {
  console.log(data, "ici");

  // Assurez-vous que data existe et qu'il a un champ nodes
  if (!data || !data.allContentfulPost || !data.allContentfulPost.nodes) {
    return <div>Aucune donnée trouvée.</div>;
  }

  const posts = data.allContentfulPost.nodes;

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post.id}>
            <CardTwo key={post.id} data={post} />
          </div>
        ))}
      </div>
    </div>
  );
}