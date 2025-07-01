import React from "react";
import Article from "./Article"

function ArticleList (Props){
return (
    <>
        <main>
            {Props.posts.map((post)=> {

                return <Article key={post.id} {...post}/>
            })
            }
        </main>   
    </>
)
}

export default ArticleList;