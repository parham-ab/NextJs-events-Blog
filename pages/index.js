import { useRouter } from "next/router";
// components
import LayOut from "../components/common/LayOut";
import EventList from "../components/events/EventList";
import EventSearch from "../components/events/EventSearch";
import { getAllEvents } from "../dummy-data";

const HomePage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <LayOut
      title={"HomePage"}
      keywords={"HomePage"}
      description={"Events Website using NextJS"}
    >
      <EventSearch onSearch={findEventsHandler} />
      <EventList item={allEvents} />
    </LayOut>
  );
};

export default HomePage;
