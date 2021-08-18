import { UpcomingCardOne, UpcomingCardTwo } from "../../../data/landingData";
import { UpcomingCard } from "../../cards/landingCards/upcomingCard";
import "./upcomingEvents.scss";

export function UpcomingEvents() {
  return (
    <>
      <h3>Upcoming Events</h3>
      <div className="upcoming-container">
        <UpcomingCard
          eventsTitle={UpcomingCardOne.eventsTitle}
          description={UpcomingCardOne.description}
          date={UpcomingCardOne.date}
        />
        <UpcomingCard
          eventsTitle={UpcomingCardTwo.eventsTitle}
          description={UpcomingCardTwo.description}
          date={UpcomingCardTwo.date}
        />
      </div>
    </>
  );
}
