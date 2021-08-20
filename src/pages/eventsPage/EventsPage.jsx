import { EventTopSection } from "./eventsComponents/eventTopSection/EventTopSection";
import { EventBroadcast } from "./eventsComponents/eventBroadcast/EventBroadcast";
import { EventsDetail } from "./eventsComponents/eventDetails/EventsDetail";
import { EventGuestList } from "./eventsComponents/eventGuestList/EventGuestList";
import { EventUpcomingEvents } from "./eventsComponents/eventUpcomingEvents/EventUpcomingEvents";
import {
  eventTopSection,
  eventDetails,
  eventBroadcast,
} from "../../data/EventPageData";

function EventsPage() {
  return (
    <>
      <div>
        <EventTopSection title={eventTopSection.title} />
      </div>
      <EventBroadcast announcement={eventBroadcast.announcement} />
      <EventsDetail
        title={eventDetails.title}
        subheader={eventDetails.subheader}
        description={eventDetails.description}
      />
      <EventGuestList />
      <EventUpcomingEvents />
    </>
  );
}

export default EventsPage;
