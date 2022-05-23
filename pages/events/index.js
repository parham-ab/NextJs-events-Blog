import { useRouter } from "next/router";
// components
import LayOut from "../../components/common/LayOut";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getFeaturedEvents } from "../../dummy-data";

const Events = () => {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <LayOut
      title={"Events Page"}
      keywords={"All Events"}
      description={"All Events List"}
    >
      <EventSearch onSearch={findEventsHandler} />
      <EventList item={featuredEvents} />
    </LayOut>
  );
};

export default Events;
