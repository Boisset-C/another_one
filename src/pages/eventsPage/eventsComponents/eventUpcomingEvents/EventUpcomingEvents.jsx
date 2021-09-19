import "./eventUpcomingEvents.scss";
import { EventContainer } from "../../../../components/cards/eventContainer/EventContainer";
import { firstEvent, secondEvent } from "../../../../data/EventPageData";

export function EventUpcomingEvents() {
  return (
    <section>
      <h3 className="eue-header">Don't Miss these Upcoming Events!</h3>
      <div className="eue-container-container">
        <EventContainer
          titleOne={firstEvent.titleOne}
          descriptionOne={firstEvent.descriptionOne}
          dateOne={firstEvent.dateOne}
          titleTwo={secondEvent.titleTwo}
          descriptionTwo={secondEvent.descriptionTwo}
          dateTwo={secondEvent.dateTwo}
        />
      </div>
    </section>
  );
}
