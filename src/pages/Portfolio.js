import React from 'react';

export default function Portfolio() {
    return (
      <div className="pcard-container">
        <section id="portfolio">
          <div className="headers">
            <h2>Portfolio</h2>
          </div>

          <article id="projects">
            <a
              className="spintheglobe"
              href="https://repopanda.github.io/spin-the-globe/"
            >
              <div>
                <h3>Spin the Globe</h3>
              </div>
            </a>

            <a className="leftovers" 
            href="https://leftovers.herokuapp.com/">
              <div>
                <h3>Leftovers</h3>
              </div>
            </a>

            <a
              className="garagio"
              href="https://garagio-16dff4078a93.herokuapp.com/"
            >
              <div>
                <h3>Garagio</h3>
              </div>
            </a>

            <a className="pastel-puzzle" 
            href="#">
              <div>
                <h3>Pastel Puzzle</h3>
              </div>
            </a>

            <a className="run-buddy" 
            href="#">
              <div>
                <h3>Run Buddy</h3>
              </div>
            </a>

            <a className="surf" 
            href="#">
              <div>
                <h3>Surf</h3>
              </div>
            </a>

          </article>
        </section>
      </div>
    );
}