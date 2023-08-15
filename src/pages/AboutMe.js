import React from "react";
import myHeadShot from "../images/Headshot.jpeg";

export default function AboutMe() {
    return (
      <div class="acard-container">
        <section id="about-me">
          <div class="headers">
            <h2>About Me</h2>
          </div>
          <img src={myHeadShot} alt="headshot" height={150} width={150} />
          <article id="#about-me">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
              laborum earum, in assumenda aliquam qui consequatur numquam quis
              exercitationem maxime, aut nihil commodi quae iure molestiae
              consequuntur reiciendis ducimus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium deleniti ipsa nostrum minima nisi officiis, nam porro
              ducimus aut illum sequi earum nobis explicabo nesciunt rem error
              quia exercitationem esse!
            </p>
          </article>
        </section>
      </div>
    );
}