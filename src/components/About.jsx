import React from "react";

function About (Props){
return (
    <>
        <aside>
            <img src={Props.image||"https://via.placeholder.com/215"} alt="blog logo" ></img>
            <p>{Props.about}</p>
        </aside>
        
    </>
)
}

export default About;