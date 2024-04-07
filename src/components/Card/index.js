import React from "react";
import Cardfive from "./Cards/CardFive";

export default function Card({ data }) {
  // Assurez-vous que data existe et qu'il a un champ nodes
  if (!data || !data.allContentfulPost || !data.allContentfulPost.nodes) {
    return <div>Aucune donnée trouvée.</div>;
  }

  const posts = data.allContentfulPost.nodes;

  return (
    <div className="bg-gradient-to-b from-pink-200 via-pink-400 to-purple-400 rounded-b-[65px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center w-full">
          <div className="grid sm:grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3 w-full">
            {posts.map((post, index) => (
              <div key={post.id} className={index === 1 ? "relative bottom-[-150px]" : "relative bottom-[-150px] md:bottom-[-200px]"}>
                <Cardfive key={post.id} data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
