import React, { useState, useEffect } from 'react';

const careers = [
  "Graphic Designer",
  "UI/UX Designer",
  "Freelancer",
  "Front-end Web Developer",
  "Fashion Illustrator"
];

const Hero = () => {
  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const updateText = () => {
      setCharacterIndex((prevCharacterIndex) => prevCharacterIndex + 1);

      if (characterIndex === careers[careerIndex].length) {
        setCareerIndex((prevCareerIndex) => (prevCareerIndex + 1) % careers.length);
        setCharacterIndex(0);
      }
    };

    const intervalId = setInterval(updateText, 300);
    return () => clearInterval(intervalId);
  }, [careerIndex, characterIndex]);

  const article = careers[careerIndex].startsWith('U') ? 'an' : 'a';

  return (
    <div className="hero-wrapper">
        <div id="hero">
            <div className="text-container">
                <h1>
                    <p id="blue-text">Hey there! I am</p>
                    {article} {careers[careerIndex].slice(0, characterIndex)}
                </h1>
            </div>
            <div className="hero-btn">
                <button id="about-me">About Me</button>
                <button id="resume">Download Resume</button>
            </div>
        </div>
    </div>

  );
};

export default Hero;