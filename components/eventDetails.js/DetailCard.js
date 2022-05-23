import * as React from "react";
import Image from "next/image";
// icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const DetailCard = ({ event }) => {
  // custom formats
  const dateFormat = new Date(event.date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressFormat = event.location.replace(", ", "\n");

  return (
    <div className="card-details shadow">
      <div className="d-flex justify-content-center align-items-center my-5 details-container">
        <Image
          src={`/${event.image}`}
          alt={event.title}
          width={"300px"}
          height={"300px"}
          loading="lazy"
        />
        <div style={{ marginTop: "20px" }}>
          <address className="fw-bold text-secondary">
            <LocationOnIcon sx={{ fontSize: 20 }} />
            {addressFormat}
          </address>
          <time className="fw-bold text-secondary">
            <AccessTimeFilledIcon
              sx={{ fontSize: 17, margin: "0 14px 0 2px" }}
            />
            {dateFormat}
          </time>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
