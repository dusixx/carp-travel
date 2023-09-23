import { SectionTitle, AboutTagline } from '@/components';
import { aboutData } from '@/data';

const { whoWeAre, ourBeliefs, ourMethods } = aboutData;

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

          <AboutTagline />

          <p className="about__para we-use">{ourMethods}</p>
        </div>
      </div>
    </section>
  );
};
