import React from 'react';

export default function Portfolio() {
    return (
      <div class="pcard-container">
        <section id="portfolio">
          <div class="headers">
            <h2>Portfolio</h2>
          </div>

          <article id="projects">
            <a
              class="spintheglobe"
              href="https://repopanda.github.io/spin-the-globe/"
            >
              <div>
                <h3>Spin the Globe</h3>
              </div>
            </a>

            <a class="leftovers" 
            href="https://leftovers.herokuapp.com/">
              <div>
                <h3>Leftovers</h3>
              </div>
            </a>

            <a
              class="garagio"
              href="https://garagio-16dff4078a93.herokuapp.com/"
            >
              <div>
                <h3>Garagio</h3>
              </div>
            </a>

            <a class="pastel-puzzle" 
            href="#">
              <div>
                <h3>Pastel Puzzle</h3>
              </div>
            </a>

            <a class="run-buddy" 
            href="#">
              <div>
                <h3>Run Buddy</h3>
              </div>
            </a>

            <a class="surf" 
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