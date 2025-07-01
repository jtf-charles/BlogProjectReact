import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const urlImage='../images/tancrede1.jpg';
const text="Personal blog by Joseph Tancrede Fils Charles. I explain with words and code";
function App() {
  return (
    <div className="App">
      <Header name="Learning React.js"/>
      <About image={urlImage} about={text}/> 
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
