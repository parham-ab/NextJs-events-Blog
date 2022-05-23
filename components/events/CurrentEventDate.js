import React from "react";

const CurrentEventDate = ({ time }) => {
  const dateFormat = new Date(time).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-warning text-center p-2">
      <h1>Events In {dateFormat}</h1>
    </div>
  );
};

export default CurrentEventDate;
