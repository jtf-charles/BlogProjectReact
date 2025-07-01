import React from "react";
import DisplayMinutes from "./DisplayMinutes";

function Article (Props){
return (
    <article>
      <h3>{Props.title}</h3>
      <small>{Props.date||"January 1, 1970"}{". "}{DisplayMinutes(Props.minutes)}{Props.minutes+ " min read"}</small>
      <p>{Props.preview}</p>
    </article>
)
}

export default Article;