import { SectionTitle } from './misc';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="inner-container">
        <div className="about__content">
          <SectionTitle caption="Who we are" accent={[1, 2]} />
          {/* <div className="about__details"> */}
          <div className="about__group">
            <p className="about__para">
              <span>a team of enthusiasts</span> who are fully committed to the
              mission of creating unforgettable and extraordinary trips to the
              most beautiful parts of the Carpathians. Our goal is not just to
              show you the natural wonders of the mountains, but to provide you
              with a deep immersion in their magical atmosphere.
            </p>
            <p className="about__para">
              <span>We believe</span> that nature has the power to inspire,
              strengthen character and provide new perspectives. Therefore, each
              of our tours is aimed at unlocking your potential, enriching your
              spiritual world and creating unforgettable memories.
            </p>
          </div>

          <div className="about__group-sec">
            <div className="about__tagline">
              <span>From vacationers</span>
              <span>to active travelers</span>
              <span>we have a tour for everyone.</span>
            </div>

            <p className="about__para we-use">
              <span>We use methods</span> that are time-tested and proven. Our
              expert guides with in-depth knowledge of the Carpathian landscapes
              lead you safely through the mysteries of these mountains.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
