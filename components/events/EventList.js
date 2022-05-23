import React from "react";
// components
import EventItems from "./EventItems";

const EventList = ({ item }) => {
  return (
    <div className="d-flex align-items-center flex-wrap justify-content-around">
      {item.map((item) => (
        <EventItems key={item.id} data={item} />
      ))}
    </div>
  );
};

export default EventList;
