import React from "react";

const TimestampConverter = ({ timestamp }) => {
  const convertToWeeks = (timestamp) => {
    const date = new Date(timestamp);
    const referencePoint = new Date(date.getFullYear(), 0, 1);
    const timeDifference = date.getTime() - referencePoint.getTime();
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

    return weeks;
  };

  return (
    <div>
      <p className="mx-2">{convertToWeeks(timestamp)} Weeks ago</p>
    </div>
  );
};

export default TimestampConverter;
