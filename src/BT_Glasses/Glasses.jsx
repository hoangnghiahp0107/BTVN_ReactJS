import React from "react";
import Header from "./Header";
import GlassesList from "./GlassesList";

function Glasses(){
    return (
        <div style={{backgroundImage: "url('./img/background.jpg')", backgroundRepeat:"no-repeat",backgroundSize:"cover", width:"100%",height:"100%",position:"fixed"}}>
            <Header/>
            <GlassesList/>
        </div>
    );
}
export default Glasses;