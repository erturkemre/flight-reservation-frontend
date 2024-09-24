import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import React from "react";

const formatDate = (dateString) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

const calculateFlightDuration = (departureTime, arrivalTime) => {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);
  const durationMs = arrival - departure;
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

const ReservationCard = ({ reservation = { flight: {} } }) => {
  if (!reservation || !reservation.flight) {
    return <div className="text-red-500">Reservation data is not available.</div>;
  }

  const {
    flight: {
      actualLandingTime = "",
      estimatedLandingTime = "",
      airlineName = { publicName: { english: "Unknown" } },
      aircraftDescription = { aircraftTypes: [{ longDescription: "Unknown" }] },
      flightNumber = "",
      scheduleDateTime = "",
    },
  } = reservation;

  const flightDuration = calculateFlightDuration(scheduleDateTime, actualLandingTime);

  return (
    <div className="flex flex-col relative p-5 border border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-full ">
      <div className="flex flex-row text-2xl font-bold mb-4 items-center sm:gap-20">
        <div className="flex items-center">
          <PlaneTakeoff className="text-green-600" />
          <span className="ml-2">{formatDate(scheduleDateTime)}</span>
        </div>
        <div className="flex items-center">
          <PlaneLanding className="text-red-600" />
          <span className="ml-2">{formatDate(actualLandingTime)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between items-center">
        <div className="flex flex-col w-full sm:w-1/3">
          <div className="text-lg font-medium mb-2">
            Aircraft: {aircraftDescription.aircraftTypes[0].longDescription}
          </div>
          <div className="text-md">Airline: {airlineName.publicName.english}</div>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/3">
          <FontAwesomeIcon icon={faPlane} size="3x" className="text-gray-600" />
          <span className="text-xl font-semibold mt-2">{flightDuration}</span>
        </div>

        <div className="flex flex-col w-fit sm:w-1/3 text-lg font-semibold">
          <div>Flight Number: {flightNumber}</div>
        </div>
      </div>

      <div className="flex flex-col items-start mt-6">
        <span className="text-2xl font-bold text-[#6a1b9a]">
          Price: {/* Fiyat bilgisi buraya eklenmeli */} USD
        </span>
      </div>
    </div>
  );
};

export default ReservationCard;
