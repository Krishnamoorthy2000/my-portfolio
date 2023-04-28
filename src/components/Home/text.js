import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="typewriter">
      <Typewriter
        options={{
          strings: ["Full Stack Developer", "MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Text;
