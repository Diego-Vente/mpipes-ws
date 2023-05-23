import React from "react";
import homeLogo from '../assets/agile-mpipes.png';

function PreLoader(props) {
  return (
    <section>
      <div id={props.load ? "preloader" : "preloader-none"}></div>;
    </section>
  );
  
  
  
}

export default PreLoader;