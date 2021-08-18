import { BeneathHero } from "../../components/landingSection/beneathHero";
import { CallToAction } from "../../components/landingSection/cta";
import { EventPreview } from "../../components/landingSection/eventPreview";
import { GuestList } from "../../components/landingSection/guestList/GuestList";
import { Hero } from "../../components/landingSection/hero";
import { NextEvent } from "../../components/landingSection/nextEvent/NextEvent";
import { UpcomingEvents } from "../../components/landingSection/upcomingEvents/UpcomingEvents";
import {
  hero,
  beneathHero,
  eventPreview,
  nextEvent,
  callToAction,
} from "../../data/landingData";
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
      <NextEvent
        title={nextEvent.title}
        subtitle={nextEvent.subtitle}
        AMorPM={nextEvent.AMorPM}
        day={nextEvent.day}
        time={nextEvent.time}
        timeType={nextEvent.timeType}
        description={nextEvent.description}
      />
      <GuestList />
      <CallToAction description={callToAction.description} />
      <UpcomingEvents />
    </>
  );
}

export default LandingPage;
