import { useRouter } from "next/router";
import Image from "next/image";
// components
import LayOut from "../../components/common/LayOut";
import CurrentEventDate from "../../components/events/CurrentEventDate";
import EventList from "../../components/events/EventList";
import NotFoundResult from "../../components/events/NotFoundResult";
import Loading from "../../components/Loading";
import { getFilteredEvents } from "../../dummy-data";
// img
import notFound from "/public/img/error.svg";

const EventDetails = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  // display preloader if data is not loaded yet
  if (!filteredData) {
    return <Loading />;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // convert selected year & month type to to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  // prevent to display undefined route
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <LayOut
        title={"Filtered Events"}
        keywords={"Filtered Events Page"}
        description={"Filtered Events Based On Date"}
      >
        <NotFoundResult title={"Invalid Filters"} />;
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width={"600px"}
            src={notFound}
            alt="notFound"
          />
        </div>
      </LayOut>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <LayOut
        title={"Filtered Events"}
        keywords={"Filtered Events Page"}
        description={"Filtered Events Based On Date"}
      >
        <NotFoundResult title={"No Events Found!"} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width={"600px"}
            src={notFound}
            alt="notFound"
          />
        </div>
      </LayOut>
    );
  }
  // show current date
  const date = new Date(numYear, numMonth - 1);
  // get filtered events to display in UI
  return (
    <LayOut
      title={"Filtered Events"}
      keywords={"Filtered Events Page"}
      description={"Filtered Events Based On Date"}
    >
      <CurrentEventDate time={date} />
      <EventList item={filteredEvents} />
    </LayOut>
  );
};

export default EventDetails;
