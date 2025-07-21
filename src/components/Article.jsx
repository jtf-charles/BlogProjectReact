import React from "react";
import DisplayMinutes from "./DisplayMinutes";
import { useState, useEffect } from "react";

function Article (Props){
  const [isClicked, setIsClicked]=useState(false);
  const [liked, setLiked] = useState(false);

  const likeKey = `liked-article-${Props.id}`;
   // Au chargement du composant, récupérer l'état du j’aime depuis localStorage
  useEffect(() => {
    const storedLike = localStorage.getItem(likeKey);
    if (storedLike === "true") {
      setLiked(true);
    }
  }, [likeKey]);

  function toggleLike() {
    const newLike = !liked;
    setLiked(newLike);
    localStorage.setItem(likeKey, newLike.toString());
  }

  function handleClick(){
    console.log("bonjour")
    setIsClicked(!isClicked);
  }

  function postElement(post){
    <>
    <p>{post}</p>
    <button>Cancel</button>
    </>
  }

return (
    <article>
      <h3>{Props.title}</h3>
      <small>{Props.date||"January 1, 1970"}{". "}{DisplayMinutes(Props.minutes)}{Props.minutes+ " min read"}</small>
      <p>{Props.preview}</p>

      <button className="like-button" onClick={toggleLike}>
        {liked ? "❤️ j'aime" : "🤍"}
      </button>

      {/* 👇 Affiche le contenu complet du post si cliqué */}
      {isClicked && (
        <>
          <p className="article-paragraph">{Props.post}</p>
          <button className="article-button" onClick={handleClick}>
            Hide article
          </button>
        </>
      )}

      {/* 👇 Affiche ce bouton si le contenu n’est pas encore affiché */}
      {!isClicked && (
        <button className="article-button" onClick={handleClick}>
          View article
        </button>
      )}
    </article>
)
}

export default Article;