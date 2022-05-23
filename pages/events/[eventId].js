import { useRouter } from "next/router";
// components & data
import { getEventById } from "../../dummy-data";
import LayOut from "../../components/common/LayOut";
import DetailCard from "../../components/eventDetails.js/DetailCard";
import DetailDescription from "../../components/eventDetails.js/DetailDescription";
import DetailTitle from "../../components/eventDetails.js/DetailTitle";
import NotFoundResult from "../../components/events/NotFoundResult";

const EventId = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <NotFoundResult title={"No Events Found!"} />;
  }

  return (
    <LayOut
      title={"Event details"}
      keywords={"Event Details"}
      description={"Events Website using NextJS"}
    >
      <DetailTitle title={event.title} />
      <DetailCard event={event} />
      <DetailDescription desc={event.description} />
    </LayOut>
  );
};

export default EventId;
