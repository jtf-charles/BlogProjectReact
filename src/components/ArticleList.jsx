import React, { useState } from "react";
import Article from "./Article";

function ArticleList(Props) {
  const [searchTerm, setSearchTerm] = useState("");

  // Tri et filtrage des posts par titre
  const filteredPosts = Props.posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <>
      <main>
        {/* Champ de recherche */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Liste des articles filtrés */}
        {filteredPosts.map((post) => (
          <Article key={post.id} {...post} />
        ))}
      </main>
    </>
  );
}

export default ArticleList;
