import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

function Skills() {
    const skills = [
      {
        title: 'React.js',
        icon: 'fa-brands fa-react',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?',
        accentColor: '#0B374D',
      },
      {
        title: 'HTML 5',
        icon: 'fa-brands fa-html5',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        accentColor: '#1d3446',
      },
      {
        title: 'CSS 3',
        icon: 'fa-brands fa-css3',
        descr: 'Lorem ipsum dolor sit.',
        accentColor: '#364a5a',
      },
      {
        title: 'javaScript',
        icon: 'fa-brands fa-js',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.',
        accentColor: '#4f616f',
      },
      {
        title: 'Github',
        icon: 'fa-brands fa-github',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        accentColor: '#9aa5ad',
      },
      {
        title: 'AdobeXD',
        icon: 'fa-brands fa-adobe',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        accentColor: '#9aa5ad',
      },
      {
        title: 'Figma',
        icon: 'fa-brands fa-figma',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        accentColor: '#9aa5ad',
      },
      {
        title: 'Adobe Illustrator',
        icon: 'fa-brands fa-illustrator',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        accentColor: '#9aa5ad',
      },
    ];
  
    return (
      <div className="sns">
        <h1>Here's what I can do:</h1>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} style={{ '--accent-color': skill.accentColor }}>
              <div className="icon">
                <i className={skill.icon} />
              </div>
              <div className="title">{skill.title}</div>
              <div className="descr">{skill.descr}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Skills;