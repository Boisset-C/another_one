import { EventTopSection } from "./eventsComponents/eventTopSection/EventTopSection";
import { EventBroadcast } from "./eventsComponents/eventBroadcast/EventBroadcast";
import { EventsDetail } from "./eventsComponents/eventDetails/EventsDetail";
import { EventGuestList } from "./eventsComponents/eventGuestList/EventGuestList";
import { EventUpcomingEvents } from "./eventsComponents/eventUpcomingEvents/EventUpcomingEvents";
import { eventTopSection } from "../../data/EventPageData";

function EventsPage() {
  return (
    <>
      <EventTopSection title={eventTopSection.title} />
      <EventBroadcast />
      <EventsDetail />
      <EventGuestList />
      <EventUpcomingEvents />
    </>
  );
}

export default EventsPage;
