import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Ad-Tech Software Engineer",
          "MERN Stack Developer",
          "React.js Developer",
          "Next.js Developer",
          "Node.js Developer",
          "JavaScript Expert",
          "TypeScript Developer",
          "MongoDB Developer",
          "Express.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
