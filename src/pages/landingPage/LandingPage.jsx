import { BeneathHero } from "../../components/landingSection/beneathHero";
import { EventPreview } from "../../components/landingSection/eventPreview";
import { Hero } from "../../components/landingSection/hero";
import { NextEvent } from "../../components/landingSection/nextEvent";
import { hero, beneathHero, eventPreview } from "../../data/landingData";
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
      <EventPreview description={eventPreview.description} />
      <NextEvent />
    </>
  );
}

export default LandingPage;
