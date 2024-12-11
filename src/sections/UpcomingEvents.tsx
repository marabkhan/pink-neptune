import React from "react";
import { nextEvent } from "~/constants";


const upcomingEvents = () => {
  return (
    <div className="flex flex-col md:flex-row items-start py-12 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start">
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            {nextEvent.title}
          </h2>
          <p>
            <strong>Location:</strong> {nextEvent.location}
          </p>
          <p>
            <strong>Date:</strong> {nextEvent.date}
          </p>
          <p className="mt-4">{nextEvent.description}</p>
        </div>

        <div className="flex-shrink-0 max-w-full">
          <img
            src={nextEvent.image.src}
            className="w-full max-h-[20rem] md:max-h-[30rem] lg:max-h-[35rem] object-cover border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default upcomingEvents;
