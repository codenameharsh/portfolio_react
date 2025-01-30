import React from 'react';

function Projects() {
  return (
    <div className="banner-container">
      <div
        className="banner"
        id="web-des"
      >
        <div className="page banner_container-1">
          <div className="banner_container-2">
            <div className="banner_section">
              <h2 className="banner_heading">Web Design</h2>
              <p className="banner_subheading">
                Check out my website prototypes and designs
              </p>
            </div>

            <div className="banner_section">
              <p className="banner_button">
                <a href="#main" className="banner_button_link">
                  Browse
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner"
        id="fas-illus"
      >
        <div className="page banner_container-1">
          <div className="banner_container-2">
            <div className="banner_section">
              <h2 className="banner_heading">Fashion Illustrations</h2>
              <p className="banner_subheading">
                Stylized fashion illustrations created for brands I freelanced
                for and a few of my personal designs
              </p>
            </div>

            <div className="banner_section">
              <p className="banner_button">
                <a href="#main" className="banner_button_link">
                  Browse
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner"
        id="brochure"
      >
        <div className="page banner_container-1">
          <div className="banner_container-2">
            <div className="banner_section">
              <h2 className="banner_heading">Brochure & Invites</h2>
              <p className="banner_subheading">
                Here are some of the brochures and e-invites I've created
              </p>
            </div>

            <div className="banner_section">
              <p className="banner_button">
                <a href="#main" className="banner_button_link">
                  Browse
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;