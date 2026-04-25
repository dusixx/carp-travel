import { SectionTitle } from '@/components';
import { AboutData } from './About.constants.js';

const { whoWeAre, ourBeliefs, ourMethods } = AboutData;

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <SectionTitle caption="Who we are" accent={[1, 2]} />

          <div className="about__group">
            <p className="about__para">{whoWeAre}</p>
            <p className="about__para">{ourBeliefs}</p>
          </div>

          <div className="about__tagline">
            <span>From vacationers</span>
            <span>to active travelers</span>
            <span>we have a tour for everyone.</span>
          </div>

          <p className="about__para about__para--our-methods">{ourMethods}</p>
        </div>
      </div>
    </section>
  );
};
