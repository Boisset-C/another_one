import { BeneathHero } from "../../components/landingSection/beneathHero";
import { Hero } from "../../components/landingSection/hero";
import { hero, beneathHero } from "../../data/landingData";
import "./landingPage.scss";

function LandingPage() {
  return (
    <>
      <div className="beneath-background">
        <Hero
          name={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
        />
        <BeneathHero
          subtitle={beneathHero.subtitle}
          description={beneathHero.description}
        />
      </div>
    </>
  );
}

export default LandingPage;
